import { useContext, useEffect } from "react";
import { IconButton, Link } from "@mui/material";
import styled from "styled-components";
import SettingsIcon from "@mui/icons-material/Settings";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import SaveIcon from "@mui/icons-material/Save";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import HelpIcon from "@mui/icons-material/Help";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { SideBarContext } from "../../../util/customHooks/SideBarContext";
import { saveExp } from "../../../util/cloudOperations/writeToCloud";
import {
  GlobalContext,
  globalContextTypes,
} from "../../../util/customHooks/globalContext";
import { ActionContext } from "../../../util/customHooks/actionContext";
import styles from "../../SideBarButtons.module.css";
import { defaultCameraView } from "../../../util/unityContextActions";
import Tooltip from "../Tooltip";

const SideBarItemRoot = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
const SideBarItemBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

const SideBarItemBottomBox = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SideBarItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const ImgLogo = styled.img.attrs({
  alt: "Image Placeholder",
})`
  margin-top: 1em;
  display: block;
  height: 2em;
  width: 2.5em;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
`;

const StyledToolTipText = styled.p`
  font-family: Trebuchet MS;
  font-size: 1em;
`;

function SideBarItem(): JSX.Element {
  const {
    textBox,
    toggleTextBox,
    toggleApparatusInfo,
    toggleSkyBoxInfo,
    toggleOverlay,
    toggleGuide,
    toggleSavingTip,
    skyBoxInfo,
    apparatusInfo,
  } = useContext(SideBarContext);

  const { experienceData, userId }: globalContextTypes =
    useContext(GlobalContext);

  const { selectedAction, actionList } = useContext(ActionContext);

  useEffect(() => {
    if (selectedAction === undefined && textBox) {
      toggleTextBox();
    }
  }, [textBox, selectedAction, toggleTextBox]);

  const save = () => {
    experienceData.experience.actionList = [...actionList];
    saveExp(userId, experienceData.experience);
    toggleSavingTip();
    setTimeout(toggleSavingTip, 1000);
  };

  return (
    <SideBarItemRoot>
      <SideBarItemBox>
        <Link href="/">
          {" "}
          <ImgLogo src="assets/justlogo.png" />
        </Link>

        <SideBarItemWrapper>
          <Tooltip html={<StyledToolTipText>Apparatus List</StyledToolTipText>}>
            <IconButton
              className={
                apparatusInfo ? styles.toggleOnSidebarItem : styles.sidebarItem
              }
              onClick={toggleApparatusInfo}
            >
              <FormatListBulletedIcon
                sx={{
                  fontSize: "30px",
                }}
              />
            </IconButton>
          </Tooltip>
        </SideBarItemWrapper>
        <SideBarItemWrapper>
          <Tooltip html={<StyledToolTipText>Settings</StyledToolTipText>}>
            <IconButton
              className={
                skyBoxInfo ? styles.toggleOnSidebarItem : styles.sidebarItem
              }
              onClick={toggleSkyBoxInfo}
            >
              <SettingsIcon
                sx={{
                  fontSize: "30px",
                }}
              />
            </IconButton>
          </Tooltip>
        </SideBarItemWrapper>
        <SideBarItemWrapper>
          <Tooltip html={<StyledToolTipText>Text box</StyledToolTipText>}>
            <IconButton
              className={
                textBox ? styles.toggleOnSidebarItem : styles.sidebarItem
              }
              disabled={selectedAction === undefined}
              onClick={toggleTextBox}
            >
              <TextFormatIcon sx={{ fontSize: "38px" }} />
            </IconButton>
          </Tooltip>
        </SideBarItemWrapper>
        <SideBarItemWrapper>
          <Tooltip html={<StyledToolTipText>Default view</StyledToolTipText>}>
            <IconButton
              className={styles.sidebarItem}
              onClick={() => defaultCameraView()}
            >
              <CameraswitchIcon sx={{ fontSize: "32px" }} />
            </IconButton>
          </Tooltip>
        </SideBarItemWrapper>
        <SideBarItemWrapper>
          <Tooltip html={<StyledToolTipText>Present</StyledToolTipText>}>
            <IconButton className={styles.sidebarItem} onClick={toggleOverlay}>
              <PlayArrowIcon sx={{ fontSize: "38px" }} />
            </IconButton>
          </Tooltip>
        </SideBarItemWrapper>
      </SideBarItemBox>
      <SideBarItemBottomBox>
        <SideBarItemWrapper>
          <Tooltip
            html={<StyledToolTipText>Beginner's Guide</StyledToolTipText>}
          >
            <IconButton
              className={styles.sidebarItem}
              onClick={() => toggleGuide()}
            >
              <HelpIcon sx={{ fontSize: "30px"}} />
            </IconButton>
          </Tooltip>
        </SideBarItemWrapper>
        <SideBarItemWrapper>
          <Tooltip html={<StyledToolTipText>Save</StyledToolTipText>}>
            <IconButton className={styles.sidebarItem} onClick={save}>
              <SaveIcon sx={{ fontSize: "30px"}} />
            </IconButton>
          </Tooltip>
        </SideBarItemWrapper>
        <SideBarItemWrapper>
          <Link href="/">
            {" "}
            <Tooltip html={<StyledToolTipText>Return</StyledToolTipText>}>
              <IconButton className={styles.sidebarItem} onClick={save}>
                <KeyboardReturnIcon sx={{ fontSize: "30px"}} />
              </IconButton>
            </Tooltip>
          </Link>
        </SideBarItemWrapper>
      </SideBarItemBottomBox>
    </SideBarItemRoot>
  );
}

export default SideBarItem;
