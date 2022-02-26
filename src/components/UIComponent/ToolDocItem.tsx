import { useContext } from "react";
import { SideBarContext } from "../../util/customHooks/SideBarContext";
import { ActionData} from "../../util/types";
import ApparatusInfo from "./ApparatusInfo";
import SkyBoxInfo from "./SkyBoxInfo";

type ToolDocItemProps = {
  addActionToList: (actionData: ActionData) => void;
  removeAction: (index: number) => void;
};

function ToolDocItem(): JSX.Element {
  const { apparatusInfo, skyboxInfo } = useContext(SideBarContext);
  return (
    <div>
      {apparatusInfo ? (
        <ApparatusInfo/>
      ) : (
        <div />
      )}
      {skyboxInfo ? <SkyBoxInfo /> : <div />}
    </div>
  );
}

export default ToolDocItem;
