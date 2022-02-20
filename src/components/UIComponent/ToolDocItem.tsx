import { useContext } from "react";
import { SideBarContext } from "../../util/customHooks/SideBarContext";
import ApparatusInfo from "./ApparatusInfo";
import SkyBoxInfo from "./SkyBoxInfo";

function ToolDocItem(): JSX.Element {
  const {
    apparatusInfo,
    skyboxInfo,
  } = useContext(SideBarContext);
  return <div>{apparatusInfo ? <ApparatusInfo /> : <div />}
  {skyboxInfo? <SkyBoxInfo /> : <div />}
  </div>;
}

export default ToolDocItem;
