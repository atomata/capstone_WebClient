import { useContext, useState } from "react";
import { SerializedApparatus } from "../../../util/types";
import ApparatusListBox from "./ApparatusListBox";
import ActionBox from "./ActionBox";
import { GlobalContext, globalContextTypes } from "../../../../pages/experience";

function ApparatusInfo(): JSX.Element {
  const { experienceData, addActionToList }: globalContextTypes =
    useContext(GlobalContext);

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
        addAction={(actionData) => addActionToList(actionData)}
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
