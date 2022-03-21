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

const ActionSequenceHeader = styled.div.attrs({
  children: "Action Sequence List",
})`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  font-size: 1.2em;
  font-weight: bold;
  font-family: Inter, monospace;
  text-transform: uppercase;
  color: white;
`;

const ActionSequenceList = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  top: 2em;
  bottom: 0.5em;
  justify-content: left;
  overflow-x: scroll;
  flex-direction: row;
  ::-webkit-scrollbar {
    height: 0.9em;
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
    border: "3px solid yellow",
    boxShadow: "0 0 10px yellow",
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
      <ActionSequenceHeader />
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
