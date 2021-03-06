import { useState } from "react";
import {
  defaultCameraView,
  pauseApparatus,
  playApparatus,
  requestTrigger,
  setDefault,
} from "../unityContextActions";
import { ActionData, TreeNode } from "../types";

type useSelectedProps = {
  actionList: ActionData[];
  apparatusRoot: TreeNode;
};
const useSelected = ({
  actionList,
  apparatusRoot,
}: useSelectedProps): {
  desc: string;
  selected: number;
  cyclePreviewLeft: () => void;
  cyclePreviewRight: () => void;
} => {
  const [selected, setSelected] = useState(-1);
  const [desc, setDesc] = useState("");

  const cyclePreviewRight = () => {
    if (selected === -1) {
      playApparatus();
    }
    if (selected < actionList.length - 1) {
      requestTrigger(
        actionList[selected + 1].path,
        actionList[selected + 1].input.command
      );
      setSelected((prevVal) => prevVal + 1);
      updateDesc(selected + 1);
    } else {
      setDefault(apparatusRoot);
      defaultCameraView();
      pauseApparatus();
      setSelected(-1);
    }
  };
  // same logic with the cyclePreviewLeft, but check if seleteced is the end of the actionList

  const cyclePreviewLeft = () => {
    if (selected > 0) {
      requestTrigger(
        actionList[selected - 1].path,
        actionList[selected - 1].input.command
      );
      updateDesc(selected - 1);
      setSelected((prevVal) => prevVal - 1);
    } else {
      setDefault(apparatusRoot);
      defaultCameraView();
      pauseApparatus();
      setSelected(-1);
    }
  };

  const updateDesc = (index: number) => {
    if (actionList[index].desc === undefined) setDesc("");
    else setDesc(actionList[index].desc);
  };

  return { desc, selected, cyclePreviewLeft, cyclePreviewRight };
};

export { useSelected };
