import { useContext } from "react";
import { SideBarContext } from "../../util/customHooks/SideBarContext";
import { ActionData, ExperienceData } from "../../util/types";
import ApparatusInfo from "./ApparatusInfo";
import SkyBoxInfo from "./SkyBoxInfo";

type ToolDocItemProps = {
  experienceData: ExperienceData;
  addActionToList: (actionData: ActionData) => void;
  removeAction: (index: number) => void;
};

function ToolDocItem({
  experienceData,
  addActionToList, removeAction
}: ToolDocItemProps): JSX.Element {
  const { apparatusInfo, skyboxInfo } = useContext(SideBarContext);
  return (
    <div>
      {apparatusInfo ? (
        <ApparatusInfo
          experienceData={experienceData}
          addActionToList={addActionToList}
          removeActionFromList = {removeAction}
        />
      ) : (
        <div />
      )}
      {skyboxInfo ? <SkyBoxInfo /> : <div />}
    </div>
  );
}

export default ToolDocItem;
