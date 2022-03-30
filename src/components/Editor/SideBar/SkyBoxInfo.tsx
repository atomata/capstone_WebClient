import * as React from "react";
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
import { Container, Header, TreeViewContainer } from "./ToolDocContent";

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
      <Header>General Settings</Header>
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
