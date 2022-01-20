import { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/Build.loader.js",
  dataUrl: "build/Build.data",
  frameworkUrl: "build/Build.framework.js",
  codeUrl: "build/Build.wasm",
});

// TODO what if args string is empty?
function loadApparatus(apparatus: string) {
  unityContext.send("Container", "LoadApparatus", apparatus);
}

// TODO what if args string is empty?
function requestTrigger(path: string, input: string) {
  const arg = `${path}@${input}`;
  unityContext.send("Container", "VoidTrigger", arg);
}


export {loadApparatus, requestTrigger, unityContext };
