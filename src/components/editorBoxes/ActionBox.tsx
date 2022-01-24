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
import { requestTrigger } from "../../util/unityContextActions";
import { getActions } from "../../util/jsonParsing";
import { ActionData, AssetBundle } from "../../util/types";

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

type ActionBoxProps = {
  assetBundle: AssetBundle;
  addAction: (actionData: ActionData) => void;
};

const ActionBox = ({ assetBundle, addAction }: ActionBoxProps): JSX.Element => {
  const actionList = React.useMemo(
    () => getActions(assetBundle),
    [assetBundle]
  );

  // everytime metadata is rendered we reparse metadata using useMemo hook
  if (actionList !== undefined && actionList[0] !== undefined)
    return (
      <Box>
        <ListHeading>Actions</ListHeading>
        <ListBoxScroller>
          {actionList.map((actionData) => (
            <List key={actionData.input}>
              <ListItem>
                <Button
                  key={actionData.input}
                  variant="contained"
                  color="secondary"
                  onClick={() =>
                    requestTrigger(actionData.path, actionData.input)
                  }
                  id={actionData.input}
                >
                  {actionData.input}
                </Button>
              </ListItem>
              <ListItemSecondaryAction>
                <IconButton onClick={() => addAction(actionData)}>
                  <AddOutlinedIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </List>
          ))}
        </ListBoxScroller>
      </Box>
    );
  return (
    <Box>
      <ListHeading>Actions</ListHeading>
      <Button disabled />
    </Box>
  );
};
export default ActionBox;
