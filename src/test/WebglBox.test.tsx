import { render } from "@testing-library/react";
import React from "react";
import WebglBox from "../components/webgl/WebglBox";

const metadata = {
  Paths: [
    "evil-cylinder",
    "evil-cylinder/evil-cylinder",
    "evil-cylinder/evil-cylinder/delta",
    "evil-cylinder/evil-cylinder/delta/wobble-sphere",
    "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere",
    "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
  ],
  Data: [
    "0@identifier:evil-cylinder",
    "0@type:Serialization",
    "1@identifier:evil-cylinder",
    "1@type:AssetBundle",
    "1@key:evil-cylinder",
    "2@identifier:delta",
    "2@type:DeltaTransform",
    "2@input:vec3:position",
    "2@input:vec3/rotation",
    "2@input:vec3/scale",
    "2@input:vec3/position_delta",
    "2@input:vec3/rotation_delta",
    "2@input:vec3/scale_delta",
    "2@input:bool/isLocal",
    "3@identifier:wobble-sphere",
    "3@type:Serialization",
    "4@identifier:wobble-sphere",
    "4@type:AssetBundle",
    "4@key:wobble-sphere",
    "5@identifier:animations",
    "5@type:Event",
    "5@associatedNode:wobble-sphere",
    "5@input:void/Still",
    "5@input:void/Wobble",
    "5@input:void/Bounce",
  ],
};

test("ApparatusSelectedListBox renders without crashing", () => {
  render(
    <WebglBox
      userId="testuser1"
      experienceData={{
        apparatusId: "evil-cylinder",
        apparatusMetadata: metadata,
        initializationData: { actionList: [] },
      }}
    />
  );
});
