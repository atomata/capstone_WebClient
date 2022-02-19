import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ActionData } from "../../../util/types";
import ActionSequenceItem from "./ActionSequenceItem";

const ActionSequenceRoot = styled.div`
  display: relative;
  height: stretch;
  width: stretch;
  background-color: #00ffbf;
`;

const ActionSequenceHeader = styled.div.attrs({
  children: "Action Sequence List",
})`
  display: flex;
  justify-content: center;
  width: stretch;
  background-color: gold;
`;

const ActionSequenceList = styled.div`
  display: flex;
  min-height: 91%;
  min-width: stretch;
  background-color: #778b87;
  justify-content: left;
  overflow-x: scroll;
`;

type ActionSequenceProps = {
  actionList: ActionData[];
  removeAction: (index: number) => void;
  handleOnDragEnd: (result: {
    destination: { index: number };
    source: { index: number };
  }) => void;
};

function ActionSequence({
  actionList,
  removeAction,
  handleOnDragEnd,
}: ActionSequenceProps): JSX.Element {
  return (
    <ActionSequenceRoot>
      <ActionSequenceHeader />
      <ActionSequenceList>
      {/* <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppable">
            {(dropProvided) => (
              <ListBoxScroller
                {...dropProvided.droppableProps}
                ref={dropProvided.innerRef}
              >
                {actionList.map((data, index) => (
                  <Draggable
                    key={index}
                    index={index}
                    draggableId={index.toString()}
                  >
                    {(dragProvided) => (
                      <DragContainer
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                        ref={dragProvided.innerRef}
                      >
                        <List>
                          <ListItem>
                            <Button variant="contained" color="secondary">
                              {data.assetId}:
                              {data.input.name !== undefined
                                ? data.input.name
                                : data.input.command}
                            </Button>
                          </ListItem>
                          <ListItemSecondaryAction>
                            <IconButton onClick={() => removeAction(index)}>
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </List>
                      </DragContainer>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </ListBoxScroller>
            )}
          </Droppable>
        </DragDropContext> */}
        <ActionSequenceItem name = "Item 1" action = "Item 1 Action" />
        <ActionSequenceItem name = "Item 1" action = "Item 1 Action" />
        <ActionSequenceItem name = "Item 1" action = "Item 1 Action" />
        <ActionSequenceItem name = "Item 1" action = "Item 1 Action" />
        <ActionSequenceItem name = "Item 1" action = "Item 1 Action" />
        <ActionSequenceItem name = "Item 1" action = "Item 1 Action" />
        <ActionSequenceItem name = "Item 1" action = "Item 1 Action" />
        <ActionSequenceItem name = "Item 1" action = "Item 1 Action" />
        <ActionSequenceItem name = "Item 1" action = "Item 1 Action" />
        <ActionSequenceItem name = "Item 1" action = "Item 1 Action" />
        <ActionSequenceItem name = "Item 1" action = "Item 1 Action" />
      </ActionSequenceList>
    </ActionSequenceRoot>
  );
}

export default ActionSequence;
