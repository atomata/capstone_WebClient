import { createContext } from "react";
import { ActionData } from "../types";

export const ActionContext = createContext(null);

// type for Context Values
export type actionContextTypes = {
  selectedAction: number;
  actionList: ActionData[];
  setSelectedAction: (index: number) => void;
  removeActionFromList: (index: number) => void;
  setDescription: (description: string) => void;
  handleOnDragEnd: (result: {
    destination: { index: number };
    source: { index: number };
  }) => void;
  addActionToList: (actionData: ActionData) => void;
};
