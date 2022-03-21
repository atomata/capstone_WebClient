import styled from "styled-components";
import useKeypress from "react-use-keypress";
import React, { useContext, useEffect } from "react";
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
import { defaultCameraView } from "../../util/unityContextActions";
import SavingTip from "./savingTip";

// the side bar box
const UIComponentRoot = styled.div`
  display: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 0;
`;

const EditorGrid = styled.div`
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
  grid-row: 1 / span 50;
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
  z-index: 2;
  background-color: #f75d77;
`;

// css and placement for the text area
const TextEditorGrid = styled.div`
  position: relative;
  grid-column: 13 / span 47;
  grid-row: 2 / span 47;
  z-index: 4;
`;

const SavingTipGrid = styled.div`
  grid-column: 59 / span 2;
  grid-row: 39 / span 1;
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
    toggleSavingTip,
    savingTip,
    textBox,
    toolDoc,
    apparatusInfo,
    skyBoxInfo,
  } = useActionBar();

  const { showOverlay, toggleOverlay } = useOverlay();

  useKeypress("Escape", () => {
    if (!showOverlay) {
      toggleOverlay();
      defaultCameraView();
    }
  });

  const { experienceData, userId }: globalContextTypes =
    useContext(GlobalContext);
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
  useEffect(() => {
    experienceData.experience.actionList = [...actionList];
    saveExp(userId, experienceData.experience);
    toggleSavingTip();
    setTimeout(toggleSavingTip, 1000); // run this after 1 seconds
  }, [actionList, experienceData, userId]);

  const renderTool = () => {
    if (toolDoc)
      return (
        <ToolDocGrid>
          <ToolDocItem />
        </ToolDocGrid>
      );
    return <div />;
  };

  const renderText = () => {
    if (textBox)
      return (
        <TextEditorGrid>
          <TextEditor />
        </TextEditorGrid>
      );
    return <div />;
  };

  return (
    <UIComponentRoot>
      {showOverlay ? (
        <EditorGrid>
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
                toggleSavingTip,
                textBox,
                toolDoc,
                apparatusInfo,
                skyBoxInfo,
                showOverlay,
                savingTip,
              }}
            >
              <SideBarGrid>
                <SideBarItem />
              </SideBarGrid>
              <SavingTipGrid>
                <SavingTip />
              </SavingTipGrid>
              {renderTool()}
              {renderText()}
            </SideBarContext.Provider>
            <ActionSequenceBarGrid>
              <ActionSequence />
            </ActionSequenceBarGrid>
          </ActionContext.Provider>
        </EditorGrid>
      ) : (
        <PreviewOverlay actionList={actionList} toggle={toggleOverlay} />
      )}
    </UIComponentRoot>
  );
}

export default Overlay;
