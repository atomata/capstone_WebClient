/* eslint-disable @typescript-eslint/no-shadow */
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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Box = styled.div`
  background: #fffaf0;
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

const DragContainer = styled.div`
  border: 1px solid black;
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
type ActionSequenceBoxProps = {
  actionList: Array<[string, string, string]>;
  removeAction: (index: number) => void;
  handleOnDragEnd: (result: {
    destination: { index: number };
    source: { index: number };
  }) => void;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ActionSequenceBox = ({
  actionList,
  removeAction,
  handleOnDragEnd,
}: ActionSequenceBoxProps): JSX.Element => {
  // Ensuring the array from parameter is not empty.

  if (actionList !== undefined) {
    return (
      <Box>
        <ListHeading>Action Sequence</ListHeading>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <ListBoxScroller
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {actionList.map((data, index) => (
                  <Draggable
                    key={index}
                    index={index}
                    draggableId={index.toString()}
                  >
                    {(provided) => (
                      <DragContainer
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <List>
                          <ListItem>
                            <Button variant="contained" color="secondary">
                              {data[2]}:{data[1]}
                            </Button>
                          </ListItem>
                          <ListItemSecondaryAction>
                            <IconButton>
                              <DeleteIcon onClick={() => removeAction(index)} />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </List>
                      </DragContainer>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ListBoxScroller>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
    );
  }
  return (
    <Box>
      <ListHeading>Action Sequence</ListHeading>
      <Button disabled />
    </Box>
  );
};
export default ActionSequenceBox;
