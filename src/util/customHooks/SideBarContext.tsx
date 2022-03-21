import React, { createContext } from "react";

export const SideBarContext = createContext(null);

export type sideBarContextType = {
    toggleTextBox : () => void,
    toggleToolDoc: () => void,
    toggleApparatusInfo: () => void,
    toggleSkyBoxInfo : () => void,
    toggleOverlay : () => void,
    toggleGuide : () => void,
    setGuideNum : () => void,
    toggleSavingTip: () =>void,
    toolDoc: boolean,
    apparatusInfo: boolean,
    skyBoxInfo: boolean,
    showOverlay: boolean,
    savingTip: boolean,
    showGuide: boolean,
    guideNum: number
};