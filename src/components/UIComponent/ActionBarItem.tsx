import { createContext, Dispatch, SetStateAction, useContext } from "react";
import styled from "styled-components";
import { useActionBar } from "../../util/customHooks/ActionBarFunc";
import { SideBarContext } from "../../util/customHooks/SideBarContext";

const ActionBarItemBox = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  width: inherit;
  background-color: #518b4c;
`;

function ActionBarItem(): JSX.Element {
  const {
    toggleActionList,
    toggleSideBar
  } = useContext(SideBarContext);

  return (
    <ActionBarItemBox>
      <p>I am the ActionBar Item Box</p>
      <button type="button" onClick={toggleSideBar}>
        Toggle Side Bar
      </button>
      <button type="button" onClick={toggleActionList}>
        Toggle Actionlist
      </button>
      {/* <button type="button" onClick={changesValue}>
        Change value test
      </button> */}
    </ActionBarItemBox>
  );
}

export default ActionBarItem;
