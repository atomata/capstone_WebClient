import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Button, IconButton } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const PreviewGridLeft = styled.div`
  grid-column: 4 / span 1;
  grid-row: 9 / span 1;
  z-index: 2;
  pointer-events: auto;
  padding: 0;
  min-height: 1em;
  max-height: 1em;
  min-width: 1em;
  max-width: 1em;
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

const PreviewGridRight = styled.div`
  grid-column: 8 / span 1;
  grid-row: 9 / span 1;
  z-index: 2;
  pointer-events: auto;
  min-height: 1em;
  max-height: 1em;
  min-width: 1em;
  max-width: 1em;
`;

const ActionTabList = styled.div`
  display: flex;
  overflow-x: hidden;
  align-items: center;
`;
const ActionTabListItem = styled.div`
  min-height: 1em;
  outline-style: solid;
  outline-width: 0.1em;
  outline-color: black;
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
  const { selected, setSelected, cyclePreviewLeft, cyclePreviewRight } =
    useSelected(actionList);
  return (
    <PreviewRoot>
      {actionList[0] !== undefined ? (
        <PreviewGrid>
          <PreviewGridLeft>
            <IconButton
              disableRipple
              className={classes.removeHoverEffect}
              onClick={() => {
                sideScroll(contentWrapper.current, 25, 50, -5);
                cyclePreviewLeft();
              }}
            >
              <ArrowLeftIcon
                sx={{
                  fontSize: 150,
                }}
              />
            </IconButton>
          </PreviewGridLeft>
          <PreviewGridCenter>
            <ActionTabList ref={contentWrapper}>
              {actionList.map((actionData, index) => (
                <ActionTabListItem key={index}>
                  {selected === index ? (
                    <ActionTabSelectedListItem>
                      {(() =>
                        requestTrigger(actionData.path, actionData.input))()}
                      <Button
                        onClick={() => {
                          setSelected(index);
                        }}
                      >
                        {index}
                      </Button>
                    </ActionTabSelectedListItem>
                  ) : (
                    <Button
                      onClick={() => {
                        setSelected(index);
                      }}
                    >
                      {index}
                    </Button>
                  )}
                </ActionTabListItem>
              ))}
            </ActionTabList>
          </PreviewGridCenter>
          <PreviewGridRight>
            <IconButton
              disableRipple
              className={classes.removeHoverEffect}
              onClick={() => {
                sideScroll(contentWrapper.current, 25, 50, 5);
                cyclePreviewRight();
              }}
            >
              <ArrowRightIcon
                sx={{
                  fontSize: 150,
                }}
              />
            </IconButton>
          </PreviewGridRight>
        </PreviewGrid>
      ) : (
        <div />
      )}
    </PreviewRoot>
  );
}

export default PreviewOverlay;
