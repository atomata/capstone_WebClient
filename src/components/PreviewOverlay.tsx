import styled from "styled-components";
import React, { useContext } from "react";
import useKeypress from "react-use-keypress";
import TextPreview from "./Editor/TextPreview";
import { useSelected } from "../util/customHooks/previewOverlayfunc";
import { ActionData } from "../util/types";
import { SideBarContext } from "../util/customHooks/SideBarContext";

const PreviewRoot = styled.div`
  display: absolute;
  width: inherit;
  height: 750px;
  z-index: 0;
  opacity: 1;
  pointer-events: auto;
`;

const PreviewGrid = styled.div`
  display: grid;
  width: inherit;
  height: inherit;
  grid-template-columns: repeat(60, 1fr);
  grid-template-rows: repeat(60, 1fr);
`;

const PreviewGridCenter = styled.div`
  grid-column: 21 / span 20;
  grid-row: 50 / span 15;
  z-index: 2;
  pointer-events: auto;
  min-height: 1em;
  min-width: inherit;
  padding-left: 5%;
  padding-right: 5%;
`;

type PreviewOverlayProps = {
  actionList: ActionData[];
};

// TODO change styling instead of defining a new component
function PreviewOverlay({ actionList }: PreviewOverlayProps): JSX.Element {
  const { showGuide } = useContext(SideBarContext);
  const { desc, selected, cyclePreviewLeft, cyclePreviewRight } =
    useSelected(actionList);
    
  useKeypress("ArrowLeft", () => {
    if(!showGuide)
      cyclePreviewLeft();
  });

  useKeypress("ArrowDown", () => {
    if(!showGuide)
      cyclePreviewLeft();
  });

  useKeypress("ArrowRight", () => {
    if(!showGuide)
      cyclePreviewRight();
  });

  useKeypress("ArrowUp", () => {
    if(!showGuide)
      cyclePreviewRight();
  });

  return (
    <PreviewRoot>
      {actionList[0] !== undefined ? (
        <PreviewGrid>
          <PreviewGridCenter>
            {selected >= 0 ? <TextPreview desc={desc} /> : null}
          </PreviewGridCenter>
        </PreviewGrid>
      ) : (
        <div />
      )}
    </PreviewRoot>
  );
}

export default PreviewOverlay;
