import styled from "styled-components";
import Unity, { UnityContext } from "react-unity-webgl";
import Overlay from "./Overlay";

const unityContext = new UnityContext({
  loaderUrl: "build/Apps.loader.js",
  dataUrl: "build/Apps.data",
  frameworkUrl: "build/Apps.framework.js",
  codeUrl: "build/Apps.wasm",
  streamingAssetsUrl: "streamingassets",
});

// const unityContext = new UnityContext({
//   loaderUrl: "build/Builds.loader.js",
//   dataUrl: "build/Builds.data",
//   frameworkUrl: "build/Builds.framework.js",
//   codeUrl: "build/Builds.wasm",
// });

const WebglRoot = styled.div`
  display: relative;
  width: 1600px;
  height: 700px;
  margin-bottom: 2rem;
  margin-top: 4rem;
`;

const WebglFlex = styled.div`
  display: absolute;
  width: inherit;
  height: inherit;
  z-index: 0;
`;

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
      <Overlay />
    </WebglRoot>
  );
};
export default WebglBox;
