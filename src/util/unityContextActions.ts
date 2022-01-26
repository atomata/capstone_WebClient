import { UnityContext } from "react-unity-webgl";
import {
  defaultCamera,
  loadTrigger,
  skyboxTrigger,
  unityScene,
  voidTrigger,
} from "./constants";

const unityContext = new UnityContext({
  loaderUrl: "build/0_0_2.loader.js",
  dataUrl: "build/0_0_2.data",
  frameworkUrl: "build/0_0_2.framework.js",
  codeUrl: "build/0_0_2.wasm",
});

// TODO what if args string is empty?
function loadApparatus(apparatus: string): void {
  unityContext.send(unityScene, loadTrigger, apparatus);
}

// TODO what if args string is empty?
function requestTrigger(path: string, input: string): void {
  const arg = `${path}/${input}`;
  unityContext.send(unityScene, voidTrigger, arg);
}

function changeSkybox(skybox: string): void {
  unityContext.send(unityScene, skyboxTrigger, skybox);
}

function defaultCameraView(): void {
  unityContext.send(unityScene, defaultCamera);
}
export {
  loadApparatus,
  requestTrigger,
  changeSkybox,
  defaultCameraView,
  unityContext,
};
