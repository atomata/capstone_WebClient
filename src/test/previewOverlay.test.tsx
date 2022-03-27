import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import React from "react";
import { useSelected } from "../util/customHooks/previewOverlayfunc";

import PreviewOverlay from "../components/PreviewOverlay";
import { useActionList } from "../util/customHooks/overlayfunc";
import { ActionData } from "../util/types";
import { convertPathDataToTree } from "../util/jsonParsing";
import { testExperienceData, testmetadata1 } from "../util/testConstants";
import {
  GlobalContext,
  globalContextTypes,
} from "../util/customHooks/globalContext";
import { SideBarContext } from "../util/customHooks/SideBarContext";
import { ActionContext } from "../util/customHooks/actionContext";

const actionData1: ActionData = {
  path: "test1",
  input: {
    command: "testinput1",
    name: undefined,
    desc: undefined,
    enabled: true,
  },
  assetId: "testasset1",
  desc: "Test description",
};
const actionData2: ActionData = {
  path: "test2",
  input: {
    command: "testinput2",
    name: undefined,
    desc: undefined,
    enabled: true,
  },
  assetId: "testasset2",
  desc: "Test description",
};

const testList = [actionData1, actionData2];
test("previewOverlay renders without crashing", () => {
  const globalContextValues: globalContextTypes = {
    experienceData: testExperienceData,
    setExperienceData: () => undefined,
    userId: "testuser1",
  };
  const { result } = renderHook(useActionList);
  act(() => {
    result.current.addActionToList(actionData1);
    result.current.addActionToList(actionData2);
  });
  render(
    <GlobalContext.Provider value={globalContextValues}>
      <SideBarContext.Provider value={{ toggleTextBox: () => undefined }}>
        <ActionContext.Provider value={{ addActionToList: () => undefined }}>
          <PreviewOverlay />
        </ActionContext.Provider>
      </SideBarContext.Provider>
    </GlobalContext.Provider>
  );
});

describe("test useselected hook", () => {
  it("cyclePreviewRight = length-1", () => {
    const { result } = renderHook(useSelected, {
      initialProps: {
        actionList: testList,
        apparatusRoot: convertPathDataToTree(testmetadata1),
      },
    });
    expect(result.current.selected).toBe(-1);

    act(() => {
      result.current.cyclePreviewRight();
    });

    expect(result.current.selected).toBe(0);
  });

  it("cyclePreviewRight < length-1", () => {
    const { result } = renderHook(useSelected, {
      initialProps: {
        actionList: testList,
        apparatusRoot: convertPathDataToTree(testmetadata1),
      },
    });
    act(() => {
      result.current.cyclePreviewRight();
    });
    act(() => {
      result.current.cyclePreviewRight();
    });
    expect(result.current.selected).toBe(1);
  });

  it("cyclePreviewRight = length-1", () => {
    const { result } = renderHook(useSelected, {
      initialProps: {
        actionList: testList,
        apparatusRoot: convertPathDataToTree(testmetadata1),
      },
    });
    act(() => {
      result.current.cyclePreviewRight();
    });
    act(() => {
      result.current.cyclePreviewRight();
    });
    act(() => {
      result.current.cyclePreviewRight();
    });
    expect(result.current.selected).toBe(-1);
  });

  it("cyclePreviewLeft if selected = -1", () => {
    const { result } = renderHook(useSelected, {
      initialProps: {
        actionList: testList,
        apparatusRoot: convertPathDataToTree(testmetadata1),
      },
    });
    act(() => {
      result.current.cyclePreviewLeft();
    });

    expect(result.current.selected).toBe(-1);
  });

  it("cyclePreviewLeft if selected > 0", () => {
    const { result } = renderHook(useSelected, {
      initialProps: {
        actionList: testList,
        apparatusRoot: convertPathDataToTree(testmetadata1),
      },
    });
    act(() => {
      result.current.cyclePreviewRight();
    });
    act(() => {
      result.current.cyclePreviewRight();
    });
    act(() => {
      result.current.cyclePreviewLeft();
    });

    expect(result.current.selected).toBe(0);
  });
});
