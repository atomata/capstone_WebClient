import { useContext } from "react";
import { SideBarContext } from "../../util/customHooks/SideBarContext";
import { ActionData, ExperienceData } from "../../util/types";
import ApparatusInfo from "./ApparatusInfo";
import SkyBoxInfo from "./SkyBoxInfo";

type ToolDocItemProps = {
  addActionToList: (actionData: ActionData) => void;
  removeAction: (index: number) => void;
};

function ToolDocItem({
  addActionToList, removeAction
}: ToolDocItemProps): JSX.Element {
  const { apparatusInfo, skyboxInfo } = useContext(SideBarContext);
  return (
    <div>
      {apparatusInfo ? (
        <ApparatusInfo
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
