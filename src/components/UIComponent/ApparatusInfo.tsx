import { useContext, useState } from "react";
import { ActionData, SerializedApparatus } from "../../util/types";
import ApparatusListBox from "../editorBoxes/ApparatusListBox";
import ActionBox from "../editorBoxes/ActionBox";
import { GlobalContext, globalContextTypes } from "../../../pages/experience";

type OverlayProps = {
  addActionToList: (actionData: ActionData) => void;
  removeActionFromList : (index: number) => void;
};


function ApparatusInfo({addActionToList, removeActionFromList}: OverlayProps): JSX.Element {

  const {experienceData} :globalContextTypes= useContext(GlobalContext)

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
