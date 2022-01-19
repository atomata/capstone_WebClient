import styled from "styled-components";
import * as React from "react";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
} from "@material-ui/core";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { callToWebGL } from "../../util/unityContextActions";
import { getActions } from "../../util/JsonParsing";
import { AssetBundle } from "../../util/types";

const Box = styled.div`
  background: #fffaf0;
  border: 1px solid black;
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;
  max-width: 100%;
`;

const ListBoxScroller = styled.div`
  max-height: 13em;
  min-width: 100%;
  max-width: 100%;
  min-height: 12em;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ListHeading = styled.h1`
  font-size: 20px;
  text-align: center;
  font-family: Trebuchet MS;
  font-weight: bold;
  color: black;
`;
// TODO need to change the action item to be just path
type ActionBoxProps = {
  assetBundle: AssetBundle;
  addAction: ([path, input]: [string, string]) => void;
};

// TODO what if assetbundle is undefined or the actiondata is undefined or empty
const ActionBox = ({ assetBundle, addAction }: ActionBoxProps): JSX.Element => {
  const actionDataList = React.useMemo(
    () => getActions(assetBundle),
    [assetBundle]
  );

  // everytime metadata is rendered we reparse metadata using useMemo hook
  if (actionDataList !== undefined && actionDataList[0] !== undefined) {
    console.log("actiondata :", actionDataList);
    return (
      <Box>
        <ListHeading>Actions</ListHeading>
        <ListBoxScroller>
          {actionDataList.map((actionData) =>
            actionData.inputs.map((input) => (
              <List key={input}>
                <ListItem>
                  <Button
                    key={input}
                    variant="contained"
                    color="secondary"
                    onClick={() => callToWebGL(actionData.path, input)}
                    id={input}
                  >
                    {input}
                  </Button>
                </ListItem>
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() => addAction([actionData.path, input])}
                  >
                    <AddOutlinedIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </List>
            ))
          )}
        </ListBoxScroller>
      </Box>
    );
  }
  return (
    <Box>
      <ListHeading>Actions</ListHeading>
      <Button disabled />
    </Box>
  );
};
export default ActionBox;
