import styled from "styled-components";
import Unity from "react-unity-webgl";
import { useContext, useEffect, useState } from "react";
import Loading from "../Loading";
import {unityContext, loadApparatus, changeSkybox} from "../../util/unityContextActions";
import Overlay from "./Overlay";
import { GlobalContext, globalContextTypes } from "../../util/customHooks/globalContext";

const WebglRoot = styled.div`
  display: relative;
  width: 100%;
  height: 100%;
`;

function WebglBox(): JSX.Element {
  const { experienceData }: globalContextTypes = useContext(GlobalContext);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (window["onAtomataSceneInitalize"] === undefined) {
      window["onAtomataSceneInitalize"] = () => {
        setTimeout(() => {
          setLoading(false);
          loadApparatus(experienceData.experience.apparatusId);
          changeSkybox(experienceData.experience.skyboxId);
        }, 100);
      };
    }
    return function () {
      window["onAtomataSceneInitalize"] = undefined;
    };
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
        tabIndex={1}
      />
      <Overlay />
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
