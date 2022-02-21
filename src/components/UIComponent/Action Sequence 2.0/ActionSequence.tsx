import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ActionData } from "../../../util/types";
import ActionSequenceItem from "./ActionSequenceItem";

const ActionSequenceRoot = styled.div`
  display: relative;
  height: stretch;
  width: stretch;
  background-color: #f75d77;
`;

const ActionSequenceHeader = styled.div.attrs({
  children: "Action Sequence List",
})`
  display: flex;
  justify-content: center;
  width: stretch;
  font-size: 1.2em;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
`;

const ActionSequenceList = styled.div`
  display: flex;
  min-height: 89%;
  min-width: stretch;
  justify-content: left;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
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
  max-height: 85%;
  margin: 0.5em;
  background-color: #3f3d56;
`;

function ActionSequence({
  actionList,
  handleOnDragEnd,
  removeAction,
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
                          removeAction={() => removeAction(index)}
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
      </ActionSequenceList>
    </ActionSequenceRoot>
  );
}

export default ActionSequence;
