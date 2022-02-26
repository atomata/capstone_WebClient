import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ActionData } from "../../../util/types";
import ActionSequenceItem from "./ActionSequenceItem";
import { useContext } from "react";
import {
  GlobalContext,
  globalContextTypes,
  TestContext,
} from "../../../../pages/experience";

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

const DragContainer = styled.div`
  border: 1px solid black;
  max-height: 85%;
  margin: 0.5em;
  background-color: #3f3d56;
`;

function ActionSequence(): JSX.Element {
  const { name, setName } = useContext(TestContext);

  const {
    actionList,
    handleOnDragEnd,
    removeActionFromList,
  }: globalContextTypes = useContext(GlobalContext);

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
                          removeAction={() => removeActionFromList(index)}
                        />
                      </DragContainer>
                    )}
                  </Draggable>
                ))}
                <ActionSequenceItem
                  id={name}
                  name={name}
                  removeAction={() => setName("OLD NAME")}
                />
                <ActionSequenceItem
                  id={name}
                  name={name}
                  removeAction={() => setName("NEW NAME")}
                />
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
