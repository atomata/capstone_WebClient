import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
import { useGuide } from "../util/customHooks/guideFunc";
import { SideBarContext } from "../util/customHooks/SideBarContext";
import { useActionBar } from "../util/customHooks/ActionBarFunc";

describe("Guide Funcs", () => {
  it("key down", () => {
    const { result } = renderHook(() => useActionBar());
    const sideBarContextValuesTest = {
      toggleTextBox: result.current.toggleTextBox,
      toggleToolDoc: result.current.toggleToolDoc,
      toggleApparatusInfo: result.current.toggleApparatusInfo,
      toggleSkyBoxInfo: result.current.toggleSkyBoxInfo,
      toggleOverlay: () => undefined,
      toggleGuide: result.current.toggleGuide,
      setGuideNum: result.current.setGuideNum,
      toggleSavingTip: () => undefined,
      toolDoc: false,
      apparatusInfo: false,
      skyBoxInfo: false,
      showOverlay: false,
      savingTip: false,
      showGuide: true,
      guideNum: result.current.guideNum,
    };

    const wrapper = ({ children }) => (
      <SideBarContext.Provider value={sideBarContextValuesTest}>
        {children}
      </SideBarContext.Provider>
    );
    renderHook(() => useGuide(), { wrapper });
    fireEvent.keyDown(window, { key: "ArrowLeft", code: "ArrowLeft" });
    fireEvent.keyDown(window, { key: "ArrowRight", code: "ArrowRight" });
    fireEvent.keyDown(window, { key: "ArrowUp", code: "ArrowUp" });
    fireEvent.keyDown(window, { key: "ArrowDown", code: "ArrowDown" });
  });
  it("Next Page", () => {
    const { result } = renderHook(() => useActionBar());
    const sideBarContextValuesTest = {
      toggleTextBox: result.current.toggleTextBox,
      toggleToolDoc: result.current.toggleToolDoc,
      toggleApparatusInfo: result.current.toggleApparatusInfo,
      toggleSkyBoxInfo: result.current.toggleSkyBoxInfo,
      toggleOverlay: () => undefined,
      toggleGuide: result.current.toggleGuide,
      setGuideNum: result.current.setGuideNum,
      toggleSavingTip: () => undefined,
      toolDoc: false,
      apparatusInfo: false,
      skyBoxInfo: false,
      showOverlay: false,
      savingTip: false,
      showGuide: false,
      guideNum: result.current.guideNum,
    };

    const wrapper = ({ children }) => (
      <SideBarContext.Provider value={sideBarContextValuesTest}>
        {children}
      </SideBarContext.Provider>
    );
    const { result: result2 } = renderHook(() => useGuide(), { wrapper });
    act(() => {
      result2.current.nextPage();
    });
    expect(result.current.guideNum).toEqual(1);
  });

  it("Prev Page", () => {
    const { result } = renderHook(() => useActionBar());
    const sideBarContextValuesTest = {
      toggleTextBox: result.current.toggleTextBox,
      toggleToolDoc: result.current.toggleToolDoc,
      toggleApparatusInfo: result.current.toggleApparatusInfo,
      toggleSkyBoxInfo: result.current.toggleSkyBoxInfo,
      toggleOverlay: () => undefined,
      toggleGuide: result.current.toggleGuide,
      setGuideNum: result.current.setGuideNum,
      toggleSavingTip: () => undefined,
      toolDoc: false,
      apparatusInfo: false,
      skyBoxInfo: false,
      showOverlay: false,
      savingTip: false,
      showGuide: false,
      guideNum: result.current.guideNum,
    };

    const wrapper = ({ children, val }) => (
      <SideBarContext.Provider value={val}>{children}</SideBarContext.Provider>
    );
    const { result: result2, rerender } = renderHook(() => useGuide(), {
      wrapper,
      initialProps: {
        val: sideBarContextValuesTest,
      },
    });
    act(() => {
      result2.current.nextPage();
      result2.current.nextPage();
      result2.current.nextPage();
    });
    rerender({
      val: {
        toggleTextBox: result.current.toggleTextBox,
        toggleToolDoc: result.current.toggleToolDoc,
        toggleApparatusInfo: result.current.toggleApparatusInfo,
        toggleSkyBoxInfo: result.current.toggleSkyBoxInfo,
        toggleOverlay: () => undefined,
        toggleGuide: result.current.toggleGuide,
        setGuideNum: result.current.setGuideNum,
        toggleSavingTip: () => undefined,
        toolDoc: false,
        apparatusInfo: false,
        skyBoxInfo: false,
        showOverlay: false,
        savingTip: false,
        showGuide: false,
        guideNum: result.current.guideNum,
      },
    });
    act(() => {
      result2.current.prevPage();
    });

    expect(result.current.guideNum).toEqual(2);
  });

  it("Page = 4", () => {
    const { result } = renderHook(() => useActionBar());
    const sideBarContextValuesTest = {
      toggleTextBox: result.current.toggleTextBox,
      toggleToolDoc: result.current.toggleToolDoc,
      toggleApparatusInfo: result.current.toggleApparatusInfo,
      toggleSkyBoxInfo: result.current.toggleSkyBoxInfo,
      toggleOverlay: () => undefined,
      toggleGuide: result.current.toggleGuide,
      setGuideNum: result.current.setGuideNum,
      toggleSavingTip: () => undefined,
      toolDoc: false,
      apparatusInfo: false,
      skyBoxInfo: false,
      showOverlay: false,
      savingTip: false,
      showGuide: false,
      guideNum: result.current.guideNum,
    };

    const wrapper = ({ children, val }) => (
      <SideBarContext.Provider value={val}>{children}</SideBarContext.Provider>
    );
    const { result: result2, rerender } = renderHook(() => useGuide(), {
      wrapper,
      initialProps: {
        val: sideBarContextValuesTest,
      },
    });
    act(() => {
      result2.current.nextPage();
      result2.current.nextPage();
      result2.current.nextPage();
    });
    rerender({
      val: {
        toggleTextBox: result.current.toggleTextBox,
        toggleToolDoc: result.current.toggleToolDoc,
        toggleApparatusInfo: result.current.toggleApparatusInfo,
        toggleSkyBoxInfo: result.current.toggleSkyBoxInfo,
        toggleOverlay: () => undefined,
        toggleGuide: result.current.toggleGuide,
        setGuideNum: result.current.setGuideNum,
        toggleSavingTip: () => undefined,
        toolDoc: false,
        apparatusInfo: false,
        skyBoxInfo: false,
        showOverlay: false,
        savingTip: false,
        showGuide: false,
        guideNum: result.current.guideNum,
      },
    });
    act(() => {
      result2.current.nextPage();
    });

    expect(result.current.guideNum).toEqual(4);
  });
  it("Page = 5", () => {
    const { result } = renderHook(() => useActionBar());
    const sideBarContextValuesTest = {
      toggleTextBox: result.current.toggleTextBox,
      toggleToolDoc: result.current.toggleToolDoc,
      toggleApparatusInfo: result.current.toggleApparatusInfo,
      toggleSkyBoxInfo: result.current.toggleSkyBoxInfo,
      toggleOverlay: () => undefined,
      toggleGuide: result.current.toggleGuide,
      setGuideNum: result.current.setGuideNum,
      toggleSavingTip: () => undefined,
      toolDoc: false,
      apparatusInfo: false,
      skyBoxInfo: false,
      showOverlay: false,
      savingTip: false,
      showGuide: false,
      guideNum: result.current.guideNum,
    };

    const wrapper = ({ children, val }) => (
      <SideBarContext.Provider value={val}>{children}</SideBarContext.Provider>
    );
    const { result: result2, rerender } = renderHook(() => useGuide(), {
      wrapper,
      initialProps: {
        val: sideBarContextValuesTest,
      },
    });
    act(() => {
      result2.current.nextPage();
      result2.current.nextPage();
      result2.current.nextPage();
      result2.current.nextPage();
    });
    rerender({
      val: {
        toggleTextBox: result.current.toggleTextBox,
        toggleToolDoc: result.current.toggleToolDoc,
        toggleApparatusInfo: result.current.toggleApparatusInfo,
        toggleSkyBoxInfo: result.current.toggleSkyBoxInfo,
        toggleOverlay: () => undefined,
        toggleGuide: result.current.toggleGuide,
        setGuideNum: result.current.setGuideNum,
        toggleSavingTip: () => undefined,
        toolDoc: false,
        apparatusInfo: false,
        skyBoxInfo: false,
        showOverlay: false,
        savingTip: false,
        showGuide: false,
        guideNum: result.current.guideNum,
      },
    });
    act(() => {
      result2.current.nextPage();
    });

    expect(result.current.guideNum).toEqual(5);
  });
});
