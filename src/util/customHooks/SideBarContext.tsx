import React, { createContext } from "react";

export const SideBarContext = createContext(null);

export type sideBarContextType = {
    toggleTextBox : () => void,
    toggleToolDoc: () => void,
    toggleApparatusInfo: () => void,
    toggleSkyBoxInfo : () => void,
    toolDoc: boolean,
    apparatusInfo: boolean,
    skyBoxInfo: boolean
};