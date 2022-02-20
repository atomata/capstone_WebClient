import { render } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import React from "react";
import {CreateExperience, LoadExperience} from "../components/Workbench";
import { useWorkbench } from "../util/customHooks/workbenchFunc";

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

test("workbench renders without crashing", () => {
  render(<CreateExperience />);
});

test("workbench renders without crashing", () => {
  render(<LoadExperience />);
});



