import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import {
  useSelected,
} from "../util/previewOverlayFun/previewOverlayfunc";

import PreviewOverlay from "../components/previewOverlay/PreviewOverlay";
import { useActionList } from "../util/overlayfunc/overlayfunc";

test("previewOverlay renders without crashing", () => {
  const { result } = renderHook(useActionList);

  const testTuple: [string, string, string] = [
    "test1",
    "testinput2",
    "testasset3",
  ];
  const testTuple2: [string, string, string] = [
    "test4",
    "testinput5",
    "testasset6",
  ];
  act(() => {
    result.current.addActionToList(
      testTuple,
      result.current.actionList,
      result.current.setActionList
    );
    result.current.addActionToList(
      testTuple2,
      result.current.actionList,
      result.current.setActionList
    );
  });

  const testActionList = result.current.actionList;
  render(<PreviewOverlay actionList={testActionList} />);
});

describe("test use selected", () => {

  it("cyclePreviewRight", () => {
    const { result } = renderHook(useSelected, {
      initialProps: {
        actionList: [
          ["test1", "testinput2", "testasset3"],
          ["test4", "testinput5", "testasset6"],
        ],
      },
    });

    act(() => {
      result.current.setCount(0);
      result.current.cyclePreviewRight();
    });

    expect(result.current.selected).toBe(1);
  });

  it("cyclePreviewLeft if selected = 0", () => {
    const { result } = renderHook(useSelected, {
      initialProps: {
        actionList: [
          ["test1", "testinput2", "testasset3"],
          ["test4", "testinput5", "testasset6"],
        ],
      },
    });

    act(() => {
      result.current.setCount(0);
      result.current.cyclePreviewLeft();
    });
    expect(result.current.selected).toBe(0);
  });

  it("cyclePreviewLeft if selected > 0", () => {
    const { result } = renderHook(useSelected, {
      initialProps: {
        actionList: [
          ["test1", "testinput2", "testasset3"],
          ["test4", "testinput5", "testasset6"],
        ],
      },
    });

    act(() => {
      result.current.setCount(1);
      result.current.cyclePreviewLeft();
    });
    expect(result.current.cyclePreviewLeft().setCount(0)).toBe(0);
  });
});
