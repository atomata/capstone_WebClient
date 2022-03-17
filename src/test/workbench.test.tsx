import { render } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import React from "react";
import {CreateExperience, LoadExperience} from "../components/Workbench";
import {useDeleteDialog, useWorkbench} from "../util/customHooks/workbenchFunc";

describe("test creating experience", () => {
  let r;
  let count = 0;
  const errInputs = ["", "good"];

  beforeEach(() => {
    const { result } = renderHook(useWorkbench);
    r = result;
    act(() => {
      result.current.handleExperienceCreate(undefined, errInputs[count]);
    });
    count += 1;
  });

  it("empty experience name", () => {
    expect(r.current.expErr).toBe("Experience name cannot be empty");
  });

  it("valid experience name", () => {
    expect(r.current.expErr).toBe("");
  });
});

describe("test use delete dialog", () => {
  it("open dialog", () => {
    const {result} = renderHook(useDeleteDialog);

    act(() => {
      result.current.handleDeleteDialogOpen(0,"testexp1");
    });

    expect(result.current.delExpName).toBe("testexp1");
    expect(result.current.delIndex).toBe(0);
    expect(result.current.delOpen).toBe(true);
  });

  it("close dialog", () => {
    const {result} = renderHook(useDeleteDialog);

    act(() => {
      result.current.handleDeleteDialogClose();
    });
    expect(result.current.delOpen).toBe(false);
  });
});

test("workbench create experience renders without crashing", () => {
  render(<CreateExperience />);
});

test("workbench load experience renders without crashing", () => {
  render(<LoadExperience />);
});

