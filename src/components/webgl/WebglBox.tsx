import styled from "styled-components";
import Unity from "react-unity-webgl";
import Overlay from "../Overlay/Overlay";
import { unityContext } from "../../util/unityContextActions";

const WebglRoot = styled.div`
  display: relative;
  width: 1600px;
  height: 700px;
  margin-bottom: 2rem;
  margin-top: 4rem;
`;

const WebglBox = ({ json }: { json: Object }): JSX.Element => (
        <WebglRoot>
            <Unity
                unityContext={unityContext}
                style={{
                    height: "inherit",
                    width: "inherit",
                    position: "absolute",
                    zIndex: 0,
                }}
            />
            <Overlay json={json}/>
        </WebglRoot>
    );

export default WebglBox;
