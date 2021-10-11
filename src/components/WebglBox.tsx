import styled from "styled-components";
import Unity, { UnityContext } from "react-unity-webgl";

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
 // background: #d9d9d9;
  width: 800px;
  height: 450px;
  margin-bottom: 2rem;
  margin-top: 4rem;
`;

const WebglFlex = styled.div`
  display: absolute;
  width: inherit;
  height: inherit;
  z-index: 2;
`;

const JustinsSuperTestButton = styled.button`
  background: #7fc985;
  width: 10em;
  height: 5em;
  margin-bottom: 2rem;
  margin-top: 4rem;
  position: absolute;
  z-index: inherit;
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
          height: "450px",
          width: "800px",
          background: "#9a2323",
          position: "absolute",
          zIndex: -1,
        }}
      />
      <WebglFlex>
        <JustinsSuperTestButton>Click me</JustinsSuperTestButton>
      </WebglFlex>
    </WebglRoot>
  );
};
export default WebglBox;
