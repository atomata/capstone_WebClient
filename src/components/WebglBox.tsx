import styled from "styled-components";
import Unity, {UnityContext} from "react-unity-webgl";
import Overlay from "./Overlay";


const unityContext = new UnityContext({
    loaderUrl: "build/Build.loader.js",
    dataUrl: "build/Build.data",
    frameworkUrl: "build/Build.framework.js",
    codeUrl: "build/Build.wasm"
});

const WebglRoot = styled.div`
  display: relative;
  width: 1600px;
  height: 700px;
  margin-bottom: 2rem;
  margin-top: 4rem;
`;

export function loadEarth() {
    unityContext.send("Container", "LoadApparatus", "earth");
}

export function loadSphere() {
    unityContext.send("Container", "LoadApparatus", "wobble-sphere");
}

export function voidTrigger(arg){
    unityContext.send("Container", "VoidTrigger", arg);
}

const WebglBox = (): JSX.Element => {


    function handleOnClickFullscreen() {
        unityContext.setFullscreen(true);
    }

    return (
        <WebglRoot>
            <Unity
                unityContext={unityContext}
                style={{
                    height: "inherit",
                    width: "inherit",
                    background: "#9a2323",
                    position: "absolute",
                    zIndex: 0,
                }}
            />
            <Overlay/>
        </WebglRoot>
    );
};
export default WebglBox;
