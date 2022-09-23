import { abs, max, clamp01, DEG_TO_RAD, identity, angle_lerp_degrees, lerp, min, angle_wrap_degrees } from "./math";
import {
  levers,
  player_position_final,
  allModels,
  MODEL_KIND_GAME,
  MODEL_ID_PLAYER_BODY,
  MODEL_ID_PLAYER_LEG0,
  MODEL_ID_PLAYER_LEG1,
} from "./game/models";
import {
  player_last_pulled_lever,
  lerpDamp,
  gameTimeDelta,
  keyboard_downKeys,
  KEY_LEFT,
  KEY_RIGHT,
  KEY_FRONT,
  KEY_BACK,
  KEY_INTERACT,
  gameTime,
} from "./game/world-state";
import { camera_rotation, camera_position } from "./camera";
import {
  GAMEPAD_BUTTON_A,
  GAMEPAD_BUTTON_X,
  GAMEPAD_BUTTON_Y,
  GAMEPAD_BUTTON_B,
  GAMEPAD_BUTTON_LEFT,
  GAMEPAD_BUTTON_RIGHT,
  GAMEPAD_BUTTON_UP,
  GAMEPAD_BUTTON_DOWN,
} from "./utils/keycodes";
import { touch_movementX, touch_movementY, player_first_person } from "./page";
import { gl } from "./gl";

export let player_update: () => void;

export const CAMERA_PLAYER_Y_DIST = 13;

export const CAMERA_PLAYER_Z_DIST = -18;

export const PLAYER_LEGS_VELOCITY = 7 * 1.3;

export const COLLISION_TEXTURE_SIZE = 128;

export const player_init = () => {
  let oldModelId: number | undefined;

  let currentModelIdTMinus1 = 0;

  let currentModelId = 0;

  let player_has_ground: 0 | 1 | undefined;
  let player_respawned: 0 | 1 | 2 = 2;
  let player_look_angle_target = 0;

  let player_look_angle = 0;

  let player_legs_speed = 0;

  let player_gravity: number;
  let player_speed: number;
  let player_collision_velocity_x: number;
  let player_collision_velocity_z: number;

  let player_model_y: number;

  let player_collision_x: number;
  let player_collision_z: number;

  // let _gamepadStartPressed = false;
  let _gamepadInteractPressed = false;

  let camera_lookat_x: number;
  let camera_lookat_y: number;
  let camera_lookat_z: number;

  const player_position_global = { x: 0, y: 0, z: 0 };

  const player_collision_modelIdCounter = new Int32Array(256);
  const collision_buffer = new Uint8Array(COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE * 4);

  const interpolate_with_hysteresis = /* @__PURE__ */ (previous: number, desired: number, hysteresis: number) =>
    lerpDamp(previous, desired, min(4, max(0.4, abs(previous - desired) - hysteresis)));

  const player_respawn = () => {
    player_respawned = 2;
    currentModelIdTMinus1 = currentModelId = levers[player_last_pulled_lever]!.$parent.$modelId || 1;
    player_speed = 0;
    player_collision_velocity_x = 0;
    player_collision_velocity_z = 0;
    player_gravity = 0;
  };

  const doHorizontalCollisions = () => {
    for (let y = 32; y < COLLISION_TEXTURE_SIZE; y += 2) {
      let front = 0;
      let back = 0;
      let left = 0;
      let right = 0;
      const yindex = y * (COLLISION_TEXTURE_SIZE * 4);
      for (let x = y & 1; x < COLLISION_TEXTURE_SIZE; x += 2) {
        const i1 = yindex + x * 4;
        const i2 = yindex + (COLLISION_TEXTURE_SIZE - 1 - x) * 4;
        const dist1 = collision_buffer[i1]! / 255;
        const dist2 = collision_buffer[i2 + 1]! / 255;
        const t = 1 - abs(2 * (x / (COLLISION_TEXTURE_SIZE - 1)) - 1);

        if (x > 10 && x < COLLISION_TEXTURE_SIZE - 10) {
          front = max(front, max(dist1 * t, (dist1 * collision_buffer[i2]!) / 255));
          back = max(back, max(dist2 * t, (dist2 * collision_buffer[i1 + 1]!) / 255));
        }

        if (x < COLLISION_TEXTURE_SIZE / 2 - 10 || x > COLLISION_TEXTURE_SIZE / 2 + 10) {
          const xdist = ((1 - t) * max(dist1, dist2)) / 3;
          if (xdist > 0.001) {
            if (x < COLLISION_TEXTURE_SIZE / 2 && left < xdist) {
              left = xdist;
            } else if (x > COLLISION_TEXTURE_SIZE / 2 && right < xdist) {
              right = xdist;
            }
          }
        }
      }

      if (abs(right - left) > abs(player_collision_x)) {
        player_collision_x = right - left;
      }
      if (abs(back - front) > abs(player_collision_z)) {
        player_collision_z = back - front;
      }
    }
  };

  const doVerticalCollisions = () => {
    let maxModelIdCount = 0;
    let nextModelId = 0;
    let lines = 0;
    let grav = 0;
    player_collision_modelIdCounter.fill(0);
    for (let y = 0; y < 31; ++y) {
      let up = 0;
      const yindex = y * (COLLISION_TEXTURE_SIZE * 4);
      for (let x = 0; x < COLLISION_TEXTURE_SIZE - 0; x++) {
        let i = yindex + x * 4;
        const a = (collision_buffer[i]! + collision_buffer[i + 1]!) / 255;
        i = collision_buffer[i + 2]!;
        if (x > 14 && x < COLLISION_TEXTURE_SIZE - 14) {
          up += a;
        }
        if (i && a) {
          const count = player_collision_modelIdCounter[i]! + 1;
          player_collision_modelIdCounter[i] = count;
          if (count >= maxModelIdCount) {
            maxModelIdCount = count;
            nextModelId = i;
          }
        }
      }
      if (up < 3 && y > 5) {
        grav += y / 32;
      }
      if (up > 3) {
        if (y > 7) {
          lines += y / 15;
        }
        player_has_ground = 1;
      }
    }

    if (nextModelId) {
      player_has_ground = 1;
    }

    if (player_respawned) {
      // keep the previous modelId until the player touch ground
      if (nextModelId) {
        player_respawned = 0;
        currentModelId = nextModelId;
      }
    } else {
      currentModelId = nextModelId || currentModelIdTMinus1;
    }
    currentModelIdTMinus1 = nextModelId;

    player_gravity = lerpDamp(player_gravity, player_has_ground ? 6.5 : 8, 4);

    // push up and gravity
    player_position_global.y +=
      lines / 41 - (player_has_ground ? 1 : player_gravity) * (grav / 41) * player_gravity * gameTimeDelta;
  };

  player_update = () => {
    let strafe = touch_movementX + (keyboard_downKeys[KEY_LEFT] ? 1 : 0) + (keyboard_downKeys[KEY_RIGHT] ? -1 : 0);
    let forward = touch_movementY + (keyboard_downKeys[KEY_FRONT] ? 1 : 0) + (keyboard_downKeys[KEY_BACK] ? -1 : 0);

    const gamepad = navigator.getGamepads()[0];
    if (gamepad) {
      const { buttons, axes } = gamepad;
      const getGamepadButtonState = (index: number) => buttons[index]?.pressed || (buttons[index]?.value as any) > 0;

      const interactButtonPressed =
        getGamepadButtonState(GAMEPAD_BUTTON_A) ||
        getGamepadButtonState(GAMEPAD_BUTTON_X) ||
        getGamepadButtonState(GAMEPAD_BUTTON_Y) ||
        getGamepadButtonState(GAMEPAD_BUTTON_B);
      if (interactButtonPressed !== _gamepadInteractPressed) {
        _gamepadInteractPressed = interactButtonPressed;
        if (_gamepadInteractPressed) {
          keyboard_downKeys[KEY_INTERACT] = 1;
        }
      }

      strafe +=
        (abs(-axes[0]!) > 0.2 ? -axes[0]! : 0) +
        (getGamepadButtonState(GAMEPAD_BUTTON_LEFT) ? 1 : 0) +
        (getGamepadButtonState(GAMEPAD_BUTTON_RIGHT) ? -1 : 0);

      forward +=
        (abs(-axes[1]!) > 0.2 ? -axes[1]! : 0) +
        (getGamepadButtonState(GAMEPAD_BUTTON_UP) ? 1 : 0) +
        (getGamepadButtonState(GAMEPAD_BUTTON_DOWN) ? -1 : 0);

      // const startPressed = getGamepadButtonState(GAMEPAD_BUTTON_START);
      // if (_gamepadStartPressed !== startPressed && startPressed && game_play_clicked_once) {
      //   setMainMenuVisible(!mainMenuVisible);
      // }
      // _gamepadStartPressed = startPressed;

      if (player_first_person) {
        if (abs(axes[2]!) > 0.3) {
          camera_rotation.y += axes[2]! * 80 * gameTimeDelta;
        }
        if (abs(axes[3]!) > 0.3) {
          camera_rotation.x += axes[3]! * 80 * gameTimeDelta;
        }
      }
    }

    // if (abs(forward) < 0.05) {
    //   forward = 0;
    // }
    // if (abs(strafe) < 0.05) {
    //   strafe = 0;
    // }

    const movAngle = Math.atan2(forward, strafe);
    let movAmount = clamp01(Math.hypot(forward, strafe));

    if (movAmount < 0.05) {
      movAmount = 0;
    }

    strafe = movAmount * Math.cos(movAngle);
    forward = movAmount * Math.sin(movAngle);

    player_collision_x = 0;
    player_collision_z = 0;
    player_has_ground = 0;

    gl.finish();
    gl.readPixels(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, gl.RGBA, gl.UNSIGNED_BYTE, collision_buffer);
    gl.invalidateFramebuffer(gl.READ_FRAMEBUFFER, [gl.COLOR_ATTACHMENT0, gl.DEPTH_ATTACHMENT]);
    gl.invalidateFramebuffer(gl.DRAW_FRAMEBUFFER, [gl.COLOR_ATTACHMENT0, gl.DEPTH_ATTACHMENT]);

    NO_INLINE(doHorizontalCollisions)();
    NO_INLINE(doVerticalCollisions)();

    const playerSpeedCollision = clamp01(1 - max(abs(player_collision_x), abs(player_collision_z)) * 5);

    if (!currentModelId) {
      player_collision_x += player_collision_velocity_x * playerSpeedCollision * gameTimeDelta;
      player_collision_z += player_collision_velocity_z * playerSpeedCollision * gameTimeDelta;
    }
    player_collision_velocity_x = lerpDamp(player_collision_velocity_x, 0, player_has_ground ? 8 : 4);
    player_collision_velocity_z = lerpDamp(player_collision_velocity_z, 0, player_has_ground ? 8 : 4);

    player_speed = lerpDamp(
      player_speed,
      player_has_ground ? (movAmount ? (player_has_ground ? 7 : 4) : 0) * playerSpeedCollision : 0,
      player_has_ground ? (playerSpeedCollision > 0.1 ? 10 : movAmount ? 5 : 7) : 1,
    );

    const movementRadians = player_first_person ? camera_rotation.y * DEG_TO_RAD : Math.PI;
    const s = Math.sin(movementRadians) * player_speed * gameTimeDelta;
    const c = Math.cos(movementRadians) * player_speed * gameTimeDelta;
    player_collision_x -= strafe * c - forward * s;
    player_collision_z -= strafe * s + forward * c;

    const referenceMatrix =
      (allModels[currentModelId]!.$kind === MODEL_KIND_GAME && allModels[currentModelId]!.$matrix) || identity;

    if (player_respawned) {
      const { $locMatrix } = levers[player_last_pulled_lever]!;
      const { x: respawnX, y: respawnY, z: respawnZ } = $locMatrix!.transformPoint({ x: 0, y: 12, z: -2.5 });
      if (player_respawned > 1) {
        player_respawned = 1;
        player_model_y = player_position_final.y = respawnY;
      }
      player_position_final.x = respawnX;
      player_position_final.z = respawnZ;
    } else {
      const inverseReferenceRotationMatrix = referenceMatrix.inverse();
      inverseReferenceRotationMatrix.m41 = 0;
      inverseReferenceRotationMatrix.m42 = 0;
      inverseReferenceRotationMatrix.m43 = 0;
      const { x: tx, z: tz } = inverseReferenceRotationMatrix.transformPoint({
        x: player_collision_x,
        z: player_collision_z,
        w: 0,
      });
      player_position_global.x += tx;
      player_position_global.z += tz;
    }

    if (currentModelId !== oldModelId) {
      if (DEBUG) {
        console.log("modelId: " + oldModelId + " -> " + currentModelId);
      }

      oldModelId = currentModelId;

      const { x, y, z } = referenceMatrix.inverse().transformPoint(player_position_final);
      player_position_global.x = x;
      player_position_global.y = y;
      player_position_global.z = z;
    }

    const { x, y, z } = referenceMatrix.transformPoint(player_position_global);

    const dx = x - player_position_final.x;
    const dz = z - player_position_final.z;

    player_position_final.x = x;
    player_position_final.y = y;
    player_position_final.z = z;

    if (currentModelId) {
      player_collision_velocity_x = dx / gameTimeDelta;
      player_collision_velocity_z = dz / gameTimeDelta;
    }

    if (movAmount) {
      player_look_angle_target = 90 - movAngle / DEG_TO_RAD;
    }

    player_model_y = lerp(lerpDamp(player_model_y, y, 2), y, abs(player_model_y - y) * 8);

    if (!DEBUG_CAMERA) {
      if (camera_lookat_x === undefined) {
        camera_position.x = camera_lookat_x = x;
        camera_position.y = (camera_lookat_y = player_model_y = y) + CAMERA_PLAYER_Y_DIST;
        camera_position.z = (camera_lookat_z = z) + CAMERA_PLAYER_Z_DIST * 2;
      }

      camera_lookat_x = interpolate_with_hysteresis(camera_lookat_x, x, 1.5);
      camera_lookat_y = interpolate_with_hysteresis(camera_lookat_y, y, 2.2);
      camera_lookat_z = interpolate_with_hysteresis(camera_lookat_z, z, 1.5);

      if (player_first_person) {
        camera_position.x = lerpDamp(camera_position.x, x, player_respawned * 666 + 18);
        camera_position.y = lerpDamp(camera_position.y, player_model_y + 1.5, player_respawned * 666 + 18);
        camera_position.z = lerpDamp(camera_position.z, z, player_respawned * 666 + 18);
      } else {
        camera_position.x = lerpDamp(camera_position.x, camera_lookat_x, 2);
        camera_position.y = lerpDamp(camera_position.y, max(camera_lookat_y + CAMERA_PLAYER_Y_DIST, 6), 2);
        camera_position.z = lerpDamp(camera_position.z, camera_lookat_z + CAMERA_PLAYER_Z_DIST, 2);

        const viewDirDiffz = camera_position.z - camera_lookat_z;
        if (abs(viewDirDiffz) > 1) {
          const viewDirDiffx = camera_position.x - camera_lookat_x;
          camera_rotation.y = 270 + Math.atan2(viewDirDiffz, viewDirDiffx) / DEG_TO_RAD;
          camera_rotation.x =
            90 - Math.atan2(Math.hypot(viewDirDiffz, viewDirDiffx), camera_position.y - camera_lookat_y) / DEG_TO_RAD;
        }
      }

      camera_rotation.x = max(min(camera_rotation.x, 87), -87);
      camera_rotation.y = angle_wrap_degrees(camera_rotation.y);
    }

    if (y < (x < -25 || z < 109 ? -25 : -9)) {
      // Player fell in lava
      player_respawn();
    }

    // Special handling for the second boat (lever 7) - the boat must be on the side of the map the player is
    if (currentModelId === 1) {
      levers[9]!.$value = x < -15 && z < 0 ? 1 : 0;
    }

    const playerMatrix = (allModels[MODEL_ID_PLAYER_BODY]!.$matrix = identity
      .translate(x, player_model_y, z)
      .rotateSelf(
        0,
        (player_look_angle = angle_lerp_degrees(player_look_angle, player_look_angle_target, gameTimeDelta * 8)),
      ));

    player_legs_speed = lerpDamp(player_legs_speed, movAmount, 10);

    [MODEL_ID_PLAYER_LEG0, MODEL_ID_PLAYER_LEG1].map((modelId, i) => {
      allModels[modelId]!.$matrix = playerMatrix
        .translate(
          0,
          player_legs_speed *
            clamp01(Math.sin(gameTime * PLAYER_LEGS_VELOCITY + Math.PI * (i - 1) - Math.PI / 2) * 0.45),
        )
        .rotateSelf(
          player_legs_speed * Math.sin(gameTime * PLAYER_LEGS_VELOCITY + Math.PI * (i - 1)) * (0.25 / DEG_TO_RAD),
          0,
        );
    });
  };

  player_respawn();
};
