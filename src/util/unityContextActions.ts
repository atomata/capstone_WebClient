import { UnityContext } from "react-unity-webgl";
import {
  defaultCameraCommand,
  loadTrigger,
  pauseApparatusCommand,
  playApparatusCommand,
  skyboxTrigger,
  unityScene,
  voidTrigger,
} from "./constants";
import { TreeNode } from "./types";

const unityContext = new UnityContext({
  loaderUrl: "build/AtomataScene0_0_9.loader.js",
  dataUrl: "build/AtomataScene0_0_9.data",
  frameworkUrl: "build/AtomataScene0_0_9.framework.js",
  codeUrl: "build/AtomataScene0_0_9.wasm",
});

function loadApparatus(apparatus: string): void {
  unityContext.send(unityScene, loadTrigger, apparatus);
}

function requestTrigger(path: string, input: string): void {
  playApparatus();
  const arg = `${path}/${input}`;
  unityContext.send(unityScene, voidTrigger, arg);
}

function changeSkybox(skybox: string): void {
  unityContext.send(unityScene, skyboxTrigger, skybox);
}

function defaultCameraView(): void {
  unityContext.send(unityScene, defaultCameraCommand);
}
function setDefault(apparatusRoot: TreeNode): void {
  if (
    apparatusRoot !== undefined &&
    apparatusRoot.defaultState !== undefined &&
    apparatusRoot.defaultState[0] !== undefined
  ) {
    unityContext.send(unityScene, voidTrigger, apparatusRoot.defaultState[0]);
  }
}

function pauseApparatus(): void {
  unityContext.send(unityScene, pauseApparatusCommand);
}

function playApparatus(): void {
  unityContext.send(unityScene, playApparatusCommand);
}
export {
  setDefault,
  playApparatus,
  pauseApparatus,
  loadApparatus,
  requestTrigger,
  changeSkybox,
  defaultCameraView,
  unityContext,
};
