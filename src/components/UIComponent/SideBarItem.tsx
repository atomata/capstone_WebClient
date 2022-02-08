import { useContext } from "react";
import { SideBarContext } from "../../util/customHooks/SideBarContext";
import ActionList from "./ActionList";

function SideBarItem(): JSX.Element {
  const {
    sideBar,
    setSideBar,
    actionList,
    setActionList,
    toggleActionList,
    toggleSideBar,
  } = useContext(SideBarContext);
  return (
      <div>
      {actionList? (<ActionList />):<div/> }


      </div>

  );
}

export default SideBarItem;
