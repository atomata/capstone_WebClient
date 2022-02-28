import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { ActionData, ExperienceData } from "../types";

/*
 *custom hook for overlay, action list
 */

const useActionList = (
  experienceData: ExperienceData,
  setExperienceData: Dispatch<SetStateAction<ExperienceData>>
) => {
  // const [actionList, setActionList] = useState(
  //   experienceData !== undefined ? experienceData.experience.actionList : []
  // );

  const [actionList, setActionList] = useMemo(
    () => [
      experienceData?.experience?.actionList ?? [],
      (list: ActionData[]) =>
        setExperienceData((e) => ({
          ...e,
          experience: { ...e?.experience, actionList: list },
        })),
    ],
    [experienceData, setExperienceData]
  );

  const [selectedAction, setSelectedAction] = useState(0);

  const addActionToList = (actionData: ActionData) => {
    actionList.push(actionData);
    setActionList([...actionList]);
  };

  const setDescription = (desc: string) => {
    if (actionList[selectedAction] !== undefined) {
      actionList[selectedAction].desc = desc;
      setActionList([...actionList]);
    }
  };

  const removeActionFromList = (index: number) => {
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
