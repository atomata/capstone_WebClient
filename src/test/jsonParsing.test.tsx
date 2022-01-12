/* eslint-disable no-unused-expressions */
import {
  getAssetBundles,
  linkPathsToData,
} from "../util/JsonParsing";

describe("linkpathsToData returns the correct pathDataList", () => {
  it("returns the correct pathlist", () => {
    const testmetadata = {
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
        Path: "evil-cylinder",
        Data: {
          identifier: ["evil-cylinder"],
          type: ["Serialization"],
        },
      },
      {
        Path: "evil-cylinder/evil-cylinder",
        Data: {
          identifier: ["evil-cylinder"],
          type: ["AssetBundle"],
          key: ["evil-cylinder"],
        },
      },
      {
        Path: "evil-cylinder/evil-cylinder/delta",
        Data: {
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
        Path: "evil-cylinder/evil-cylinder/delta/wobble-sphere",
        Data: {
          identifier: ["wobble-sphere"],
          type: ["Serialization"],
        },
      },
      {
        Path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere",
        Data: {
          identifier: ["wobble-sphere"],
          type: ["AssetBundle"],
          key: ["wobble-sphere"],
        },
      },
      {
        Path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
        Data: {
          identifier: ["animations"],
          type: ["Event"],
          associatedNode: ["wobble-sphere"],
          input: ["Still", "Wobble", "Bounce"],
        },
      },
    ];
    expect(linkPathsToData(testmetadata)).toStrictEqual(testpathDataList);
  });
});

describe("getAssetBundles to return assetBundleList", () => {
  it("getAssetBundles", () => {
    const testmetadata = {
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
    const testAssetBundleList = getAssetBundles(testmetadata);

    expect(getAssetBundles(testmetadata)).toEqual(testAssetBundleList);
  });
});
