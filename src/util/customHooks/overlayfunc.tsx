import { useState } from "react";
import { ActionData, ExperienceData } from "../types";

/*
 *custom hook for overlay, action list
 */

const useActionList = (experienceData: ExperienceData) => {
  const [actionList, setActionList] = useState(
    experienceData !== undefined ? experienceData.experience.actionList : []
  );

  const [selectedAction, setSelectedAction] = useState(actionList[0]);
  const selectAction = (index: number) => {
    setSelectedAction(actionList[index]);
  };

  const addActionToList = (actionData: ActionData) => {
    actionList.push(actionData);
    setActionList([...actionList]);
  };

  const setDescription = (desc: string) => {
    if (selectedAction !== undefined) {
      selectedAction.desc = desc;
      setActionList([...actionList]);
    }
  };

  const removeActionFromList = (index: number) => {
    if(actionList[index] === selectedAction){
      setSelectedAction(undefined);
    }
    actionList.splice(index, 1);
    setActionList([...actionList]);
  };

  const handleOnDragEnd = (result: {
    destination: { index: number };
    source: { index: number };
  }) => {
    if (!result.destination) {
      return;
    }
    const [reorderItem] = actionList.splice(result.source.index, 1);
    actionList.splice(result.destination.index, 0, reorderItem);
  };

  return {
    selectedAction,
    selectAction,
    setDescription,
    actionList,
    setActionList,
    removeActionFromList,
    addActionToList,
    handleOnDragEnd,
  };
};

/*
 *custom hook for overlay
 */
const useOverlay = () => {
  const [showOverlay, setOverlay] = useState(true);

  const toggleOverlay = () => {
    setOverlay((show) => !show);
  };

  return { showOverlay, toggleOverlay };
};

export { useOverlay, useActionList };
