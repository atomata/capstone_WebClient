import { useState } from "react";

const useActionBar = () => {
  // hook for showing or not side bar
  const [sideBar, setSideBar] = useState(true);
  const toggleSideBar = () => {
    setSideBar((v) => !v);
    setActionList(false);
  };

  // hook for showing or not action list
  const [actionList, setActionList] = useState(true);
  const toggleActionList = () => {
    if (sideBar === false){
        toggleSideBar();
        setActionList(true);
    } else if (sideBar === true && actionList === false){
        setActionList(true)
    } else if (sideBar === true && actionList === true){
        toggleSideBar();
        setActionList(false);
    }
  };

  return {toggleSideBar, toggleActionList, sideBar, actionList}
};

export {useActionBar}