import { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  // loaderUrl: "build/Builds.loader.js",
  // dataUrl: "build/Builds.data",
  // frameworkUrl: "build/Builds.framework.js",
  // codeUrl: "build/Builds.wasm",

  loaderUrl: "build/0_0_2.loader.js",
  dataUrl: "build/0_0_2.data",
  frameworkUrl: "build/0_0_2.framework.js",
  codeUrl: "build/0_0_2.wasm",
});

// TODO what if args string is empty?
function load(arg: string) {
  console.log("Hello", arg);
  unityContext.send("AtomataScene", "LoadApparatus", arg);
}

// TODO what if args string is empty?
function voidTrigger(arg: string) {
  unityContext.send("AtomataScene", "Trigger", arg);
}

// TODO what if args string is empty?
function callToWebGL(path: string, input: string) {
  const arg = `${path}@${input}`;
  voidTrigger(arg);
}

export { callToWebGL, load, voidTrigger, unityContext };
