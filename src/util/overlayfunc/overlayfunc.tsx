/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch, SetStateAction, useState } from "react";

/*
 *custom hook for overlay, action list
 */

const useActionList = (experienceData: {
  initializationData: { actionList: Array<[string, string, string]> };
}) => {
  const [actionList, setActionList] = useState(
    experienceData !== undefined
      ? experienceData.initializationData.actionList
      : []
  );

  const addActionToList = (
    [path, input, assetID]: [string, string, string],
    hookinput: Array<[string, string, string]>,
    functioninput: Dispatch<SetStateAction<Array<[string, string, string]>>>
  ) => {
    hookinput.push([path, input, assetID]);
    functioninput([...actionList]);
  };

  const removeActionFromList = (
    index: number,
    hookinput: Array<[string, string, string]>,
    functioninput: Dispatch<SetStateAction<Array<[string, string, string]>>>
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
