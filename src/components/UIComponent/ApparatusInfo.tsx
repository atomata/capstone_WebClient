import { useContext, useState } from "react";
import { SerializedApparatus } from "../../util/types";
import ApparatusListBox from "../editorBoxes/ApparatusListBox";
import ActionBox from "../editorBoxes/ActionBox";
import { GlobalContext, globalContextTypes } from "../../../pages/experience";

function ApparatusInfo(): JSX.Element {
  const { experienceData }: globalContextTypes =
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
