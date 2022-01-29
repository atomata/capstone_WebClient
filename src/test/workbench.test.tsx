import { render } from "@testing-library/react";
import React from "react";
import {CreateExperience, LoadExperience} from "../components/Workbench";

test("workbench renders without crashing", () => {
  render(<CreateExperience />);
});

test("workbench renders without crashing", () => {
  render(<LoadExperience />);
});
