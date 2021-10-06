import styled from "styled-components";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/myunityapp.loader.js",
  dataUrl: "build/myunityapp.data",
  frameworkUrl: "build/myunityapp.framework.js",
  codeUrl: "build/myunityapp.wasm",
});

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
          height: "inheirit",
          width: "inheirit",
          background: "#9a2323",
        }}
      />
    </Box>
  );
};
export default WebglBox;