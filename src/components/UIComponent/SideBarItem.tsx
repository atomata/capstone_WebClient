import { useContext } from "react";
import styled from "styled-components";
import {BarsOutlined} from "@ant-design/icons";
import StyleIcon from '@mui/icons-material/Style';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
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
  vertical-align:middle;
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
        {/* <button type="button" onClick={toggleToolDoc}> */}
        {/* <BarsOutlined type="button" style={{fontSize:'40px'}} onClick={toggleToolDoc} /> */}
        <FormatListBulletedIcon type="button" style={{fontSize:'40px' }} sx={{ "&:hover": { color: "#F75D77" }}} onClick={toggleApparatusInfo} />
        {/* </button> */}
        {/* <button type="button" onClick={toggleApparatusInfo}>
          Toggle Actionlist
        </button> */}
        {/* <button type="button" >Setting for skybox</button> */}
        <StyleIcon type="button" style={{fontSize:'40px'}} sx={{ "&:hover": { color: "#F75D77" }}} />
        <SideBarItemBottomBox>
        {/* <button type="button" onClick={() => {
            experienceData.experience.actionList = [...actionList];
            saveExperienceToCloud(userId, experienceData.experience);
          }}>Save</button> */}
        <SaveAltIcon type="button" style={{fontSize:'40px'}} sx={{ "&:hover": { color: "#F75D77" }}} onClick={() => {
            experienceData.experience.actionList = [...actionList];
            saveExperienceToCloud(userId, experienceData.experience);
          }}/>
        <KeyboardReturnIcon type="button" style={{fontSize:'40px'}} sx={{ "&:hover": { color: "#F75D77" }}}/>
        {/* <button type="button">Return</button> */}
      </SideBarItemBottomBox>
      </SideBarItemBox>

    </>
  );
}

export default SideBarItem;
