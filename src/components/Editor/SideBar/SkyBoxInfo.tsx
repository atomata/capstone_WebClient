import * as React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import {
  changeSkybox,
} from "../../../util/unityContextActions";
import AssetItem from "../TreeView/AssetItem";
import ActionItem from "../TreeView/ActionItem";

const SkyboxInfoHeader = styled.div.attrs({
  children: "General Settings",
})`
  display: flex;
  justify-content: center;
  width: stretch;
  font-size: 1.2em;
  text-transform: uppercase;
  color: white;
  font-family: Inter, monospace;
  margin-bottom: 1em;
`;

function SkyBoxInfo(): JSX.Element {
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
    <>
      <SkyboxInfoHeader />
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ maxHeight: "100%", flexGrow: 1, maxWidth: "90%" }}
      >
        <AssetItem labelText="Change Background" nodeId="skybox"  LabelIcon={SettingsInputComponentIcon}>
          {skyboxList.map((skybox) => (
            <ActionItem
              labelText={skybox}
              nodeId={skybox}
              add={() => {
                changeSkybox(skybox);
              }}
            />
          ))}
        </AssetItem>
      </TreeView>
    </>
  );
}

export default SkyBoxInfo;
