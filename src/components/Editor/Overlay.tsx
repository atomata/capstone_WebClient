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
import Guide from "./Guide";

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
  width: auto;
  grid-row: 1 / span 50;
  grid-column: 1 / span 1;
  background-color: #3f3d56;
  z-index: 4;
  color: white;
  box-shadow: 2px 0px 15px #000000;
`;

// css and placement for the side bar (the side bar is the area where we can toggle on or off)
const ToolDocGrid = styled.div`
  grid-row: 1 / span 39;
  grid-column: 2 / span 4;
  width: auto;
  min-width: 15em;
  background-color: #3f3d56;
  z-index: 2;
  padding-left: 1em;
  padding-top: 1em;
`;

// css and placement for the action sequence
const ActionSequenceBarGrid = styled.div`
  grid-column: 2 / span 60;
  grid-row: 40 / span 11;
  z-index: 2;
  background-color: #f75d77;
`;

// css and placement for the text area
const TextEditorGrid = styled.div`
  position: relative;
  grid-column: 9 / span 47;
  grid-row: 2 / span 38;
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
    toggleGuide,
    toggleSavingTip,
    setGuideNum,
    savingTip,
    textBox,
    toolDoc,
    apparatusInfo,
    skyBoxInfo,
    showGuide,
    guideNum,
  } = useActionBar();

  const { showOverlay, toggleOverlay } = useOverlay();

  useKeypress("Escape", () => {
    if (!showOverlay) {
      toggleOverlay();
      defaultCameraView();
    }

    if (showGuide) toggleGuide();
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
                toggleGuide,
                toggleSavingTip,
                setGuideNum,
                textBox,
                toolDoc,
                apparatusInfo,
                skyBoxInfo,
                showOverlay,
                showGuide,
                savingTip,
                guideNum,
              }}
            >
              <SideBarGrid>
                <SideBarItem />
              </SideBarGrid>
              <SavingTipGrid>
                <SavingTip />
              </SavingTipGrid>
              <Guide/>
              {renderTool()}
              {renderText()}
            </SideBarContext.Provider>
            <ActionSequenceBarGrid>
              <ActionSequence />
            </ActionSequenceBarGrid>
          </ActionContext.Provider>
        </EditorGrid>
      ) : (
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
              toggleGuide,
              toggleSavingTip,
              setGuideNum,
              textBox,
              toolDoc,
              apparatusInfo,
              skyBoxInfo,
              showOverlay,
              showGuide,
              savingTip,
              guideNum,
            }}
          >
            <PreviewOverlay />
            <Guide/>
          </SideBarContext.Provider>
        </ActionContext.Provider>
      )}
    </UIComponentRoot>
  );
}

export default Overlay;
