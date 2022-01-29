/* eslint-disable react-hooks/rules-of-hooks */
import { render } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import Overlay from "../components/Overlay";
import { useActionList, useOverlay } from "../util/customHooks/overlayfunc";
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

test("Overlay renders without crashing", () => {
  render(<Overlay userId="testuser1" experienceData={undefined} />);
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
      result.current.addActionToList(
        actionData1,
        result.current.actionList,
        result.current.setActionList
      );
    });
    expect(result.current.actionList).toEqual(
      expect.arrayContaining([actionData1])
    );
  });

  it("removeActionFromList", () => {
    const { result } = renderHook(useActionList);

    const testValue = 1;
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
      result.current.removeActionFromList(
        testValue,
        result.current.actionList,
        result.current.setActionList
      );
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
      result.current.handleOnDragEnd(testresult1);
    });
    expect(result.current.actionList).toEqual(
        expect.arrayContaining([actionData1])
    );
  });
});
