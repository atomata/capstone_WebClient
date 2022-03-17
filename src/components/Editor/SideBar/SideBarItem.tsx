import { useContext, useEffect } from "react";
import { IconButton, Link } from "@mui/material";
import styled from "styled-components";
import SettingsIcon from "@mui/icons-material/Settings";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { SideBarContext } from "../../../util/customHooks/SideBarContext";
import { saveExp } from "../../../util/cloudOperations/writeToCloud";
import { urlFor } from "../../../util/utils";
import {
  GlobalContext,
  globalContextTypes,
} from "../../../util/customHooks/globalContext";
import { ActionContext } from "../../../util/customHooks/actionContext";
import styles from "../../SideBarButtons.module.css";
import { defaultCameraView } from "../../../util/unityContextActions";
import Tooltip from "../../../util/Tooltip";

const SideBarItemBox = styled.div`
  position: flex;
  display: flex;
  flex-direction: column;
  height: inherit;
  width: inherit;
  color: #a6a5eb;
  background-color: #3f3d56;
`;

const SideBarItemBottomBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0%;
  background-color: #3f3d56;
  margin-bottom: 15px;
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

function SideBarItem(): JSX.Element {
  const {
    textBox,
    toggleTextBox,
    toggleApparatusInfo,
    toggleSkyBoxInfo,
    toggleOverlay,
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
    <>
      <SideBarItemBox>
        <Link href="/">
          {" "}
          <ImgLogo src={urlFor("assets/justlogo.png")} />
        </Link>

        <SideBarItemWrapper>
          <Tooltip html={<p>Apparatus List</p>}>
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
          <Tooltip html={<p>Settings</p>}>
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
          <Tooltip html={<p>Text box</p>}>
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
          <Tooltip html={<p>Default view</p>}>
            <IconButton
              className={styles.sidebarItem}
              onClick={() => defaultCameraView()}
            >
              <CameraswitchIcon sx={{ fontSize: "32px" }} />
            </IconButton>
          </Tooltip>
        </SideBarItemWrapper>
        <SideBarItemWrapper>
          <Tooltip html={<p>Preview</p>}>
            <IconButton className={styles.sidebarItem} onClick={toggleOverlay}>
              <PlayArrowIcon sx={{ fontSize: "35px" }} />
            </IconButton>
          </Tooltip>
        </SideBarItemWrapper>
        <SideBarItemWrapper>
          <SideBarItemBottomBox>
            <Tooltip html={<p>Save</p>}>
              <IconButton className={styles.sidebarItem} onClick={save}>
                <SaveAltIcon sx={{ fontSize: "35px" }} />
              </IconButton>
            </Tooltip>
            <Link href="/">
              {" "}
              <Tooltip html={<p>Return</p>}>
                <IconButton className={styles.sidebarItem} onClick={save}>
                  <KeyboardReturnIcon sx={{ fontSize: "35px" }} />
                </IconButton>
              </Tooltip>
            </Link>
          </SideBarItemBottomBox>
        </SideBarItemWrapper>
      </SideBarItemBox>
    </>
  );
}

export default SideBarItem;
