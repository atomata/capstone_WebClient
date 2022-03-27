import * as React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import { useContext } from "react";
import { changeSkybox } from "../../../util/unityContextActions";
import AssetItem from "../TreeView/AssetItem";
import ActionItem from "../TreeView/ActionItem";
import {
  GlobalContext,
  globalContextTypes,
} from "../../../util/customHooks/globalContext";

const SkyboxInfoHeader = styled.div.attrs({
  children: "General Settings",
})`
  display: flex;
  justify-content: center;
  width: stretch;
  font-size: 18px;
  color: white;
  font-family: Inter, monospace;
  margin-bottom: 1em;
`;

const Container = styled.div`
  margin-top: 1.5em;
  margin-left: 0.5em;
  margin-right: 0.5em;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const TreeViewContainer = styled.div`
  overflow-y: scroll;
  margin-left: 0.5em;
  &::-webkit-scrollbar {
    width: 0.2em;
  }
  &::-webkit-scrollbar-thumb {
    background: #a5a4ea;
    border-radius: 1em;
    background-clip: padding-box;
  }
`;
function SkyBoxInfo(): JSX.Element {
  const { experienceData }: globalContextTypes = useContext(GlobalContext);
  const skyboxList = [
    "space",
    "ocean",
    "default",
    "dark-storm",
    "earth-satellite",
    "megasun",
    "mars",
    "ambience",
  ];
  return (
    <Container>
      <SkyboxInfoHeader />
      <TreeViewContainer>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ maxHeight: "100%", flexGrow: 1, maxWidth: "90%" }}
        >
          <AssetItem
            labelText="Change Background"
            nodeId="skybox"
            LabelIcon={SettingsInputComponentIcon}
          >
            {skyboxList.map((skybox) => (
              <ActionItem
                labelText={skybox}
                nodeId={skybox}
                add={() => {
                  changeSkybox(skybox);
                  experienceData.experience.skyboxId = skybox;
                }}
              />
            ))}
          </AssetItem>
        </TreeView>
      </TreeViewContainer>
    </Container>
  );
}

export default SkyBoxInfo;
