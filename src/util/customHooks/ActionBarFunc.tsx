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
    } else if (toolDoc === true && apparatusInfo === false) {
      setApparatusInfo(true);
    } else if (toolDoc === true && apparatusInfo === true) {
      toggleToolDoc();
      setApparatusInfo(false);
    }
  };

  return {
    toggleToolDoc,
    toggleApparatusInfo,
    toolDoc,
    apparatusInfo,
    setToolDoc,
    setApparatusInfo,
  };
};
export { useActionBar };
