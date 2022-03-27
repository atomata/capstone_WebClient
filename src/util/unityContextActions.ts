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

const unityContext = new UnityContext({
  loaderUrl: "build/AtomataScene0_0_9.loader.js",
  dataUrl: "build/AtomataScene0_0_9.data",
  frameworkUrl: "build/AtomataScene0_0_9.framework.js",
  codeUrl: "build/AtomataScene0_0_9.wasm",
});

// TODO what if args string is empty?
function loadApparatus(apparatus: string): void {
  unityContext.send(unityScene, loadTrigger, apparatus);
}

// TODO what if args string is empty?
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

function pauseApparatus(): void {
  unityContext.send(unityScene, pauseApparatusCommand);
}

function playApparatus(): void {
  unityContext.send(unityScene, playApparatusCommand);
}
export {
  playApparatus,
  pauseApparatus,
  loadApparatus,
  requestTrigger,
  changeSkybox,
  defaultCameraView,
  unityContext,
};
