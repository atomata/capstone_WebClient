import { Dispatch, SetStateAction, useState } from "react";
import { requestTrigger } from "../unityContextActions";
import { ActionData } from "../types";

const useSelected = (
  actionList: ActionData[]
): {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  cyclePreviewLeft: () => void;
  cyclePreviewRight: () => void;
} => {
  const [selected, setSelected] = useState(0);

  const cyclePreviewRight = () => {
    if (selected < actionList.length - 1) {
      requestTrigger(
        actionList[selected + 1].path,
        actionList[selected + 1].input
      );
      setSelected((prevVal) => prevVal + 1);
    }
  };
  // same logic with the cyclePreviewLeft, but check if seleteced is the end of the actionList

  const cyclePreviewLeft = () => {
    if (selected > 0) {
      requestTrigger(
        actionList[selected - 1].path,
        actionList[selected - 1].input
      );
      setSelected((prevVal) => prevVal - 1);
    }
  };

  return { selected, setSelected, cyclePreviewLeft, cyclePreviewRight };
};

export { useSelected };
