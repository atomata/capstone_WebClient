import styled from "styled-components";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/Apps.loader.js",
  dataUrl: "build/Apps.data",
  frameworkUrl: "build/Apps.framework.js",
  codeUrl: "build/Apps.wasm",
  streamingAssetsUrl: "streamingassets"
});

// const unityContext = new UnityContext({
//   loaderUrl: "build/Builds.loader.js",
//   dataUrl: "build/Builds.data",
//   frameworkUrl: "build/Builds.framework.js",
//   codeUrl: "build/Builds.wasm",
// });

const Box = styled.div`
  background: #d9d9d9;
  width: 800px;
  height: 450px;
  margin-bottom: 2rem;
  margin-top: 4rem;
`;

const WebglBox = (): JSX.Element => {
  function handleOnClickFullscreen() {
    unityContext.setFullscreen(true);
  }
  return (
    <Box>
      <Unity
        unityContext={unityContext}
        style={{
          height: "450px",
          width: "800px",
          background: "#9a2323",
        }}
      />
    </Box>
  );
};
export default WebglBox;