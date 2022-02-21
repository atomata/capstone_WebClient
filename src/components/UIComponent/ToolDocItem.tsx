import { useContext } from "react";
import { SideBarContext } from "../../util/customHooks/SideBarContext";
import { ActionData, ExperienceData } from "../../util/types";
import ApparatusInfo from "./ApparatusInfo";
import SkyBoxInfo from "./SkyBoxInfo";

type ToolDocItemProps = {
  experienceData: ExperienceData;
  addActionToList: (actionData: ActionData) => void;
};

function ToolDocItem({
  experienceData,
  addActionToList,
}: ToolDocItemProps): JSX.Element {
  const { apparatusInfo, skyboxInfo } = useContext(SideBarContext);
  return (
    <div>
      {apparatusInfo ? (
        <ApparatusInfo
          experienceData={experienceData}
          addActionToList={addActionToList}
        />
      ) : (
        <div />
      )}
      {skyboxInfo ? <SkyBoxInfo /> : <div />}
    </div>
  );
}

export default ToolDocItem;
