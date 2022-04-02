import { render } from "@testing-library/react";
import React from "react";
import TextEditor from "../components/Editor/TextEditor";
import { ActionContext } from "../util/customHooks/actionContext";
import { SideBarContext } from "../util/customHooks/sideBarContext";

test("Text editor renders without crashing", () => {
  render(
    <SideBarContext.Provider value={{ toggleTextBox: () => undefined }}>
      <ActionContext.Provider value={{ addActionToList: () => undefined }}>
        <TextEditor />
      </ActionContext.Provider>
    </SideBarContext.Provider>
  );
});
