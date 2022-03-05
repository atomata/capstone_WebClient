import { useContext, useEffect } from "react";
import { IconButton, Link } from "@mui/material";
import styled from "styled-components";
import StyleIcon from "@mui/icons-material/Style";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
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
  margin-top: 5px;
  display: block;
  height: 35px;
  width: 45px;
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

  return (
    <>
      <SideBarItemBox>
        <Link href="/">
          {" "}
          <ImgLogo src={urlFor("assets/justlogo.png")} />
        </Link>

        <SideBarItemWrapper>
          <IconButton
            className={
              apparatusInfo ? styles.toggleOnSidebarItem : styles.sidebarItem
            }
            onClick={toggleApparatusInfo}
          >
            <FormatListBulletedIcon
              sx={{
                fontSize: "40px",
              }}
            />
          </IconButton>
        </SideBarItemWrapper>
        <SideBarItemWrapper>
          <IconButton
            className={
              skyBoxInfo ? styles.toggleOnSidebarItem : styles.sidebarItem
            }
            onClick={toggleSkyBoxInfo}
          >
            <StyleIcon
              sx={{
                fontSize: "40px",
              }}
            />
          </IconButton>
        </SideBarItemWrapper>
        <SideBarItemWrapper>
          <IconButton
            className={
              textBox ? styles.toggleOnSidebarItem : styles.sidebarItem
            }
            disabled={selectedAction === undefined}
            onClick={toggleTextBox}
          >
            <TextFormatIcon sx={{ fontSize: "50px" }} />
          </IconButton>
        </SideBarItemWrapper>
        <SideBarItemWrapper>
          <SideBarItemBottomBox>
            <SaveAltIcon
              type="button"
              style={{ fontSize: "40px" }}
              sx={{ "&:hover": { color: "white" }, mb: 3 }}
              onClick={() => {
                experienceData.experience.actionList = [...actionList];
                saveExp(userId, experienceData.experience);
              }}
            />
            <Link href="/">
              {" "}
              <KeyboardReturnIcon
                type="button"
                style={{ fontSize: "40px" }}
                sx={{ "&:hover": { color: "white" }, color: "#a6a5eb" }}
                onClick={() => {
                  experienceData.experience.actionList = [...actionList];
                  saveExp(userId, experienceData.experience);
                }}
              />
            </Link>
          </SideBarItemBottomBox>
        </SideBarItemWrapper>
      </SideBarItemBox>
    </>
  );
}

export default SideBarItem;
