/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch, SetStateAction, useState } from "react";
import { ActionData, ExperienceData } from "../types";

/*
 *custom hook for overlay, action list
 */

const useActionList = (experienceData: ExperienceData) => {
  const [actionList, setActionList] = useState(
    experienceData !== undefined ? experienceData.experience.actionList : []
  );

  const [selectedAction, setSelectedAction] = useState(0);

  const addActionToList = (
    actionData: ActionData,
    hookinput: ActionData[],
    functioninput: Dispatch<SetStateAction<ActionData[]>>
  ) => {
    hookinput.push(actionData);
    functioninput([...actionList]);
  };

  const setDescription = (
    desc: string,
    hookinput: ActionData[],
    functioninput: Dispatch<SetStateAction<ActionData[]>>
  ) => {
    if (hookinput[selectedAction] !== undefined) {
      hookinput[selectedAction].desc = desc;
      functioninput([...actionList]);
    }
  };

  const removeActionFromList = (
    index: number,
    hookinput: ActionData[],
    functioninput: Dispatch<SetStateAction<ActionData[]>>
  ) => {
    hookinput.splice(index, 1);
    functioninput([...hookinput]);
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
    setSelectedAction,
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
