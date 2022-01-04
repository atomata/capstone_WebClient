import styled from "styled-components";
import Unity from "react-unity-webgl";
import { useEffect, useState } from "react";
import { Box, CircularProgress} from "@material-ui/core";
import Overlay from "../Overlay/Overlay";
import { unityContext, load } from "../../util/unityContextActions";

const WebglRoot = styled.div`
  display: relative;
  width: 100%;
  height: 100%;
`;

const SpinnyBoi = (): JSX.Element => (
  <Box
    display='flex'
    justifyContent='center'
    style={{ paddingTop: '38vh' }}
  >
    <CircularProgress color='secondary' />
  </Box>
);

function WebglBox({ userId, experienceData }): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    unityContext.on("loaded", () => {
      // For some reason the unityContext.send("Container", "LoadApparatus", arg) in load() cannot be called at this point
      // Having a timeout bypasses this
      setTimeout(() => {
        setLoading(false);
        load(experienceData.apparatusId);
      }, 100);
    });
  }, []);

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
      <SpinnyBoi/>
    </WebglRoot>
    
  );
}

export default WebglBox;
