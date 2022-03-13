import styled from "styled-components";
import { Button, IconButton} from "@mui/material";
import React, { useState } from "react";
import {makeStyles} from "@mui/styles";
import useKeypress from 'react-use-keypress';
import TextPreview from "./Editor/TextPreview";
import { requestTrigger } from "../util/unityContextActions";
import { useSelected } from "../util/customHooks/previewOverlayfunc";
import { ActionData } from "../util/types";

const useStyles = makeStyles((theme) => ({
  removeHoverEffect: {
    "&:hover": {
      backgroundColor: "transparent",
      cursor: "default",
    },
  },
}));

const sideScroll = (
  element: HTMLDivElement,
  speed: number,
  distance: number,
  step: number
) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};
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
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(11, 1fr);
`;

const PreviewGridCenter = styled.div`
  grid-column: 5 / span 3;
  grid-row: 10 / span 1;
  z-index: 2;
  pointer-events: auto;
  min-height: 1em;
  min-width: inherit;
  padding-left: 5%;
  padding-right: 5%;
`;

const ActionTabList = styled.div`
  display: flex;
  overflow-x: hidden;
  align-items: center;
`;
const ActionTabListItem = styled.div`
  min-height: 1em;
  margin: 0.5em;
  align-self: center;
`;

const ActionTabSelectedListItem = styled.div`
  background-color: white;
`;

type PreviewOverlayProps = {
  actionList: ActionData[];
};

// TODO change styling instead of defining a new component
function PreviewOverlay({ actionList }: PreviewOverlayProps): JSX.Element {
  const classes = useStyles();
  const contentWrapper = React.useRef(null);
  const { desc, selected, cyclePreviewLeft, cyclePreviewRight } =
    useSelected(actionList);

  useKeypress('ArrowLeft', () => {
    cyclePreviewLeft();
  });

  useKeypress('ArrowDown', () => {
    cyclePreviewLeft();
  });

  useKeypress('ArrowRight', () => {
    cyclePreviewRight();
  });

  useKeypress('ArrowUp', () => {
    cyclePreviewRight();
  });

  return (
    <PreviewRoot>
      {actionList[0] !== undefined ? (
        <PreviewGrid>
          <PreviewGridCenter>
            <ActionTabList ref={contentWrapper}>
              {actionList.map((actionData, index) => (
                <ActionTabListItem key={index}>
                  {selected === index ? (
                    <ActionTabSelectedListItem>
                      {(() =>
                        requestTrigger(actionData.path, actionData.input.command))()}
                    </ActionTabSelectedListItem>
                  ) : (
                    <div/>
                  )}
                </ActionTabListItem>
              ))}
            </ActionTabList>
            <TextPreview desc={desc}/>
          </PreviewGridCenter>
        </PreviewGrid>
      ) : (
        <div />
      )}
    </PreviewRoot>
  );
}

export default PreviewOverlay;
