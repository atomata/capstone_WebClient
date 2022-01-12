import styled from "styled-components";
import Unity from "react-unity-webgl";
import { useEffect } from "react";
import Overlay from "../Overlay/Overlay";
import { unityContext, load } from "../../util/unityContextActions";
import {ExperienceData} from "../../util/types";

const WebglRoot = styled.div`
  display: relative;
  width: 100%;
  height: 100%;
`;

type WebglProps = {
  userId: string;
  experienceData: ExperienceData;
};

function WebglBox({ userId, experienceData }:WebglProps): JSX.Element {
  useEffect(() => {
    unityContext.on("loaded", () => {
      // For some reason the unityContext.send("Container", "LoadApparatus", arg) in load() cannot be called at this point
      // Having a timeout bypasses this
      setTimeout(() => {
        load(experienceData.apparatusId);
      }, 100);
    });
  }, [experienceData.apparatusId]);

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
