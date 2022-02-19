import { useContext } from "react";
import { SideBarContext } from "../../util/customHooks/SideBarContext";
import ApparatusInfo from "./ApparatusInfo";

function ToolDocItem(): JSX.Element {
  const {
    apparatusInfo,
  } = useContext(SideBarContext);
  return <div>{apparatusInfo ? <ApparatusInfo /> : <div />}</div>;
}

export default ToolDocItem;
