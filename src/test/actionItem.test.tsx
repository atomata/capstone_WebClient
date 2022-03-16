import { render } from "@testing-library/react";
import React from "react";
import ActionItem from "../components/Editor/TreeView/ActionItem";

test("ActionItem renders without crashing", () => {
  render(<ActionItem labelText="TestItem" nodeId="Test" />);
});

test("ActionItem renders without crashing with undefined LabelText", () => {
  render(<ActionItem labelText={undefined} nodeId="Test" />);
});
