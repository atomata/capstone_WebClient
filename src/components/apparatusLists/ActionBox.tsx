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

type ActionBoxProps = {
  assetbundle: AssetBundle;
  addAction: ([path, input]: [string, string]) => void;
};

// TODO what if assetbundle is undefined or the actiondata is undefined or empty
const ActionBox = ({ assetbundle, addAction }: ActionBoxProps): JSX.Element => {
  const actionData = React.useMemo(
    () => getActions(assetbundle),
    [assetbundle]
  );

  // everytime metadata is rendered we reparse metadata using useMemo hook
  return actionData !== undefined ? (
    <Box>
      <ListHeading>Actions</ListHeading>
      <ListBoxScroller>
        {actionData[0].map((data) => (
          <List key={data}>
            <ListItem>
              <Button
                key={data}
                variant="contained"
                color="secondary"
                onClick={() => requestTrigger(actionData[1], data)}
                id={data}
              >
                {data}
              </Button>
            </ListItem>
            <ListItemSecondaryAction>
              <IconButton onClick={() => addAction([actionData[1], data])}>
                <AddOutlinedIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </List>
        ))}
      </ListBoxScroller>
    </Box>
  ) : (
    <Box>
      <ListHeading>Actions</ListHeading>
      <Button disabled />
    </Box>
  );
};
export default ActionBox;
