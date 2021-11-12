import { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/Build.loader.js",
    dataUrl: "build/Build.data",
    frameworkUrl: "build/Build.framework.js",
    codeUrl: "build/Build.wasm"
});


function load(arg: string) {
  unityContext.send("Container", "LoadApparatus", arg);
}
function voidTrigger(arg: string) {
  unityContext.send("Container", "VoidTrigger", arg);
}

function callToWebGL(path :string , input:string) {
    console.log(path);
  const arg = `${path}@${input}`;
  voidTrigger(arg);
}

export { callToWebGL, load, voidTrigger ,unityContext};
