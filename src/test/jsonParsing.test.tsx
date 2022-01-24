import { getAssetBundles, linkPathsToData } from "../util/jsonParsing";

const testmetadata = {
  Id : "evil-cylinder",
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

const testpathDataList = [
  {
    path: "evil-cylinder",
    data: {
      identifier: ["evil-cylinder"],
      type: ["Serialization"],
    },
  },
  {
    path: "evil-cylinder/evil-cylinder",
    data: {
      identifier: ["evil-cylinder"],
      type: ["AssetBundle"],
      key: ["evil-cylinder"],
    },
  },
  {
    path: "evil-cylinder/evil-cylinder/delta",
    data: {
      identifier: ["delta"],
      type: ["DeltaTransform"],
      input: [
        undefined,
        "rotation",
        "scale",
        "position_delta",
        "rotation_delta",
        "scale_delta",
        "isLocal",
      ],
    },
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere",
    data: {
      identifier: ["wobble-sphere"],
      type: ["Serialization"],
    },
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere",
    data: {
      identifier: ["wobble-sphere"],
      type: ["AssetBundle"],
      key: ["wobble-sphere"],
    },
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    data: {
      identifier: ["animations"],
      type: ["Event"],
      associatedNode: ["wobble-sphere"],
      input: ["Still", "Wobble", "Bounce"],
    },
  },
];
describe("linkpathsToData returns the correct pathDataList", () => {
  it("returns the correct pathlist", () => {
    expect(linkPathsToData(testmetadata)).toStrictEqual(testpathDataList);
  });
});

describe("getAssetBundles to return assetBundleList", () => {
  it("getAssetBundles", () => {
    const testAssetBundleList = getAssetBundles(testmetadata);

    expect(getAssetBundles(testmetadata)).toEqual(testAssetBundleList);
  });
});
