import { Dispatch, SetStateAction, useState } from "react";
import { requestTrigger } from "../unityContextActions";
import { ActionData } from "../types";

const useSelected = (
  actionList: ActionData[]
): {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  cyclePreviewLeft: () => () => void;
  cyclePreviewRight: () => () => void;
} => {
  const [selected, setSelected] = useState(0);

  function cyclePreviewRight() {
    return selected < actionList.length - 1
      ? () => {
          setSelected(selected + 1);
          requestTrigger(actionList[selected+1].path, actionList[selected+1].input);
        }
      : null;
    // same logic with the cyclePreviewLeft, but check if seleteced is the end of the actionList
  }

  function cyclePreviewLeft() {
    if (selected > 0) {
      return () => {
        setSelected(selected - 1);
        requestTrigger(actionList[selected-1].path, actionList[selected-1].input);
      };
    }
    return () => {
      setSelected(selected);
      requestTrigger(actionList[selected].path, actionList[selected].input);
    };
  }

  return { selected, setSelected, cyclePreviewLeft, cyclePreviewRight };
};

export { useSelected };
