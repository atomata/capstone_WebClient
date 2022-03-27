import styled from "styled-components";
import React, { useContext } from "react";
import useKeypress from "react-use-keypress";
import { IconButton } from "@mui/material";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import TextPreview from "./Editor/TextPreview";
import { useSelected } from "../util/customHooks/previewOverlayfunc";
import {
  defaultCameraView,
  pauseApparatus,
  setDefault,
} from "../util/unityContextActions";
import { SideBarContext } from "../util/customHooks/SideBarContext";
import { ActionContext } from "../util/customHooks/actionContext";
import {
  GlobalContext,
  globalContextTypes,
} from "../util/customHooks/globalContext";

const PreviewGrid = styled.div`
  display: grid;
  width: inherit;
  height: inherit;
  grid-template-columns: repeat(60, 1fr);
  grid-template-rows: repeat(50, 1fr);
`;

const Header = styled.div`
  position: relative;
  grid-column: 1 / span 58;
  grid-row: 1 / 2;
  z-index: 2;
  pointer-events: auto;
`;
const PreviewGridCenter = styled.div`
  position: relative;
  grid-column: 2 / span 58;
  grid-row: 2 / span 47;
  z-index: 2;
  pointer-events: auto;
`;

function PreviewOverlay(): JSX.Element {
  const { experienceData }: globalContextTypes = useContext(GlobalContext);
  const { showGuide, toggleOverlay } = useContext(SideBarContext);
  const { actionList } = useContext(ActionContext);

  const { desc, selected, cyclePreviewLeft, cyclePreviewRight } = useSelected({
    actionList,
    apparatusRoot: experienceData.apparatusRoot,
  });

  useKeypress("ArrowLeft", () => {
    if (!showGuide) cyclePreviewLeft();
  });

  useKeypress("ArrowDown", () => {
    if (!showGuide) cyclePreviewLeft();
  });

  useKeypress("ArrowRight", () => {
    if (!showGuide) cyclePreviewRight();
  });

  useKeypress("ArrowUp", () => {
    if (!showGuide) cyclePreviewRight();
  });

  return (
    <PreviewGrid>
      <Header>
        <IconButton
          className="ReturnButton"
          onClick={() => {
            setDefault(experienceData.apparatusRoot);
            toggleOverlay();
            defaultCameraView();
            pauseApparatus();
          }}
        >
          <ArrowBackSharpIcon
            sx={{
              fontSize: "45px",
              background: "#3f3d56",
              color: "white",
              borderRadius: "4em",
            }}
          />
        </IconButton>
      </Header>
      <PreviewGridCenter>
        {selected >= 0 ? <TextPreview desc={desc} /> : null}
      </PreviewGridCenter>
    </PreviewGrid>
  );
}

export default PreviewOverlay;
