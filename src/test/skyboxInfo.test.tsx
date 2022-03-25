import { render } from "@testing-library/react";
import React from "react";
import SkyBoxInfo from "../components/Editor/SideBar/SkyBoxInfo";
import {GlobalContext, globalContextTypes} from "../util/customHooks/globalContext";
import {testExperienceData} from "../util/testConstants";

test("Skybox renders without crashing", () => {
  const globalContextValues: globalContextTypes = {
    experienceData : testExperienceData,
    setExperienceData: ()=> undefined,
    userId:"testuser1",
  };
  render(
      <GlobalContext.Provider value={globalContextValues}>
        <SkyBoxInfo />
      </GlobalContext.Provider>
  );
});


