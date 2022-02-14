import React, { useState } from "react";
import Button from "@mui/material";
import styled from "styled-components";
import { useActionBar } from "../../util/customHooks/ActionBar";
import ActionList from "./ActionList";
import ActionBarItem from "./ActionBarItem";
import ActionSequence from "./Action Sequence 2.0/ActionSequence";
import TextEditor from "./TextEditor";

/**
 *  Plan for the action
 *
 *  */

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
const ActionBarGrid = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1 / span50;
  background-color: aliceblue;
  z-index: 2;
`;

// css and placement for the side bar (the side bar is the area where we can toggle on or off)
const SideBarGrid = styled.div`
  grid-column: 4 / span 7;
  grid-row: 1 / span 39;
  background-color: #21415e;
  z-index: 2;
  padding: 0.5em;
`;

// css and placement for the action sequence
const ActionSequenceBarGrid = styled.div`
  grid-column: 4 / span 47;
  grid-row: 40 / span 11;
  background-color: #a8ad68;
  z-index: 2;
`;

// css and placement for the text area
const TextEditorGrid = styled.div`
  grid-column: 18 / span 20;
  grid-row: 30 / span 8;
  z-index: 2;
  background-color: #0c0475;
`;

function ActionBar(): JSX.Element {
  const { toggleSideBar, toggleActionList, sideBar, actionList } =
    useActionBar();

  return (
    <UIComponentRoot>
      <UIComponentGrid>
        <ActionBarGrid>
          <p>I am the Action Bar Grid</p>
          <ActionBarItem
            toggleSideBar={toggleSideBar}
            toggleActionList={toggleActionList}
          />
        </ActionBarGrid>
        {sideBar ? (
          <SideBarGrid>
            <p>I am the side bar grid</p>
            {actionList ? <ActionList /> : <div />}
          </SideBarGrid>
        ) : (
          <div />
        )}

        <ActionSequenceBarGrid>
          <ActionSequence />
        </ActionSequenceBarGrid>
        <TextEditorGrid>
          <TextEditor />
        </TextEditorGrid>
      </UIComponentGrid>
    </UIComponentRoot>
  );
}

export default ActionBar;
