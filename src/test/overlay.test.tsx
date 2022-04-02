/* eslint-disable react-hooks/rules-of-hooks */
import { render } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import Overlay from "../components/Editor/Overlay";
import { useActionList, useOverlay } from "../util/customHooks/overlayfunc";
import { ActionData } from "../util/types";
import { useActionBar } from "../util/customHooks/actionBarFunc";
import {
  globalContextTypes,
  GlobalContext,
} from "../util/customHooks/globalContext";
import { testExperienceData } from "./testConstants";

const actionData1: ActionData = {
  path: "test1",
  input: { command: "testinput1", name: "", desc: "", enabled: true },
  assetId: "testasset1",
  desc: "This is the text added to action data in text box",
};
const actionData2: ActionData = {
  path: "test2",
  input: { command: "testinput2", name: "", desc: "", enabled: true },
  assetId: "testasset2",
  desc: "This is the text added to action data in text box",
};

test("Overlay renders without crashing", () => {
  const globalContextValues: globalContextTypes = {
    experienceData: testExperienceData,
    setExperienceData: () => undefined,
    userId: "testuser1",
  };
  render(
    <GlobalContext.Provider value={globalContextValues}>
      <Overlay />
    </GlobalContext.Provider>
  );
});

describe("showOverlay", () => {
  it("modify showOverlay from true to false", () => {
    const { result } = renderHook(useOverlay);

    act(() => {
      result.current.toggleOverlay();
    });

    expect(result.current.showOverlay).toBe(false);
  });
});

describe("ActionList", () => {
  it("addActionTolist", () => {
    const { result } = renderHook(useActionList);
    act(() => {
      result.current.addActionToList(actionData1);
    });
    expect(result.current.actionList).toEqual(
      expect.arrayContaining([actionData1])
    );
  });

  it("removeActionFromList", () => {
    const { result } = renderHook(useActionList);

    const testValue = 1;
    act(() => {
      result.current.addActionToList(actionData1);
      result.current.addActionToList(actionData2);
      result.current.removeActionFromList(testValue);
    });
    expect(result.current.actionList).toEqual(
      expect.arrayContaining([actionData1])
    );
  });

  it("handleOnDragEnd destination 0", () => {
    const { result } = renderHook(useActionList);
    act(() => {
      const testresult1 = {
        destination: { index: 0 },
        source: { index: 1 },
      };
      result.current.addActionToList(actionData1);
      result.current.addActionToList(actionData2);
      result.current.handleOnDragEnd(testresult1);
    });
    expect(result.current.actionList).toEqual(
      expect.arrayContaining([actionData1])
    );
  });

  it("handleOnDragEnd destination undefined", () => {
    const { result } = renderHook(useActionList);
    act(() => {
      const testresult1 = {
        destination: undefined,
        source: { index: 1 },
      };
      result.current.addActionToList(actionData1);
      result.current.addActionToList(actionData2);
      result.current.handleOnDragEnd(testresult1);
    });
    expect(result.current.actionList).toEqual(
      expect.arrayContaining([actionData1])
    );
  });
});

describe("ActionBar", () => {
  it("ToggleTextBox", () => {
    const { result } = renderHook(useActionBar);
    act(() => {
      result.current.toggleTextBox();
    });
    expect(result.current.textBox).toEqual(true);
  });

  it("ToggleSavingTip", () => {
    const { result } = renderHook(useActionBar);
    act(() => {
      result.current.toggleSavingTip();
    });
    expect(result.current.savingTip).toEqual(true);
  });

  it("ToggleSkybox 1 ", () => {
    const { result } = renderHook(useActionBar);
    act(() => {
      result.current.toggleToolDoc();
    });
    act(() => {
      result.current.toggleSkyBoxInfo();
    });
    expect(result.current.skyBoxInfo).toEqual(true);
  });

  it("ToggleSkybox 2 ", () => {
    const { result } = renderHook(useActionBar);
    act(() => {
      result.current.toggleSkyBoxInfo();
    });
    expect(result.current.skyBoxInfo).toEqual(true);
  });

  it("ToggleSkybox 3 ", () => {
    const { result } = renderHook(useActionBar);
    act(() => {
      result.current.toggleSkyBoxInfo();
    });
    act(() => {
      result.current.toggleSkyBoxInfo();
    });
    expect(result.current.skyBoxInfo).toEqual(false);
  });

  it("ToggleToolDoc", () => {
    const { result } = renderHook(useActionBar);
    act(() => {
      result.current.toggleToolDoc();
    });
    expect(result.current.toolDoc).toEqual(false);
  });

  it("ToggleApparatusInfo 1", () => {
    const { result } = renderHook(useActionBar);
    act(() => {
      result.current.toggleToolDoc();
    });
    act(() => {
      result.current.toggleApparatusInfo();
    });
    expect(result.current.apparatusInfo).toEqual(true);
  });

  it("ToggleApparatusInfo 2", () => {
    const { result } = renderHook(useActionBar);
    act(() => {
      result.current.toggleApparatusInfo();
    });
    expect(result.current.apparatusInfo).toEqual(false);
  });

  it("ToggleApparatusInfo 3", () => {
    const { result } = renderHook(useActionBar);
    act(() => {
      result.current.toggleApparatusInfo();
    });
    act(() => {
      result.current.toggleToolDoc();
    });
    act(() => {
      result.current.toggleApparatusInfo();
    });
    expect(result.current.apparatusInfo).toEqual(true);
  });
});
