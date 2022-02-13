import { render } from "@testing-library/react";
import React from "react";
import { getActions, getAssetBundles } from "../util/jsonParsing";
import ActionSequenceBox from "../components/editorBoxes/ActionSequenceBox";
import {testmetadata1} from "../util/testConstants";

test("ActionSequenceBox renders without crashing", () => {
  render(
    <ActionSequenceBox
      actionList={getActions(getAssetBundles(testmetadata1)[0])}
      removeAction={(index) => undefined}
      handleOnDragEnd={undefined}
    />
  );
});
