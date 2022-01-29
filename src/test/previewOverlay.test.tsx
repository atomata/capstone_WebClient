import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useSelected } from "../util/customHooks/previewOverlayfunc";

import PreviewOverlay from "../components/PreviewOverlay";
import { useActionList } from "../util/customHooks/overlayfunc";
import { ActionData } from "../util/types";

const actionData1: ActionData = {
  path: "test1",
  input: "testinput1",
  assetId: "testasset1",
  name: "test1",
};
const actionData2: ActionData = {
  path: "test2",
  input: "testinput2",
  assetId: "testasset2",
  name: "test2",
};

const testList = [actionData1, actionData2];
test("previewOverlay renders without crashing", () => {
  const { result } = renderHook(useActionList);
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
  it("cyclePreviewRight = length-1", () => {
    const { result } = renderHook(useSelected, {
      initialProps: testList,
    });
    expect(result.current.selected).toBe(0);

    act(() => {
      result.current.setSelected(1);
    });
    act(() => {
      result.current.cyclePreviewRight();
    });

    expect(result.current.selected).toBe(1);
  });

  it("cyclePreviewRight < length-1", () => {
    const { result } = renderHook(useSelected, {
      initialProps: testList,
    });
    act(() => {
      result.current.setSelected(0);
    });
    act(() => {
      result.current.cyclePreviewRight();
    });
    expect(result.current.selected).toBe(1);
  });

  it("cyclePreviewLeft if selected = 0", () => {
    const { result } = renderHook(useSelected, {
      initialProps: testList,
    });
    act(() => {
      result.current.setSelected(0);
    });
    act(() => {
      result.current.cyclePreviewLeft();
    });

    expect(result.current.selected).toBe(0);
  });

  it("cyclePreviewLeft if selected > 0", () => {
    const { result } = renderHook(useSelected, {
      initialProps: testList,
    });
    act(() => {
      result.current.setSelected(1);
    });

    act(() => {
      result.current.cyclePreviewLeft();
    });
    expect(result.current.selected).toBe(0);
  });
});
