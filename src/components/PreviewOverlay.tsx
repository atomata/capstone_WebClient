import styled from "styled-components";
import React from "react";
import useKeypress from "react-use-keypress";
import { IconButton } from "@mui/material";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import TextPreview from "./Editor/TextPreview";
import { useSelected } from "../util/customHooks/previewOverlayfunc";
import { ActionData } from "../util/types";
import { defaultCameraView } from "../util/unityContextActions";

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

type PreviewOverlayProps = {
  actionList: ActionData[];
  toggle: () => void;
};

function PreviewOverlay({
  actionList,
  toggle,
}: PreviewOverlayProps): JSX.Element {
  const { desc, selected, cyclePreviewLeft, cyclePreviewRight } =
    useSelected(actionList);

  useKeypress("ArrowLeft", () => {
    cyclePreviewLeft();
  });

  useKeypress("ArrowDown", () => {
    cyclePreviewLeft();
  });

  useKeypress("ArrowRight", () => {
    cyclePreviewRight();
  });

  useKeypress("ArrowUp", () => {
    cyclePreviewRight();
  });

  return (
    <PreviewGrid>
      <Header>
        <IconButton
          className="ReturnButton"
          onClick={() => {
            toggle();
            defaultCameraView();
          }}
        >
          <ArrowBackSharpIcon
            sx={{
              fontSize: "45px",
              background: "#3f3d56",
              color: "white",
              borderRadius: "4em"
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
