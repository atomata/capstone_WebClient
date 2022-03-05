import { render } from "@testing-library/react";
import React from "react";
import ActionBox from "../components/Editor/SideBar/ActionBox";
import { getAssetBundles } from "../util/jsonParsing";
import {testmetadata1} from "../util/testConstants";


test("ActionBox renders without crashing", () => {
  render(
    <ActionBox
      assetBundle={getAssetBundles(testmetadata1)[0]}
      addAction={() => undefined}
    />
  );
});

test("ActionBox renders without crashing with undefined assetbundle", () => {
  render(<ActionBox assetBundle={undefined} addAction={() => undefined} />);
});
