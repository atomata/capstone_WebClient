import React, { useContext } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CategoryIcon from "@mui/icons-material/Category";
import styled from "styled-components";
import { TreeNode } from "../../../util/types";
import {
  GlobalContext,
  globalContextTypes,
} from "../../../util/customHooks/globalContext";
import { getAssetBundleActions } from "../../../util/jsonParsing";
import { requestTrigger } from "../../../util/unityContextActions";
import { ActionContext } from "../../../util/customHooks/actionContext";
import AssetItem from "../TreeView/AssetItem";
import ActionItem from "../TreeView/ActionItem";

const ApparatusInfoHeader = styled.div.attrs({
  children: "Apparatus & Actions",
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

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const TreeViewContainer = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 1em;
  }
  &::-webkit-scrollbar-thumb {
    background: #a5a4ea;
    border-radius: 1em;
    border: 0.25em solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }
`;
function ApparatusInfo(): JSX.Element {
  const { experienceData }: globalContextTypes = useContext(GlobalContext);
  const { addActionToList } = useContext(ActionContext);

  const metadata = checkIfMetaExists();
  const apparatusInfo = React.useMemo(
    () => getAssetBundleActions(experienceData.apparatusRoot),
    [metadata]
  );
  return (
    <Container>
      <ApparatusInfoHeader />
      <TreeViewContainer>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ maxHeight: "100%", maxWidth: "90%" }}
        >
          {apparatusInfo.map((data, index) => (
            <AssetItem
              labelText={data[0]}
              nodeId={`index ${index}`}
              LabelIcon={CategoryIcon}
            >
              {data[1].map((actionData) => (
                <ActionItem
                  labelText={
                    actionData.input.name !== undefined
                      ? actionData.input.name
                      : actionData.input.command
                  }
                  nodeId={actionData}
                  play={() =>
                    requestTrigger(actionData.path, actionData.input.command)
                  }
                  add={() => {
                    const actionDataClone = {
                      input: actionData.input,
                      path: actionData.path,
                      assetId: actionData.assetId,
                      desc: actionData.desc,
                    };
                    addActionToList(actionDataClone);
                  }}
                />
              ))}
            </AssetItem>
          ))}
        </TreeView>
      </TreeViewContainer>
    </Container>
  );

  function checkIfMetaExists(): TreeNode {
    return experienceData !== undefined
      ? experienceData.apparatusRoot
      : undefined;
  }
}

export default ApparatusInfo;
