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

const DragContainer = styled.div`
  border: 1px solid black;
`;

function ActionSequence({
  actionList,
  handleOnDragEnd,
}: ActionSequenceProps): JSX.Element {
  return (
    <ActionSequenceRoot>
      <ActionSequenceHeader />
      <ActionSequenceList>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(dropProvided) => (
              <ActionSequenceList
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
                        <ActionSequenceItem
                          id={data.assetId}
                          name={
                            data.input.name !== undefined
                              ? data.input.name
                              : data.input.command
                          }
                          action="Item 1 Action"
                        />
                      </DragContainer>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </ActionSequenceList>
            )}
          </Droppable>
        </DragDropContext>
        {/* <ActionSequenceItem id = "1" name = "Item 1" action = "Item 1 Action" /> */}
      </ActionSequenceList>
    </ActionSequenceRoot>
  );
}

export default ActionSequence;
