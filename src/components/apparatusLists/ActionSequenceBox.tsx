import Button from "@mui/material/Button";
import styled from "styled-components";
import React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";

const Box = styled.div`
  background: #fffdd0;
  min-width: 100%;
  min-height: 100%;
  border: 1px solid black;
`;

const ListHeading = styled.h1`
  font-size: 20px;
  text-align: center;
  font-family: Trebuchet MS;
  font-weight: bold;
  color: black;
`;

const ListButton = styled.div`
  text-align: center;
  margin: 5px;
`;

const ListBoxScroller = styled.div`
  max-height: 25em;
  min-width: 100%;
  max-width: 100%;
  min-height: 25em;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ActionSequenceBox = ({ actionList, removeAction }) => {
  return (
    <Box>
      <ListHeading>Action Sequence</ListHeading>
      <ListBoxScroller>
        {actionList.map((data, index) => (
          <List>
            <ListItem>
              <Button variant="contained" color="secondary">
                {data[1]}
              </Button>
            </ListItem>
            <ListItemSecondaryAction>
              <IconButton>
                <DeleteIcon onClick={() => removeAction(index)} />
              </IconButton>
            </ListItemSecondaryAction>
          </List>
        ))}
      </ListBoxScroller>
    </Box>
  );
};
export default ActionSequenceBox;
