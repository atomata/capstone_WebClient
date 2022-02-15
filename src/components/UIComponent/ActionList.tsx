import { useContext, useState } from "react";
import { experienceContext } from "../../util/customHooks/experienceContext";
import { SerializedApparatus } from "../../util/types";
import ApparatusListBox from "../editorBoxes/ApparatusListBox";
import {useActionList} from "../../util/customHooks/overlayfunc"
import ActionBox from "../editorBoxes/ActionBox"

function ActionList(): JSX.Element {
  const { experienceData } = useContext(experienceContext);
  const {
    actionList,
    setActionList,
    addActionToList,
  } = useActionList(experienceData);
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
          addActionToList(actionData, actionList, setActionList)
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

export default ActionList;
