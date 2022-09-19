import { allModels } from "./scene";
import { identity, writeMatrixToArray } from "../math";
import { mainMenuVisible } from "../page";
import { absoluteTime, levers, souls } from "./world-state";
import { leverModel, playerModels, soulCollisionModel, soulModel } from "./level";
import { gl } from "../gl";

const worldMatricesBuffer = new Float32Array(41 * 16);

export const renderModels = (
  worldMatrixLoc: WebGLUniformLocation,
  renderPlayer: 0 | 1 | boolean,
  isCollider: 0 | 1,
) => {
  if (mainMenuVisible) {
    const matrix = identity.rotate(0, Math.sin(absoluteTime) * 40 - 70);
    for (const { $modelId } of playerModels) {
      writeMatrixToArray(worldMatricesBuffer, $modelId - 1, matrix);
    }
    gl.uniformMatrix4fv(worldMatrixLoc, false, worldMatricesBuffer);
    gl.drawElements(
      gl.TRIANGLES,
      playerModels[2].$vertexEnd! - playerModels[0].$vertexBegin!,
      gl.UNSIGNED_SHORT,
      playerModels[0].$vertexBegin! * 2,
    );
  } else {
    for (const { $kind, $modelId, $matrix } of allModels) {
      if ($kind) {
        writeMatrixToArray(worldMatricesBuffer, $modelId - 1, $matrix);
      }
    }

    gl.uniformMatrix4fv(worldMatrixLoc, false, worldMatricesBuffer);
    gl.drawElements(
      gl.TRIANGLES,
      (renderPlayer ? playerModels[2]!.$vertexEnd! : playerModels[0].$vertexBegin!) - 3,
      gl.UNSIGNED_SHORT,
      3 * 2,
    );

    for (let i = 0; i < levers.length; ++i) {
      writeMatrixToArray(worldMatricesBuffer, i, levers[i]!.$matrix!);
      worldMatricesBuffer[i * 16 + 15] = 1 - levers[i]!.$lerpValue;
    }

    gl.uniformMatrix4fv(worldMatrixLoc, false, worldMatricesBuffer);
    gl.drawElementsInstanced(
      gl.TRIANGLES,
      leverModel.$vertexEnd! - leverModel.$vertexBegin!,
      gl.UNSIGNED_SHORT,
      leverModel.$vertexBegin! * 2,
      levers.length,
    );

    for (let i = 0; i < 13; ++i) {
      writeMatrixToArray(worldMatricesBuffer, i, souls[i]!.$matrix!);
    }

    const soulModelToRender = isCollider ? soulCollisionModel : soulModel;

    gl.uniformMatrix4fv(worldMatrixLoc, false, worldMatricesBuffer);
    gl.drawElementsInstanced(
      gl.TRIANGLES,
      soulModelToRender.$vertexEnd! - soulModelToRender.$vertexBegin!,
      gl.UNSIGNED_SHORT,
      soulModelToRender.$vertexBegin! * 2,
      13,
    );
  }
};
