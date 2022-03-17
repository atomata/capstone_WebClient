import { render } from "@testing-library/react";
import React from "react";
import WebglBox from "../components/Editor/WebglBox";
import {GlobalContext, globalContextTypes} from "../util/customHooks/globalContext";
import {testExperienceData} from "../util/testConstants";


test("WebglBox renders without crashing", () => {
  const globalContextValues: globalContextTypes = {
    experienceData : testExperienceData,
    setExperienceData: ()=> undefined,
    userId:"testuser1",
  };
  render(
      <GlobalContext.Provider value={globalContextValues}>
        <WebglBox />
      </GlobalContext.Provider>
  );
});
