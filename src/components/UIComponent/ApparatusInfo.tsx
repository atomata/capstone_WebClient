import { useState } from "react";
import { ActionData, ExperienceData, SerializedApparatus } from "../../util/types";
import ApparatusListBox from "../editorBoxes/ApparatusListBox";
import ActionBox from "../editorBoxes/ActionBox";

type OverlayProps = {
  experienceData: ExperienceData;
  addActionToList: (actionData: ActionData) => void;
  removeActionFromList : (index: number) => void;

};


function ApparatusInfo({experienceData,addActionToList, removeActionFromList}: OverlayProps): JSX.Element {
  const [assetBundle, setAssetBundle] = useState({
    children: [],
    path: "",
    identifier: "",
  });
  return (
    <>
      <ApparatusListBox
        metadata={checkIfMetaExists()}
        handleAssetBundleChange={(data) => setAssetBundle(data)}
      />
      <ActionBox
        assetBundle={assetBundle}
        addAction={(actionData) =>
          addActionToList(actionData)
        }
      />
    </>
  );

  function checkIfMetaExists(): SerializedApparatus {
    return experienceData !== undefined
      ? experienceData.apparatusMetadata
      : undefined;
  }
}

export default ApparatusInfo;
