import { render } from "@testing-library/react";
import React, { useContext } from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { GlobalContext, globalContextTypes } from "../util/customHooks/globalContext";
import { ActionContext } from "../util/customHooks/actionContext";
import {testExperienceData} from "../util/testConstants";
import { useGuide } from "../util/customHooks/guideFunc";
import Guide from "../components/Editor/Guide";
import { SideBarContext, sideBarContextType } from "../util/customHooks/SideBarContext";

const sideBarContextValues: sideBarContextType = {
  toggleTextBox : () => undefined,
  toggleToolDoc: () => undefined,
  toggleApparatusInfo: () => undefined,
  toggleSkyBoxInfo : () => undefined,
  toggleOverlay : () => undefined,
  toggleGuide : () => undefined,
  setGuideNum : () => undefined,
  toggleSavingTip: () => undefined,
  toolDoc: false,
  apparatusInfo: false,
  skyBoxInfo: false,
  showOverlay: false,
  savingTip: false,
  showGuide: false,
  guideNum: 0
}

test("Guide renders without crashing", () => {
  const globalContextValues: globalContextTypes = {
    experienceData : testExperienceData,
    setExperienceData: ()=> undefined,
    userId:"testuser1",
  };

  render(
    <GlobalContext.Provider value={globalContextValues}>
      <ActionContext.Provider value={{ addActionToList: () => undefined }}>
        <SideBarContext.Provider value={sideBarContextValues}>
          <Guide />
        </SideBarContext.Provider>
      </ActionContext.Provider>
    </GlobalContext.Provider>
  );
});

describe("Guide Funcs", () => {
  it("Next Page", () => {
    const { result } = renderHook(useGuide);
    act(() => {
      result.current.nextPage();
    });
    expect(result.current.guideNum).toEqual(2);
  });
});