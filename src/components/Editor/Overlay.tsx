import styled from "styled-components";
import { useActionBar } from "../../util/customHooks/ActionBarFunc";
import SideBarItem from "./SideBar/SideBarItem";
import ActionSequence from "./ActionSequence/ActionSequence";
import { SideBarContext } from "../../util/customHooks/SideBarContext";
import ToolDocItem from "./SideBar/ToolDocItem";
import TextEditor from "./TextEditor";
import { useState } from "react";

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
  grid-template-columns: repeat(50, 1fr);
  grid-template-rows: repeat(50, 1fr);
`;

// css and placement for the action bar (the action bar is the bar on the side which have the button)
const SideBarGrid = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / span50;
  background-color: #3f3d56;
  z-index: 2;
  color: white;
`;

// css and placement for the side bar (the side bar is the area where we can toggle on or off)
const ToolDocGrid = styled.div`
  grid-column: 3 / span 7;
  grid-row: 1 / span 39;
  background-color: #21415e;
  z-index: 2;
  padding: 0.5em;
`;

// css and placement for the action sequence
const ActionSequenceBarGrid = styled.div`
  grid-column: 3 / span 48;
  grid-row: 40 / span 11;
  background-color: #a8ad68;
  z-index: 2;
`;

// css and placement for the text area
const TextEditorGrid = styled.div`
  grid-column: 18 / span 20;
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

  return (
    <UIComponentRoot>
      <UIComponentGrid>
        <SideBarContext.Provider
          value={{
            toggleTextBox,
            toggleToolDoc,
            toggleApparatusInfo,
            toggleSkyBoxInfo,
            toolDoc,
            apparatusInfo,
            skyBoxInfo,
          }}
        >
          <SideBarGrid>
            <SideBarItem />
          </SideBarGrid>
          {toolDoc ? (
            <ToolDocGrid>
              <ToolDocItem />
            </ToolDocGrid>
          ) : (
            <div />
          )}
        </SideBarContext.Provider>
        <ActionSequenceBarGrid>
          <ActionSequence />
        </ActionSequenceBarGrid>
        {textBox ? (
          <TextEditorGrid>
            {" "}
            <TextEditor />
          </TextEditorGrid>
        ) : (
          <div />
        )}
      </UIComponentGrid>
    </UIComponentRoot>
  );
}

export default Overlay;
