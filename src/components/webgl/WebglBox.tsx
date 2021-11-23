import styled from "styled-components";
import Unity from "react-unity-webgl";
import { useEffect } from "react";
import Overlay from "../Overlay/Overlay";
import { unityContext, load } from "../../util/unityContextActions";

const WebglRoot = styled.div`
  display: relative;
  width: 1600px;
  height: 700px;
  margin-bottom: 2rem;
  margin-top: 4rem;
`;

function WebglBox({ json }: { json: any }): JSX.Element {
    useEffect(() => {
        unityContext.on("loaded", () => {
            // For some reason the unityContext.send("Container", "LoadApparatus", arg) in load() cannot be called at this point
            // Having a timeout bypasses this
            setTimeout(() => { 
                load(json.Id.Identifier);
            }, 100)
        });
    }, []);

    return (
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
}

export default WebglBox;
