import {Dispatch, SetStateAction} from "react";
import styled from "styled-components";

const ActionBarItemBox = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  width: inherit;
  background-color: #518b4c;
`;

type SideBarProperties = {
    toggleActionList: Dispatch<SetStateAction<boolean>>
    toggleSideBar: Dispatch<SetStateAction<boolean>>
}
function ActionBarItem({toggleActionList,toggleSideBar}: SideBarProperties): JSX.Element {

  return (
    <ActionBarItemBox>
      <p>I am the ActionBar Item Box</p>
      <button type="button" onClick={() => toggleSideBar}>
        Toggle Side Bar
      </button>
      <button type="button" onClick={() => toggleActionList}>
        Toggle Actionlist
      </button>
    </ActionBarItemBox>
  );
}



export default ActionBarItem;
