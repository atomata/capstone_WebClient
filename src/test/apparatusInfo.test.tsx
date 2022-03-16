import { render } from "@testing-library/react";
import React from "react";
import ApparatusInfo from "../components/Editor/SideBar/ApparatusInfo";

test("ApparatusListBox renders without crashing", () => {
  render(<ApparatusInfo />);
});
