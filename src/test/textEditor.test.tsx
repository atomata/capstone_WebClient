import { render } from "@testing-library/react";
import React from "react";
import SkyBoxInfo from "../components/Editor/SideBar/SkyBoxInfo";

test("ActionItem renders without crashing", () => {
  render(<SkyBoxInfo/>);
});


