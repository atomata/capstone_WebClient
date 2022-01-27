import styled from "styled-components";
import Unity from "react-unity-webgl";
import { useEffect, useState } from "react";
import Overlay from "./Overlay";
import Loading from "./Loading";
import { unityContext, loadApparatus } from "../util/unityContextActions";
import { ExperienceData } from "../util/types";

const WebglRoot = styled.div`
  display: relative;
  width: 100%;
  height: 100%;
`;

type WebglProps = {
  userId: string;
  experienceData: ExperienceData;
};

function WebglBox({ userId, experienceData }: WebglProps): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window["onAtomataSceneInitialize"] === undefined) {
      window["onAtomataSceneInitialize"] = () => {
        setTimeout(() => {
          setLoading(false);
          loadApparatus(experienceData.experience.apparatusId);
        }, 3000);
      };
    }
    return function () {
      window["onAtomataSceneInitialize"] = undefined;
    };
    // unityContext.on("loaded", () => {
    //   // For some reason the unityContext.send("Container", "LoadApparatus", arg) in load() cannot be called at this point
    //   // Having a timeout bypasses this
    //
    //   setTimeout(() => {
    //     setLoading(false);
    //     loadApparatus(experienceData.experience.apparatusId);
    //   }, 3000);
    // });
    // return function () {
    //   unityContext.removeEventListener("loaded");
    // };
  }, [experienceData.experience.apparatusId]);

  return !loading ? (
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
  ) : (
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
      <Loading />
    </WebglRoot>
  );
}

export default WebglBox;
