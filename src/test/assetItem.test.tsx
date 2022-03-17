import { render } from "@testing-library/react";
import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import AssetItem from "../components/Editor/TreeView/AssetItem";

test("ActionItem renders without crashing", () => {
  render(<AssetItem labelText="TestItem" nodeId="Test" LabelIcon={CategoryIcon} />);
});

test("ActionItem renders without crashing with undefined LabelText", () => {
  render(<AssetItem labelText={undefined} nodeId="Test" LabelIcon={CategoryIcon} />);
});
