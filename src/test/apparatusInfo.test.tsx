import { render } from "@testing-library/react";
import React from "react";
import ApparatusInfo from "../components/Editor/SideBar/ApparatusInfo";
import { testExperienceData } from "../util/testConstants";
import {
  globalContextTypes,
  GlobalContext,
} from "../util/customHooks/globalContext";
import { ActionContext } from "../util/customHooks/actionContext";

test("ApparatusInfo renders without crashing", () => {
  const globalContextValues: globalContextTypes = {
    experienceData: testExperienceData,
    setExperienceData: () => undefined,
    userId: "testuser1",
  };

  render(
    <GlobalContext.Provider value={globalContextValues}>
      <ActionContext.Provider value={{ addActionToList: () => undefined }}>
        <ApparatusInfo />
      </ActionContext.Provider>
    </GlobalContext.Provider>
  );
});
