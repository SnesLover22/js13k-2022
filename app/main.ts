if (DEBUG) {
  console.time("boot");
  console.time("LOADED");
}

import {
  abs,
  angle_lerp,
  angle_wrap_degrees,
  clamp01,
  DEG_TO_RAD,
  integers_map,
  interpolate_with_hysteresis,
  lerp,
  max,
  min,
} from "./math/math";
import { identity, mat_perspectiveXY } from "./math/matrix";
import { mat_perspective, zFar, zNear, camera_position, camera_rotation, camera_view } from "./camera";
import { csm_buildMatrix } from "./csm";
import { gameTime, gameTimeDelta, gameTimeUpdate, lerpDamp } from "./game-time";
import {
  levers,
  player_position_final,
  player_position_global,
  player_position_initial,
  worldStateUpdate,
} from "./game/world-state";
import { renderModels, updateModels, rootModel, initTriangleBuffers, modelsByModelId } from "./game/scene";
import { buildWorld, playerLeftLegModel, playerModel, playerRightLegModel } from "./game/level";
import {
  initInputHandlers,
  keyboard_downKeys,
  KEY_BACK,
  KEY_DEBUG_FLY_DOWN,
  KEY_DEBUG_FLY_UP,
  KEY_FRONT,
  KEY_LEFT,
  KEY_RIGHT,
  KEY_RUN,
  input_frameReset,
  mouse_movementX,
  mouse_movementY,
} from "./input";
import { gl, initGl, initShaderProgram, loadShader } from "./gl";

import csm_vsSource from "./shaders/csm-vertex.vert";
import main_vsSource, {
  uniformName_projectionMatrix,
  uniformName_viewMatrix,
  uniformName_worldMatrix,
} from "./shaders/main-vertex.vert";
import main_fsSource, {
  uniformName_viewPos,
  uniformName_csm_matrices,
  uniformName_csm_textures,
  uniformName_groundTexture,
  constDef_CSM_TEXTURE_SIZE as CSM_TEXTURE_SIZE,
  constDef_CSM_PLANE_DISTANCE0 as CSM_PLANE_DISTANCE0,
  constDef_CSM_PLANE_DISTANCE1 as CSM_PLANE_DISTANCE1,
} from "./shaders/main-fragment.frag";
import collider_fsSource, { uniformName_modelId } from "./shaders/collider-fragment.frag";
import void_fsSource from "./shaders/void-fragment.frag";
import sky_vsSource from "./shaders/sky-vertex.vert";
import sky_fsSource, { uniformName_iResolution } from "./shaders/sky-fragment.frag";
import type { Vec3In } from "./math/vectors";
import { player_last_pulled_lever } from "./game/levers";
import { loadGroundTexture, texturesLoaded } from "./ground-texture";

const COLLISION_TEXTURE_SIZE = 128;

initGl();

const isFirstPerson = () => DEBUG_FLAG3;

requestAnimationFrame(() => {
  const _frameBuffersInvalidations = [gl.COLOR_ATTACHMENT0, gl.DEPTH_ATTACHMENT];

  let debug2dctx: CanvasRenderingContext2D | null | undefined;

  let oldModelId = 0;
  let currentModelId = 0;

  let player_look_angle_target = 0;
  let player_look_angle = 0;
  let player_legs_speed = 0;
  let player_gravity = 1;
  let player_speed = 0;
  let player_collision_velocity_x = 0;
  let player_collision_velocity_z = 0;
  let player_selected_velocity = 0;
  let player_has_ground: 0 | 1 = 0;
  let player_collision_x = 0;
  let player_collision_z = 0;
  let camera_player_dir_x = player_position_global.x;
  let camera_player_dir_y = player_position_global.y + 13;
  let camera_player_dir_z = player_position_global.z - 18;
  let player_respawned = 1;

  const player_forceSetPosition = ({ x, y, z }: Vec3In) => {
    player_speed = 0;
    player_gravity = -15;
    player_collision_velocity_x = 0;
    player_collision_velocity_z = 0;
    player_has_ground = 0;
    player_collision_x = 0;
    player_collision_z = 0;
    player_position_global.x = x;
    player_position_global.y = y;
    player_position_global.z = z;
    player_position_final.x = x;
    player_position_final.y = y;
    player_position_final.z = z;
    player_respawned = 1;
  };

  const player_respawn = () => {
    const { $matrix, $modelId } = levers[player_last_pulled_lever]!;
    currentModelId = $modelId;
    player_forceSetPosition($matrix ? $matrix.transformPoint({ x: 0, y: 10, z: -3 }) : player_position_initial);
  };

  const player_collision_modelIdCounter = new Int32Array(256);

  const doVerticalCollisions = (_collision_buffer: Uint8Array) => {
    let maxModelIdCount = 0;
    let nextModelId = 0;
    player_collision_modelIdCounter.fill(0);

    let lines = 0;
    let grav = 0;
    let hasGround: 0 | 1 = 0;
    for (let y = 0; y < 31; ++y) {
      let up = 0;
      const yindex = y * (COLLISION_TEXTURE_SIZE * 4);
      for (let x = 0; x < COLLISION_TEXTURE_SIZE - 0; x++) {
        let i = yindex + x * 4;
        const a = (_collision_buffer[i]! + _collision_buffer[i + 1]!) / 255;
        i = _collision_buffer[i + 2]!;
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
        hasGround = 1;
      }
    }

    if (nextModelId) {
      hasGround = 1;
    }

    if (player_respawned) {
      // keep the previous modelId until the player touch ground
      if (nextModelId) {
        player_respawned = 0;
        currentModelId = nextModelId;
      }
    } else {
      currentModelId = nextModelId;
    }

    player_has_ground = hasGround;
    player_gravity = lerpDamp(player_gravity, hasGround ? 6.5 : 8, 4);

    if (!DEBUG || (!keyboard_downKeys[KEY_DEBUG_FLY_UP] && !keyboard_downKeys[KEY_DEBUG_FLY_DOWN])) {
      // push up and gravity
      return lines / 41 - (hasGround ? 1 : player_gravity) * (grav / 41) * player_gravity * gameTimeDelta;
    }
    return 0;
  };

  const doHorizontalCollisions = (_collision_buffer: Uint8Array) => {
    let ddx = 0;
    let ddz = 0;
    for (let y = 32; y < COLLISION_TEXTURE_SIZE; y += 2) {
      let front = 0;
      let back = 0;
      let left = 0;
      let right = 0;
      const yindex = y * (COLLISION_TEXTURE_SIZE * 4);
      for (let x = (y >> 1) & 1; x < COLLISION_TEXTURE_SIZE; x += 2) {
        const i1 = yindex + x * 4;
        const i2 = yindex + (COLLISION_TEXTURE_SIZE - 1 - x) * 4;
        const dist1 = _collision_buffer[i1]! / 255;
        const dist2 = _collision_buffer[i2 + 1]! / 255;

        const t = 1 - abs(2 * (x / (COLLISION_TEXTURE_SIZE - 1)) - 1);

        if (x > 10 && x < COLLISION_TEXTURE_SIZE - 10) {
          const dist1Opposite = _collision_buffer[i2]! / 255;
          front = max(front, max(dist1 * t, dist1 * dist1Opposite * 2));
          const dist2Opposite = _collision_buffer[i1 + 1]! / 255;
          back = max(back, max(dist2 * t, dist2 * dist2Opposite));
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

      const dx = right - left;
      const dz = back - front;

      if (abs(dx) > abs(ddx)) {
        ddx = dx;
      }
      if (abs(dz) > abs(ddz)) {
        ddz = dz;
      }
    }
    player_collision_x = ddx;
    player_collision_z = ddz;
  };

  const collision_buffer = new Uint8Array(COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE * 4);
  const collision_texture = gl.createTexture()!;
  const collision_frameBuffer = gl.createFramebuffer()!;
  const collision_renderBuffer = gl.createRenderbuffer();

  const skyShader = initShaderProgram(loadShader(sky_vsSource), sky_fsSource);
  gl.uniform1i(skyShader(uniformName_groundTexture), 3); // TEXTURE3

  const csmShader = initShaderProgram(loadShader(csm_vsSource), void_fsSource);

  const main_vertexShader = loadShader(main_vsSource);
  const collisionShader = initShaderProgram(main_vertexShader, collider_fsSource);

  gl.uniformMatrix4fv(collisionShader(uniformName_projectionMatrix), false, mat_perspectiveXY(1.4, 0.59, 0.0001, 1));

  const mainShader = initShaderProgram(main_vertexShader, main_fsSource);
  gl.uniform1i(mainShader(uniformName_groundTexture), 3); // TEXTURE3

  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.enable(gl.CULL_FACE); // Don't render triangle backs

  gl.clearDepth(1); // Clear everything. Default value is 1
  gl.cullFace(gl.BACK); // Default value is already BACK
  gl.depthFunc(gl.LEQUAL); // LEQUAL is required for sky

  gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
  gl.bindRenderbuffer(gl.RENDERBUFFER, collision_renderBuffer);

  gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
  gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, collision_renderBuffer);

  gl.activeTexture(gl.TEXTURE3);
  gl.bindTexture(gl.TEXTURE_2D, collision_texture);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, collision_texture, 0);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGB,
    COLLISION_TEXTURE_SIZE,
    COLLISION_TEXTURE_SIZE,
    0,
    gl.RGB,
    gl.UNSIGNED_BYTE,
    null,
  );

  const csm_render = integers_map(3, (csmSplit: number) => {
    let lightSpaceMatrix: Float32Array;
    const texture = gl.createTexture()!;
    const frameBuffer = gl.createFramebuffer();
    const lightSpaceMatrixLoc = mainShader(uniformName_csm_matrices + `[${csmSplit}]`);
    gl.uniform1i(mainShader(uniformName_csm_textures + `[${csmSplit}]`), csmSplit);

    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);

    // Disable rendering to the color buffer, we just need the depth buffer
    gl.drawBuffers([gl.NONE]);
    gl.readBuffer(gl.NONE);

    gl.activeTexture(gl.TEXTURE0 + csmSplit);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, texture, 0);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.DEPTH_COMPONENT32F,
      CSM_TEXTURE_SIZE,
      CSM_TEXTURE_SIZE,
      0,
      gl.DEPTH_COMPONENT,
      gl.FLOAT,
      null,
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_FUNC, gl.LEQUAL); // Can be LESS or LEQUAL
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_MODE, gl.COMPARE_REF_TO_TEXTURE);

    return (matrix?: Float32Array | 1) => {
      if (matrix) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        if (matrix === 1) {
          gl.invalidateFramebuffer(gl.FRAMEBUFFER, _frameBuffersInvalidations);
        } else {
          gl.clear(gl.DEPTH_BUFFER_BIT);
          gl.uniformMatrix4fv(csmShader(uniformName_viewMatrix), false, (lightSpaceMatrix = matrix));
          renderModels(csmShader(uniformName_worldMatrix), !isFirstPerson());
        }
      } else {
        gl.uniformMatrix4fv(lightSpaceMatrixLoc, false, lightSpaceMatrix);
      }
    };
  });

  buildWorld();

  playerModel._update = () =>
    identity
      .translate(player_position_final.x, player_position_final.y, player_position_final.z)
      .rotateSelf(0, player_look_angle / DEG_TO_RAD);

  playerRightLegModel._update = () =>
    identity
      .translate(
        0,
        player_legs_speed * clamp01(Math.sin(gameTime * player_selected_velocity * 1.7 - Math.PI / 2) * 0.45),
      )
      .rotateSelf(player_legs_speed * Math.sin(gameTime * player_selected_velocity * 1.7) * (0.25 / DEG_TO_RAD), 0);

  playerLeftLegModel._update = () =>
    identity
      .translate(
        0,
        player_legs_speed * clamp01(Math.sin(gameTime * player_selected_velocity * 1.7 + Math.PI / 2) * 0.45),
      )
      .rotateSelf(
        player_legs_speed * Math.sin(gameTime * player_selected_velocity * 1.7 + Math.PI) * (0.25 / DEG_TO_RAD),
        0,
      );

  initTriangleBuffers();

  const draw = (globalTime: number) => {
    requestAnimationFrame(draw);

    if (!texturesLoaded) {
      return;
    }

    const movStrafe = (keyboard_downKeys[KEY_LEFT] ? 1 : 0) + (keyboard_downKeys[KEY_RIGHT] ? -1 : 0);
    const movForward = (keyboard_downKeys[KEY_FRONT] ? 1 : 0) + (keyboard_downKeys[KEY_BACK] ? -1 : 0);
    player_selected_velocity = keyboard_downKeys[KEY_RUN] ? 7 : 4;

    // *** COLLISIONS ***

    if (DEBUG) {
      if (keyboard_downKeys[KEY_DEBUG_FLY_UP]) {
        player_position_global.y += 4 * gameTimeDelta;
      }
      // if (keyboard_downKeys[KEY_DEBUG_FLY_DOWN]) {
      //   player_position_global.y -= 4 * gameTimeDelta;
      // }
    }

    if (gameTimeDelta > 0) {
      // *** COLLISION from the previos frame ***

      gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
      gl.readPixels(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, gl.RGBA, gl.UNSIGNED_BYTE, collision_buffer);
      gl.invalidateFramebuffer(gl.FRAMEBUFFER, _frameBuffersInvalidations);

      // Ground Collision:

      player_position_global.y += doVerticalCollisions(collision_buffer);
      doHorizontalCollisions(collision_buffer);

      // sides collision

      const playerSpeedCollision = clamp01(1 - max(abs(player_collision_x), abs(player_collision_z)) * 5);

      // // adjust collision push back based on the duration of the frame, to address slower machines with lower FPS
      // const collisionPushBackReduction = lerp(3.65, 1.1, max(0.008, gameTimeDelta) / GAME_TIME_MAX_DELTA_TIME);
      // ddx /= collisionPushBackReduction;
      // ddz /= collisionPushBackReduction;

      if (!currentModelId) {
        player_collision_x += player_collision_velocity_x * playerSpeedCollision * gameTimeDelta;
        player_collision_z += player_collision_velocity_z * playerSpeedCollision * gameTimeDelta;
      }
      player_collision_velocity_x = lerpDamp(player_collision_velocity_x, 0, player_has_ground ? 8 : 4);
      player_collision_velocity_z = lerpDamp(player_collision_velocity_z, 0, player_has_ground ? 8 : 4);

      player_speed = lerpDamp(
        player_speed,
        player_has_ground || (DEBUG && keyboard_downKeys[KEY_DEBUG_FLY_UP]) || keyboard_downKeys[KEY_DEBUG_FLY_DOWN]
          ? (movStrafe || movForward ? player_selected_velocity : 0) * playerSpeedCollision
          : 0,
        player_has_ground ? (playerSpeedCollision > 0.1 ? 10 : movStrafe || movForward ? 5 : 7) : 1,
      );

      const effectivePlayerSpeed = (movStrafe && movForward ? Math.SQRT1_2 : 1) * player_speed * gameTimeDelta;

      if (isFirstPerson()) {
        const yradians = camera_rotation.y * DEG_TO_RAD;
        const s = Math.sin(yradians) * effectivePlayerSpeed;
        const c = Math.cos(yradians) * effectivePlayerSpeed;
        player_collision_x -= movStrafe * c - movForward * s;
        player_collision_z -= movStrafe * s + movForward * c;
      } else {
        player_collision_x += movStrafe * effectivePlayerSpeed;
        player_collision_z += movForward * effectivePlayerSpeed;
      }

      const referenceMatrix = modelsByModelId[currentModelId]?.$finalMatrix || identity;
      const referenceMatrixInverse = referenceMatrix.inverse();

      ({ x: player_collision_x, z: player_collision_z } = referenceMatrixInverse.transformPoint({
        x: player_collision_x,
        y: 0,
        z: player_collision_z,
        w: 0,
      }));

      player_position_global.z += player_collision_z;
      player_position_global.x += player_collision_x;

      if (currentModelId !== oldModelId) {
        if (DEBUG) {
          console.log("modelId: " + oldModelId + " -> " + currentModelId);
        }

        oldModelId = currentModelId;
        ({
          x: player_position_global.x,
          y: player_position_global.y,
          z: player_position_global.z,
        } = referenceMatrixInverse.transformPoint(player_position_final));
      }

      const oldx = player_position_final.x;
      const oldz = player_position_final.z;

      ({
        x: player_position_final.x,
        y: player_position_final.y,
        z: player_position_final.z,
      } = referenceMatrix.transformPoint(player_position_global));

      if (currentModelId) {
        player_collision_velocity_x = (player_position_final.x - oldx) / gameTimeDelta;
        player_collision_velocity_z = (player_position_final.z - oldz) / gameTimeDelta;
      }

      if (DEBUG) {
        const debugCanvas = document.getElementById("debug-canvas") as HTMLCanvasElement;

        const buf = new Uint8ClampedArray(COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE * 4);

        if (debugCanvas) {
          for (let y = 0; y < COLLISION_TEXTURE_SIZE; ++y) {
            for (let x = 0; x < COLLISION_TEXTURE_SIZE; ++x) {
              const i = ((COLLISION_TEXTURE_SIZE - y) * COLLISION_TEXTURE_SIZE + x) * 4;
              const r = collision_buffer[i]!;
              const g = collision_buffer[i + 1]!;
              // const b = collision_buffer[i + 2]!;

              buf[(y * COLLISION_TEXTURE_SIZE + x) * 4] = r;
              buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 1] = g;
              // buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 2] = b ? 200 : 0;
              buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 3] = 255;
            }
          }

          const imgdata = new ImageData(buf, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);

          if (!debug2dctx) {
            debug2dctx = debugCanvas.getContext("2d")!;
          }
          debug2dctx.putImageData(imgdata, 0, 0, 0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
        }
      }
    }

    // Update time here, after collision. Collision is for the previous frame

    gameTimeUpdate(globalTime);

    if (!DEBUG_CAMERA) {
      camera_player_dir_x = interpolate_with_hysteresis(
        camera_player_dir_x,
        player_position_final.x,
        0.5,
        gameTimeDelta,
      );
      camera_player_dir_y = interpolate_with_hysteresis(camera_player_dir_y, player_position_final.y, 2, gameTimeDelta);
      camera_player_dir_z = interpolate_with_hysteresis(
        camera_player_dir_z,
        player_position_final.z,
        0.5,
        gameTimeDelta,
      );

      if (isFirstPerson()) {
        camera_position.x = lerpDamp(camera_position.x, player_position_final.x, 18);
        camera_position.y = lerpDamp(camera_position.y, player_position_final.y + 1.5, 15);
        camera_position.z = lerpDamp(camera_position.z, player_position_final.z, 18);
        camera_rotation.y = angle_wrap_degrees(camera_rotation.y + mouse_movementX * 0.1);
        camera_rotation.x = max(min(camera_rotation.x + mouse_movementY * 0.1, 87), -87);
      } else {
        camera_position.x = interpolate_with_hysteresis(camera_position.x, camera_player_dir_x, 1, gameTimeDelta * 2);
        camera_position.y = interpolate_with_hysteresis(
          camera_position.y,
          camera_player_dir_y + 13 + player_respawned * 15, // max(10, camera_player_dir_y + 13),
          4,
          gameTimeDelta * 2,
        );
        camera_position.z = interpolate_with_hysteresis(
          camera_position.z,
          camera_player_dir_z - 18,
          1,
          gameTimeDelta * 2,
        );

        const viewDirDiffx = camera_position.x - camera_player_dir_x;
        const viewDirDiffy = camera_position.y - camera_player_dir_y;
        const viewDirDiffz = camera_position.z - camera_player_dir_z;

        if (abs(viewDirDiffz) > 1 || abs(viewDirDiffx) > 1) {
          camera_rotation.y = 270 + Math.atan2(viewDirDiffz, viewDirDiffx) / DEG_TO_RAD;
          camera_rotation.x =
            90 -
            Math.atan2(Math.sqrt(viewDirDiffz * viewDirDiffz + viewDirDiffx * viewDirDiffx) || 0, viewDirDiffy) /
              DEG_TO_RAD;
        }
      }
    }

    camera_view
      .setMatrixValue("none")
      .rotateSelf(-camera_rotation.x, -camera_rotation.y, -camera_rotation.z)
      .invertSelf()
      .translateSelf(-camera_position.x, -camera_position.y, -camera_position.z);

    if (movStrafe || movForward) {
      player_look_angle_target = Math.atan2(movStrafe, movForward);
    }

    player_look_angle = angle_lerp(player_look_angle, player_look_angle_target, gameTimeDelta * 8);
    player_legs_speed = lerp(player_legs_speed, movStrafe || movForward ? 1 : 0, gameTimeDelta * 10);

    if (gameTimeDelta > 0) {
      worldStateUpdate();

      const PLAYER_FELL_IN_LAVA_Y = -25;
      if (player_position_final.y < PLAYER_FELL_IN_LAVA_Y) {
        player_respawn();
      }

      // *** CASCADED SHADOWMAPS ***

      csmShader();

      gl.viewport(0, 0, CSM_TEXTURE_SIZE, CSM_TEXTURE_SIZE);

      csm_render[0]!(csm_buildMatrix(zNear, CSM_PLANE_DISTANCE0, 10));
      csm_render[1]!(csm_buildMatrix(CSM_PLANE_DISTANCE0, CSM_PLANE_DISTANCE1, 11));
      csm_render[2]!(csm_buildMatrix(CSM_PLANE_DISTANCE1, zFar, 15));

      gl.bindFramebuffer(gl.FRAMEBUFFER, null);

      // *** MAIN RENDER ***

      mainShader();

      gl.clearColor(0, 0, 0, 1);

      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      gl.uniformMatrix4fv(mainShader(uniformName_projectionMatrix), false, mat_perspective(zNear, zFar));
      gl.uniformMatrix4fv(mainShader(uniformName_viewMatrix), false, camera_view.toFloat32Array());
      gl.uniform3f(mainShader(uniformName_viewPos), camera_position.x, camera_position.y, camera_position.z);

      csm_render[0]!();
      csm_render[1]!();
      csm_render[2]!();

      renderModels(mainShader(uniformName_worldMatrix), !isFirstPerson());

      // invalidate csm framebuffers

      csm_render[0]!(1);
      csm_render[1]!(1);
      csm_render[2]!(1);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);

      // *** SKY RENDER ***

      skyShader();

      gl.uniform3f(skyShader(uniformName_iResolution), gl.drawingBufferWidth, gl.drawingBufferHeight, gameTime);
      gl.uniform3f(skyShader(uniformName_viewPos), camera_position.x, camera_position.y, camera_position.z);
      gl.uniformMatrix4fv(skyShader(uniformName_viewMatrix), false, camera_view.invertSelf().toFloat32Array());

      gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 0);

      // *** COLLISION RENDERER ***

      collisionShader();

      // first collision render

      gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
      gl.viewport(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
      gl.colorMask(true, false, true, false);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.uniformMatrix4fv(
        collisionShader(uniformName_viewMatrix),
        false,
        identity
          .rotate(0, 180)
          .invertSelf()
          .translateSelf(-player_position_final.x, -player_position_final.y, 0.3 - player_position_final.z)
          .toFloat32Array(),
      );
      renderModels(collisionShader(uniformName_worldMatrix), 0, collisionShader(uniformName_modelId));

      // second collision render

      gl.colorMask(false, true, false, false);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.colorMask(false, true, true, false);
      gl.uniformMatrix4fv(
        collisionShader(uniformName_viewMatrix),
        false,
        identity
          .translate(-player_position_final.x, -player_position_final.y, -player_position_final.z - 0.3)
          .toFloat32Array(),
      );
      renderModels(collisionShader(uniformName_worldMatrix), 0, collisionShader(uniformName_modelId));
      gl.colorMask(true, true, true, true);

      // Special handling for the boat (lever 8) - the boat must be on the side of the map the player is
      if (currentModelId === 1) {
        levers[8]!.$value = player_position_final.x < -15 && player_position_final.z < 0 ? 1 : 0;
      }
    }

    // We update the models for the next frame, for performance
    updateModels(rootModel);

    input_frameReset();
  };

  loadGroundTexture();

  initInputHandlers();

  requestAnimationFrame(draw);

  NO_INLINE(doHorizontalCollisions);
  NO_INLINE(doVerticalCollisions);
  NO_INLINE(buildWorld);

  if (DEBUG) {
    console.timeEnd("boot");
  }
});
