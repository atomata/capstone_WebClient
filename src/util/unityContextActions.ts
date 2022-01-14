import { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/Build.loader.js",
  dataUrl: "build/Build.data",
  frameworkUrl: "build/Build.framework.js",
  codeUrl: "build/Build.wasm",
});

// TODO what if args string is empty?
function load(arg: string) {
  unityContext.send("Container", "LoadApparatus", arg);
}

// TODO what if args string is empty?
function voidTrigger(arg: string) {
  unityContext.send("Container", "VoidTrigger", arg);
}

// TODO what if args string is empty?
function callToWebGL(path: string, input: string) {
  const arg = `${path}@${input}`;
  voidTrigger(arg);
}

export { callToWebGL, load, voidTrigger, unityContext };
