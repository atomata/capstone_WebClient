import { Dispatch, SetStateAction, useState } from "react";
import { requestTrigger } from "../unityContextActions";
import { ActionData } from "../types";

const useSelected = (
  actionList: ActionData[]
): {
  desc: string;
  selected: number;
  cyclePreviewLeft: () => void;
  cyclePreviewRight: () => void;
} => {
  const [selected, setSelected] = useState(0);
  const [desc, setDesc] = useState(actionList[0].desc);

  const cyclePreviewRight = () => {
    if (selected < actionList.length - 1) {
      requestTrigger(
        actionList[selected + 1].path,
        actionList[selected + 1].input.command
      );
      setSelected((prevVal) => prevVal + 1);
      updateDesc(selected + 1);
    }
  };
  // same logic with the cyclePreviewLeft, but check if seleteced is the end of the actionList

  const cyclePreviewLeft = () => {
    if (selected > 0) {
      requestTrigger(
        actionList[selected - 1].path,
        actionList[selected - 1].input.command
      );
      setSelected((prevVal) => prevVal - 1);
      updateDesc(selected - 1);
    }
  };

  const updateDesc = (index : number) => {
    if(actionList[index].desc === undefined)
      setDesc("");
    else
      setDesc(actionList[index].desc);
  }

  return { desc, selected, cyclePreviewLeft, cyclePreviewRight };
};

export { useSelected };
