import { matrixToArray, rotation } from "../math";
import { absoluteTime, mainMenuVisible } from "./world-state";
import {
  allModels,
  levers,
  MODEL_ID_LEVER,
  MODEL_ID_PLAYER_BODY,
  MODEL_ID_PLAYER_LEG0,
  MODEL_ID_PLAYER_LEG1,
  souls,
  SOULS_COUNT,
  type MODEL_ID_SOUL,
  type MODEL_ID_SOUL_COLLISION,
} from "./models";
import { gl } from "../gl";

const worldMatricesBuffer = new Float32Array(39 * 16);
const objectsMatricesBuffer = new Float32Array(39 * 16);

export const updateWorldMatrices = () => {
  // Setup world matrices

  for (let i = 0; i < allModels.length; ++i) {
    if (allModels[i]!.$kind) {
      matrixToArray(allModels[i]!.$matrix, worldMatricesBuffer, i - 1);
    }
  }

  // Setup souls and levers matrices

  for (let i = 0; i < SOULS_COUNT; ++i) {
    matrixToArray(souls[i]!.$matrix, objectsMatricesBuffer, i);
  }

  for (let i = 0; i < levers.length; ++i) {
    matrixToArray(levers[i]!.$matrix, objectsMatricesBuffer, i + SOULS_COUNT);
    // Encode lerp value in matrix m44 so fragmemt shader can change the lever handle color
    objectsMatricesBuffer[(i + SOULS_COUNT) * 16 + 15] = 1 - levers[i]!.$lerpValue;
  }
};

export const renderModels = (
  worldMatrixLoc: WebGLUniformLocation,
  renderPlayer: 0 | 1 | boolean,
  soulModelId: typeof MODEL_ID_SOUL | typeof MODEL_ID_SOUL_COLLISION,
) => {
  if (mainMenuVisible) {
    const matrix = rotation(0, Math.sin(absoluteTime) * 40 - 70);
    for (const modelId of [MODEL_ID_PLAYER_BODY, MODEL_ID_PLAYER_LEG0, MODEL_ID_PLAYER_LEG1]) {
      matrixToArray(matrix, worldMatricesBuffer, modelId - 1);
    }

    gl.uniformMatrix4fv(worldMatrixLoc, false, worldMatricesBuffer);
    gl.drawElements(
      gl.TRIANGLES,
      allModels[MODEL_ID_PLAYER_LEG1]!.$vertexEnd! - allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin!,
      gl.UNSIGNED_SHORT,
      allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin! * 2,
    );

    return;
  }

  // Render world

  gl.uniformMatrix4fv(worldMatrixLoc, false, worldMatricesBuffer);

  gl.drawElements(
    gl.TRIANGLES,
    (renderPlayer ? allModels[MODEL_ID_PLAYER_LEG1]!.$vertexEnd! : allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin!) - 3,
    gl.UNSIGNED_SHORT,
    3 * 2,
  );

  gl.uniformMatrix4fv(worldMatrixLoc, false, objectsMatricesBuffer);

  // Render souls

  gl.drawElementsInstanced(
    gl.TRIANGLES,
    allModels[soulModelId]!.$vertexEnd! - allModels[soulModelId]!.$vertexBegin!,
    gl.UNSIGNED_SHORT,
    allModels[soulModelId]!.$vertexBegin! * 2,
    13,
  );

  // Render levers

  gl.drawElementsInstanced(
    gl.TRIANGLES,
    allModels[MODEL_ID_LEVER]!.$vertexEnd! - allModels[MODEL_ID_LEVER]!.$vertexBegin!,
    gl.UNSIGNED_SHORT,
    allModels[MODEL_ID_LEVER]!.$vertexBegin! * 2,
    levers.length,
  );
};
