import { useState } from "react";

const useActionBar = () => {
  // hook for showing or not side bar
  const [tooDoc, setToolDoc] = useState(true);
  const toggleToolDoc = () => {
    setToolDoc((v) => !v);
    setApparatusInfo(false);
  };

  // hook for showing or not action list
  const [apparatusInfo, setApparatusInfo] = useState(true);
  const toggleApparatusInfo = () => {
    if (tooDoc === false) {
      toggleToolDoc();
      setApparatusInfo(true);
    } else if (tooDoc === true && apparatusInfo === false) {
      setApparatusInfo(true);
    } else if (tooDoc === true && apparatusInfo === true) {
      toggleToolDoc();
      setApparatusInfo(false);
    }
  };

  return {
    toggleToolDoc,
    toggleApparatusInfo,
    tooDoc,
    apparatusInfo,
    setToolDoc,
    setApparatusInfo,
  };
};
export { useActionBar };
