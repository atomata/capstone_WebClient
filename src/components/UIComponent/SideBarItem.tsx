import { useContext } from "react";
import styled from "styled-components";
import { SideBarContext } from "../../util/customHooks/SideBarContext";
import saveExperienceToCloud from "../../util/cloudOperations/writeToCloud";
import { useActionList } from "../../util/customHooks/overlayfunc";
import { experienceContext } from "../../util/customHooks/experienceContext";

const SideBarItemBox = styled.div`
  position: flex;
  display: flex;
  flex-direction: column;
  height: inherit;
  width: inherit;
  background-color: #3F3D56;
`;

const SideBarItemBottomBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0%;
  background-color: #3F3D56;
`;


function SideBarItem(): JSX.Element {
  const { toggleApparatusInfo, toggleToolDoc } = useContext(SideBarContext);
  const {userId, experienceData} = useContext(experienceContext)
  const {
    actionList,
  } = useActionList(experienceData);
  return (
    <>
      <SideBarItemBox>
        <p>I am the ActionBar Item Box</p>
        <button type="button" onClick={toggleToolDoc}>
          Toggle Side Bar
        </button>
        <button type="button" onClick={toggleApparatusInfo}>
          Toggle Actionlist
        </button>
        <button type="button" >Setting for skybox</button>
        <SideBarItemBottomBox>
        <button type="button" onClick={() => {
            experienceData.experience.actionList = [...actionList];
            saveExperienceToCloud(userId, experienceData.experience);
          }}>Save</button>
        <button type="button">Return</button>
      </SideBarItemBottomBox>
      </SideBarItemBox>

    </>
  );
}

export default SideBarItem;
