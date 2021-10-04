import init from "../../pages/api/webgl/init";
import styled from "styled-components";

const Box = styled.div`
background: #d9d9d9;
width: 800px;
height: 450px;
margin-bottom: 2rem;
margin-top: 4rem;
`;

const WebGLCanvas = styled.canvas`
background: #9bad9a;
width: inherit;
height: inherit;
`;

const WebglBox = (): JSX.Element => {
  const componentDidMount = () => {
    init(`webgl`);
  };
  return (
    <Box>
      <WebGLCanvas id="webgl" onMouseOver={componentDidMount}/>
    </Box>
  );
};
export default WebglBox;