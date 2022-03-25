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
      setSkyBoxInfo(false);
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
  const [skyBoxInfo, setSkyBoxInfo] = useState(false);
  const toggleSkyBoxInfo = () => {
    if (toolDoc === false) {
      toggleToolDoc();
      setApparatusInfo(false);
      setSkyBoxInfo(true);
    } else if (toolDoc === true && skyBoxInfo === false) {
      setApparatusInfo(false);
      setSkyBoxInfo(true);
    } else if (toolDoc === true && skyBoxInfo === true) {
      toggleToolDoc();
      setApparatusInfo(false);
      setSkyBoxInfo(false);
    }
  };

  // hook for showing or not sky box setting
  const [textBox, setTextBox] = useState(false);
  const toggleTextBox = () => {
    setTextBox((v) => !v);
  };

  // hook for the saving tip
  const [savingTip, setSavingTip] = useState(false);
  const toggleSavingTip = () =>{
    setSavingTip((v) => !v);
  };

  // hook for the saving tip
  const [showGuide, setShowGuide] = useState(false);
  const toggleGuide = () =>{
    setShowGuide((v) => !v);
  };

  const [ guideNum, setGuideNum ] = useState(0);

  return {
    toggleTextBox,
    toggleToolDoc,
    toggleApparatusInfo,
    toggleSkyBoxInfo,
    toggleGuide,
    toggleSavingTip,
    savingTip,
    textBox,
    toolDoc,
    apparatusInfo,
    skyBoxInfo,
    showGuide,
    guideNum,
    setSavingTip,
    setToolDoc,
    setApparatusInfo,
    setSkyBoxInfo,
    setGuideNum
  };
};
export { useActionBar };
