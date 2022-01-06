import styled from "styled-components";
import Unity from "react-unity-webgl";
import { useEffect } from "react";
import Overlay from "../Overlay/Overlay";
import { unityContext, load } from "../../util/unityContextActions";

const WebglRoot = styled.div`
  display: relative;
  width: 100%;
  height: 100%;
`;

function WebglBox({ userId, experienceData }): JSX.Element {
  useEffect(() => {
    unityContext.on("loaded", () => {
      // For some reason the unityContext.send("Container", "LoadApparatus", arg) in load() cannot be called at this point
      // Having a timeout bypasses this
      setTimeout(() => {
        load(experienceData.apparatusId);
      }, 5);
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
      <Overlay userId={userId} experienceData={experienceData} />
    </WebglRoot>
  );
}

export default WebglBox;
