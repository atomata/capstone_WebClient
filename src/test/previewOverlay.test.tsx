import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useSelected } from "../util/customHooks/previewOverlayfunc";

import PreviewOverlay from "../components/PreviewOverlay";
import { useActionList } from "../util/customHooks/overlayfunc";
import { ActionData } from "../util/types";

test("previewOverlay renders without crashing", () => {
  const { result } = renderHook(useActionList);

  const actionData1: ActionData = {
    path: "test1",
    input: "testinput1",
    assetId: "testasset1",
  };
  const actionData2: ActionData = {
    path: "test2",
    input: "testinput2",
    assetId: "testasset2",
  };
  act(() => {
    result.current.addActionToList(
      actionData1,
      result.current.actionList,
      result.current.setActionList
    );
    result.current.addActionToList(
      actionData2,
      result.current.actionList,
      result.current.setActionList
    );
  });

  const testActionList = result.current.actionList;
  render(<PreviewOverlay actionList={testActionList} />);
});

describe("test use selected", () => {
  const actionData1: ActionData = {
    path: "test1",
    input: "testinput1",
    assetId: "testasset1",
  };
  const actionData2: ActionData = {
    path: "test2",
    input: "testinput2",
    assetId: "testasset2",
  };

  it("cyclePreviewRight", () => {
    const { result } = renderHook(useSelected, {
      initialProps: [actionData1, actionData2],
    });

    act(() => {
      result.current.setSelected(1);
      result.current.cyclePreviewRight();
    });

    expect(result.current.selected).toBe(1);
  });

  it("cyclePreviewLeft if selected = 0", () => {
    const { result } = renderHook(useSelected, {
      initialProps: [actionData1, actionData2],
    });

    act(() => {
      result.current.setSelected(0);
      result.current.cyclePreviewLeft();
    });
    expect(result.current.selected).toBe(0);
  });

  it("cyclePreviewLeft if selected > 0", () => {
    const { result } = renderHook(useSelected, {
      initialProps: [actionData1, actionData2],
    });

    act(() => {
      result.current.setSelected(1);
      result.current.cyclePreviewLeft();
    });
    expect(result.current.selected).toBe(0);
  });
});
