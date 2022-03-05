import { render } from "@testing-library/react";
import React from "react";
import ApparatusListBox from "../components/Editor/SideBar/ApparatusListBox";
import {testmetadata1} from "../util/testConstants";

test("ApparatusListBox renders without crashing", () => {
  render(
    <ApparatusListBox
      metadata={testmetadata1}
      handleAssetBundleChange={(index) => undefined}
    />
  );
});
