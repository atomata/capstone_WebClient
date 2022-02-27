import styled from "styled-components";
import Unity from "react-unity-webgl";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { unityContext, loadApparatus } from "../util/unityContextActions";
import Overlay2 from "./UIComponent/Overlay2";
import { GlobalContext, globalContextTypes } from "../../pages/experience";

const WebglRoot = styled.div`
  display: relative;
  width: 100%;
  height: 100%;
`;

type WebglProps = {
  userId: string;
};

function WebglBox({ userId }: WebglProps): JSX.Element {


  const {experienceData} :globalContextTypes= useContext(GlobalContext)

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (window["onAtomataSceneInitalize"] === undefined) {
      window["onAtomataSceneInitalize"] = () => {
        setTimeout(() => {
          setLoading(false);
          loadApparatus(experienceData.experience.apparatusId);
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
      <Overlay2 />
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
