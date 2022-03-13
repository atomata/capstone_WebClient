import styled from "styled-components";
import useKeypress from 'react-use-keypress';
import { useContext, useEffect } from "react";
import { IconButton } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useActionBar } from "../../util/customHooks/ActionBarFunc";
import ActionSequence from "./ActionSequence/ActionSequence";
import { SideBarContext } from "../../util/customHooks/SideBarContext";
import { ActionContext } from "../../util/customHooks/actionContext";
import ToolDocItem from "./SideBar/ToolDocItem";
import TextEditor from "./TextEditor";
import { useOverlay, useActionList } from "../../util/customHooks/overlayfunc";
import PreviewOverlay from "../PreviewOverlay";
import {
  GlobalContext,
  globalContextTypes,
} from "../../util/customHooks/globalContext";
import { saveExp } from "../../util/cloudOperations/writeToCloud";
import SideBarItem from "./SideBar/SideBarItem";

const OverlayShown = styled.div`
  display: absolute;
  width: inherit;
  height: 750px;
  opacity: 1;
  pointer-events: auto;
`;

// the side bar box
const UIComponentRoot = styled.div`
  display: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 0;
`;

const UIComponentGrid = styled.div`
  display: grid;
  width: inherit;
  height: inherit;
  z-index: 2;
  grid-template-columns: repeat(60, 1fr);
  grid-template-rows: repeat(50, 1fr);
`;

// css and placement for the action bar (the action bar is the bar on the side which have the button)
const SideBarGrid = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / span50;
  background-color: #3f3d56;
  z-index: 4;
  color: white;
  box-shadow: 2px 0px 15px #000000;
`;

// css and placement for the side bar (the side bar is the area where we can toggle on or off)
const ToolDocGrid = styled.div`
  grid-column: 3 / span 9;
  grid-row: 1 / span 39;
  background-color: #3f3d56;
  z-index: 2;
  padding-left: 1em;
  padding-top: 1em;
`;

// css and placement for the action sequence
const ActionSequenceBarGrid = styled.div`
  grid-column: 3 / span 58;
  grid-row: 40 / span 11;
  background-color: #a8ad68;
  z-index: 2;
`;

// css and placement for the text area
const TextEditorGrid = styled.div`
  grid-column: 25 / span 15;
  grid-row: 30 / span 10;
  z-index: 2;
`;

/**
 * The side bar define the area and the outline of what will be included.
 * @returns
 */
function Overlay(): JSX.Element {
  const {
    toggleTextBox,
    toggleToolDoc,
    toggleApparatusInfo,
    toggleSkyBoxInfo,
    textBox,
    toolDoc,
    apparatusInfo,
    skyBoxInfo,
  } = useActionBar();

  const { showOverlay, toggleOverlay } = useOverlay();

  useKeypress('Escape', () => {
    if(!showOverlay)
      toggleOverlay();
  });

  const { experienceData, userId }: globalContextTypes = useContext(GlobalContext);
  const {
    selectAction,
    selectedAction,
    actionList,
    removeActionFromList,
    setDescription,
    handleOnDragEnd,
    addActionToList,
  } = useActionList(experienceData);

  // useEffect for autoSave
  useEffect(()=>{
    experienceData.experience.actionList = [...actionList];
    saveExp(userId, experienceData.experience);
  }, [actionList, experienceData, userId])

  const renderTool = () => {
    if (toolDoc) return (<ToolDocGrid>
      <ToolDocItem />
    </ToolDocGrid>);
    return (<div/>);
  };

  const renderText = () => {
    if (textBox) return (<TextEditorGrid>
      {" "}
      <TextEditor />
    </TextEditorGrid>);
    return (<div/>);
  };
  
  return (  
    <UIComponentRoot>
      {showOverlay ? (
      <UIComponentGrid>
        <ActionContext.Provider
          value={{
            selectAction,
            selectedAction,
            actionList,
            removeActionFromList,
            setDescription,
            handleOnDragEnd,
            addActionToList,
          }}
        >
          <SideBarContext.Provider
            value={{
              toggleTextBox,
              toggleToolDoc,
              toggleApparatusInfo,
              toggleSkyBoxInfo,
              toggleOverlay,
              textBox,
              toolDoc,
              apparatusInfo,
              skyBoxInfo,
              showOverlay
            }}
          >
            <SideBarGrid>
              <SideBarItem />
            </SideBarGrid>
            {renderTool()}
          </SideBarContext.Provider>
          <ActionSequenceBarGrid>
            <ActionSequence />
          </ActionSequenceBarGrid>
          {renderText()}
        </ActionContext.Provider>
      </UIComponentGrid>
      ) : (  
        <OverlayShown>
          <IconButton
            className="ReturnButton"
            onClick={toggleOverlay}
          >
            <KeyboardBackspaceIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </IconButton>
          <PreviewOverlay actionList={actionList} />
        </OverlayShown>
      )}
    </UIComponentRoot> 
  );
}

export default Overlay;
