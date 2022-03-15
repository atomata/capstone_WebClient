import React, { createContext } from "react";

export const SideBarContext = createContext(null);

export type sideBarContextType = {
    toggleTextBox : () => void,
    toggleToolDoc: () => void,
    toggleApparatusInfo: () => void,
    toggleSkyBoxInfo : () => void,
    toggleOverlay : () => void,
    toggleSavingTip: () =>void,
    toolDoc: boolean,
    apparatusInfo: boolean,
    skyBoxInfo: boolean,
    showOverlay: boolean,
    savingTip: boolean,
};