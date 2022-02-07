import React, { useState } from "react";
import Button from "@mui/material";
import styled from "styled-components";
import { useActionBar } from "../../util/customHooks/ActionBar";

/**
 *  Plan for the action
 *
 *  */

// the side bar box
const ActionBarRoot = styled.div`
  display: flex;
  width: 100px;
  height: 100vh;
  z-index: 0;
  opacity: 1;
  pointer-events: none;
  flex-direction: row;
`;

const ActionBarList = styled.div`
  display: flex;
  backgroud-color: #00ffbf;
  width: inherit;
  height: inherit;
  pointer-events: auto;
`;

const ActionBarItems = styled.div`
  z-index: 2;
  height: 100%;
  width: inherit;
  background-color: white;
`;

const SideBarList = styled.div`
  display: flex;
  backgroud-color: #00ffbf;
  width: inherit;
  height: inherit;
  pointer-events: auto;
`;

const SideBarItems = styled.div`
  z-index: 2;
  height: 100%;
  width: inherit;
  background-color: grey;
`;
function ActionBar(): JSX.Element {
  const { toggleSideBar, toggleActionList, sideBar,actionList } = useActionBar();

  return (
    <div>
      <ActionBarRoot>
        <ActionBarList>
          <ActionBarItems>
            <button type="button" onClick={toggleSideBar}>
              Side bar
            </button>
            <button
              type="button"
              onClick={() => {
                toggleActionList();
              }}
            >
              Action list
            </button>
          </ActionBarItems>
        </ActionBarList>
        {sideBar ? (
          <SideBarList>
            <SideBarItems>
              <p>Side bar</p>
              {actionList ? <p>Action List</p> : <div />}
            </SideBarItems>
          </SideBarList>
        ) : (
          <div />
        )}
      </ActionBarRoot>
    </div>
  );
}

export default ActionBar;
