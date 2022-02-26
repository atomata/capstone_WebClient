import { useState } from "react";

const useActionBar = () => {
  // hook for showing or not side bar
  const [toolDoc, setToolDoc] = useState(true);
  const toggleToolDoc = () => {
    setToolDoc((v) => !v);
    setApparatusInfo(false);
  };

  // hook for showing or not action list
  const [apparatusInfo, setApparatusInfo] = useState(true);
  const toggleApparatusInfo = () => {
    if (toolDoc === false) {
      toggleToolDoc();
      setApparatusInfo(true);
      setSkyBoxInfo(false)
    } else if (toolDoc === true && apparatusInfo === false) {
      setApparatusInfo(true);
      setSkyBoxInfo(false);
    } else if (toolDoc === true && apparatusInfo === true) {
      toggleToolDoc();
      setApparatusInfo(false);
      setSkyBoxInfo(false);
    }
  };

  // hook for showing or not sky box setting
  const [skyboxInfo, setSkyBoxInfo] = useState(false);
  const toggleSkyBoxInfo = () => {
    if(toolDoc === false){
      toggleToolDoc();
      setApparatusInfo(false);
      setSkyBoxInfo(true);
    } else if (toolDoc === true && skyboxInfo === false){
      setApparatusInfo(false);
      setSkyBoxInfo(true);
    } else if (toolDoc === true && skyboxInfo === true){
      toggleToolDoc();
      setApparatusInfo(false);
      setSkyBoxInfo(false);
    }
  } 

  return {
    toggleToolDoc,
    toggleApparatusInfo,
    toggleSkyBoxInfo,
    toolDoc,
    apparatusInfo,
    skyboxInfo,
    setToolDoc,
    setApparatusInfo,
    setSkyBoxInfo,
  };
};
export { useActionBar };
