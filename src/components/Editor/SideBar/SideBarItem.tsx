import { useContext } from "react";
import { Link } from "@mui/material";
import styled from "styled-components";
import StyleIcon from "@mui/icons-material/Style";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { SideBarContext } from "../../../util/customHooks/SideBarContext";
import { saveExp } from "../../../util/cloudOperations/writeToCloud";
import { useActionList } from "../../../util/customHooks/overlayfunc";
import { urlFor } from "../../../util/utils";
import { GlobalContext, globalContextTypes } from "../../../util/globalContext";

const SideBarItemBox = styled.div`
  position: flex;
  display: flex;
  flex-direction: column;
  height: inherit;
  width: inherit;
  background-color: #3f3d56;
`;

const SideBarItemBottomBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0%;
  background-color: #3f3d56;
`;

const SideBarItemWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgLogo = styled.img.attrs({
  alt: "Image Placeholder",
})`
  display: block;
  height: 50px;
  width: 50px;
  margin-left: auto;
  margin-right: auto;
`;

function SideBarItem(): JSX.Element {
  const { toggleApparatusInfo, toggleSkyBoxInfo } = useContext(SideBarContext);
  const { experienceData, userId }: globalContextTypes =
    useContext(GlobalContext);
  const { actionList } = useActionList(experienceData);

  return (
    <>
      <SideBarItemBox>
        <Link href="/">
          {" "}
          <ImgLogo src={urlFor("assets/epistaLogo.png")} />
        </Link>

        <SideBarItemWrapper>
          <FormatListBulletedIcon
            type="button"
            style={{ fontSize: "40px" }}
            sx={{ "&:hover": { color: "#F75D77" } }}
            onClick={toggleApparatusInfo}
          />
        </SideBarItemWrapper>
        <SideBarItemWrapper>
          <StyleIcon
            type="button"
            style={{ fontSize: "40px" }}
            sx={{ "&:hover": { color: "#F75D77" } }}
            onClick={toggleSkyBoxInfo}
          />
        </SideBarItemWrapper>
        <SideBarItemWrapper>
          <SideBarItemBottomBox>
            <SaveAltIcon
              type="button"
              style={{ fontSize: "40px" }}
              sx={{ "&:hover": { color: "#F75D77" } }}
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
                sx={{ "&:hover": { color: "#F75D77" } }}
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
