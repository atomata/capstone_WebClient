import { render } from "@testing-library/react";
import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { GlobalContext, globalContextTypes } from "../util/customHooks/globalContext";
import { ActionContext } from "../util/customHooks/actionContext";
import {testExperienceData} from "../util/testConstants";
import { useGuide } from "../util/customHooks/guideFunc";
import Guide from "../components/Editor/Guide";
import { SideBarContext, sideBarContextType } from "../util/customHooks/SideBarContext";
import {useActionBar} from "../util/customHooks/ActionBarFunc";

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

  const { result } = renderHook(() =>useActionBar());
  const sideBarContextValuesTest = {
    toggleTextBox : result.current.toggleTextBox,
    toggleToolDoc: result.current.toggleToolDoc,
    toggleApparatusInfo: result.current.toggleApparatusInfo,
    toggleSkyBoxInfo : result.current.toggleSkyBoxInfo,
    toggleOverlay : () => undefined,
    toggleGuide : result.current.toggleGuide,
    setGuideNum :  result.current.setGuideNum,
    toggleSavingTip: () => undefined,
    toolDoc: false,
    apparatusInfo: false,
    skyBoxInfo: false,
    showOverlay: false,
    savingTip: false,
    showGuide: false,
    guideNum: result.current.guideNum
  }

  const wrapper = ({ children }) => (
      <SideBarContext.Provider value={sideBarContextValuesTest}>{children}</SideBarContext.Provider>
  )
  it("Next Page", () => {
    const { result: result2 } = renderHook(() => useGuide(), { wrapper });
    act(() => {
      result2.current.nextPage();
    });
    expect(result.current.guideNum).toEqual(1);
  });

  it("Prev Page", () => {
    const { result: result2 } = renderHook(() => useGuide(), { wrapper });
    act(() => {
      result2.current.nextPage();
      result2.current.nextPage();
    });
    act(() => {
      result2.current.prevPage();
    });
    expect(result.current.guideNum).toEqual(1);
  });
});
