import { useContext } from "react";
import styled from "styled-components";
import { SideBarContext } from "../../util/customHooks/SideBarContext";
import saveExperienceToCloud from "../../util/cloudOperations/writeToCloud";
import { useActionList } from "../../util/customHooks/overlayfunc";
import { experienceContext } from "../../util/customHooks/experienceContext";

const ActionBarItemBox = styled.div`
  position: flex;
  display: flex;
  flex-direction: column;
  height: inherit;
  width: inherit;
  background-color: #518b4c;
`;

const ActionBarItemBottomBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0%;
  background-color: #518b4c;
`;


function ActionBarItem(): JSX.Element {
  const { toggleActionList, toggleSideBar } = useContext(SideBarContext);
  const {userId, experienceData} = useContext(experienceContext)
  const {
    actionList,
  } = useActionList(experienceData);

  return (
    <>
      <ActionBarItemBox>
        <p>I am the ActionBar Item Box</p>
        <button type="button" onClick={toggleSideBar}>
          Toggle Side Bar
        </button>
        <button type="button" onClick={toggleActionList}>
          Toggle Actionlist
        </button>
        <button type="button" >Setting for skybox</button>
      </ActionBarItemBox>
      <ActionBarItemBottomBox>
        <button type="button" onClick={() => {
            experienceData.experience.actionList = [...actionList];
            saveExperienceToCloud(userId, experienceData.experience);
          }}>Save</button>
        <button type="button" onClick={}>Return</button>
      </ActionBarItemBottomBox>
    </>
  );
}

export default ActionBarItem;
function useHistory() {
  throw new Error("Function not implemented.");
}

