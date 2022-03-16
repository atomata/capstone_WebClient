/* eslint-disable react-hooks/rules-of-hooks */
import { render } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import Overlay from "../components/Editor/Overlay";
import { useActionList, useOverlay } from "../util/customHooks/overlayfunc";
import { ActionData } from "../util/types";

const actionData1: ActionData = {
  path: "test1",
  input: {command:"testinput1", name:"", desc:""},
  assetId: "testasset1",
  desc: "This is the text added to action data in text box",
};
const actionData2: ActionData = {
  path: "test2",
  input: {command:"testinput2", name:"", desc:""},
  assetId: "testasset2",
  desc: "This is the text added to action data in text box",
};

test("Overlay renders without crashing", () => {
  render(<Overlay />);
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
