import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { useActionBar } from "../../util/customHooks/ActionBar";

const SideBarRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #518b4c;
`;

type SideBarProps = {
  toggleActionList: Dispatch<SetStateAction<boolean>>
  toggleSideBar: Dispatch<SetStateAction<boolean>>
};

function SideBar({toggleActionList,toggleSideBar}: SideBarProps): JSX.Element {
  // const { toggleSideBar, toggleActionList, sideBar, actionList } =
  //   useActionBar(); // ruochen double check this pls - Justin
  return (
    <SideBarRoot>
      <button type="button" onClick={()=>toggleSideBar}>
        Side bar
      </button>
      <button
        type="button"
        onClick={() => {
          toggleActionList(true);
        }}
      >Action list
      </button>
    </SideBarRoot>
  );
}

export default SideBar;
