import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { useGuide } from "../util/customHooks/guideFunc";
import { SideBarContext } from "../util/customHooks/SideBarContext";
import {useActionBar} from "../util/customHooks/ActionBarFunc";

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
