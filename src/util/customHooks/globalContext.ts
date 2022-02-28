import React, {createContext} from "react";
import {ExperienceData} from "../types";

export const GlobalContext = createContext(null);

// type for Context Values
export type globalContextTypes = {
    experienceData: ExperienceData;
    setExperienceData: React.Dispatch<React.SetStateAction<ExperienceData>>;
    userId: string;
};