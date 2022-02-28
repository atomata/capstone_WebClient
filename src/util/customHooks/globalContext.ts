import React, {createContext} from "react";
import {ActionData, ExperienceData} from "../types";

export const GlobalContext = createContext(null);

// type for Context Values
export type globalContextTypes = {
    experienceData: ExperienceData;
    setExperienceData: React.Dispatch<React.SetStateAction<ExperienceData>>;
    selectedAction: number;
    actionList: ActionData[];
    setSelectedAction: (index: number) => void
    removeActionFromList: (index: number) => void;
    setDescription: (description: string) => void;
    handleOnDragEnd: (result: {
        destination: { index: number };
        source: { index: number };
    }) => void;
    addActionToList: (actionData: ActionData) => void;
    userId: string;
};