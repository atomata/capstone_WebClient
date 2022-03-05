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
  const { textBox, toggleTextBox, toggleApparatusInfo, toggleSkyBoxInfo } =
    useContext(SideBarContext);
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
          <FormatListBulletedIcon
            type="button"
            style={{ fontSize: "40px" }}
            sx={{ "&:hover": { color: "white" } }}
            onClick={toggleApparatusInfo}
          />
        </SideBarItemWrapper>
        <SideBarItemWrapper>
          <StyleIcon
            type="button"
            style={{ fontSize: "40px" }}
            sx={{ "&:hover": { color: "white" } }}
            onClick={toggleSkyBoxInfo}
          />
        </SideBarItemWrapper>
        <SideBarItemWrapper>
          <IconButton
            sx={{
              "&:disabled": { color: "#555454" },
              "&:enabled": { color: "#a6a5eb" },
              "&:hover": { color: "white" },
            }}
            disabled={selectedAction === undefined}
          >
            <TextFormatIcon
              type="button"
              style={{ fontSize: "50px" }}
              onClick={toggleTextBox}
            />
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
