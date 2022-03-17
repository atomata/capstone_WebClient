import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import TextEditor from "../components/Editor/TextEditor";
import { ActionContext } from "../util/customHooks/actionContext";

test("Text editor renders without crashing", () => {
  render(
    <ActionContext.Provider value={{ addActionToList: () => undefined }}>
      <TextEditor />
    </ActionContext.Provider>
  );
  const button = screen.getByText("ADD/EDIT DESCRIPTION");
  fireEvent.click(button);
});
