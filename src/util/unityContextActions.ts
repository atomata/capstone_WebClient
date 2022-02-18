import { UnityContext } from "react-unity-webgl";
import {
  defaultCamera,
  loadTrigger,
  skyboxTrigger,
  unityScene,
  voidTrigger,
} from "./constants";

const unityContext = new UnityContext({
  loaderUrl: "build/AtomataScene0_0_5.loader.js",
  dataUrl: "build/AtomataScene0_0_5.data",
  frameworkUrl: "build/AtomataScene0_0_5.framework.js",
  codeUrl: "build/AtomataScene0_0_5.wasm",
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
