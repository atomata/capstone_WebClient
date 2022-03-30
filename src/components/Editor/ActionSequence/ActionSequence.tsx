import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useContext } from "react";
import { makeStyles } from "@mui/styles";
import ActionSequenceItem from "./ActionSequenceItem";
import { ActionContext } from "../../../util/customHooks/actionContext";

const ActionSequenceRoot = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

const ActionSequenceList = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  top: 2em;
  bottom: 0.5em;
  justify-content: left;
  overflow-x: scroll;
  overflow-y: hidden;
  flex-direction: row;
  &{
    scrollbar-color: #3f3d58 #f75d77;
    scrollbar-width: thin;
  } 
  ::-webkit-scrollbar {
    height: 0.7em;
  }
  ::-webkit-scrollbar-thumb {
    background: #3f3d58;
    max-width: 1em;
    border-radius: 1em;
  }
`;
const DragContainer = styled.div`
  display: flex;
  margin-left: 2em;
  margin-bottom: 0.5em;
  border: 1px solid black;
  background-color: #3f3d56;
`;

const useStyles = makeStyles((theme) => ({
  SelectedAction: {
    border: "3px solid white",
    boxShadow: "0 0 10px white",
  },
}));

function ActionSequence(): JSX.Element {
  const classes = useStyles();
  const {
    actionList,
    handleOnDragEnd,
    removeActionFromList,
    selectAction,
    selectedAction,
  } = useContext(ActionContext);

  return (
    <ActionSequenceRoot>
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
                      className={
                        selectedAction === data ? classes.SelectedAction : ""
                      }
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
                        selectAction={() => selectAction(index)}
                        removeAction={() => removeActionFromList(index)}
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
    </ActionSequenceRoot>
  );
}

export default ActionSequence;
