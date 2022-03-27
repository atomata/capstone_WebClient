import {
  checkIfParent,
  convertPathDataToTree,
  getActions,
  getAssetBundles,
  linkPathsToData,
} from "../util/jsonParsing";
import { testmetadata1 } from "../util/testConstants";

const testActionList = [
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    input: { command: "still", name: "still", desc: "", enabled: true },
    assetId: ["wobble-sphere"],
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    input: { command: "wobble", name: "wobble", desc: "", enabled: true },
    assetId: ["wobble-sphere"],
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    input: { command: "bounce", name: "bounce", desc: "", enabled: true },
    assetId: ["wobble-sphere"],
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/cam_closeup",
    input: {
      command: "focus",
      name: "Close Up",
      desc: "A close up of the wobble sphere",
      enabled: true,
    },
    assetId: ["wobble-sphere"],
  },
];

const testpathDataList = [
  {
    path: "evil-cylinder",
    data: {
      identifier: ["evil-cylinder"],
      type: ["Serialization"],
      defaultState : ["evil-cylinder/default"]
    },
  },
  {
    path: "evil-cylinder/evil-cylinder",
    data: {
      identifier: ["evil-cylinder"],
      type: ["AssetBundle"],
    },
  },
  {
    path: "evil-cylinder/evil-cylinder/delta",
    data: {
      identifier: ["delta"],
      type: ["DeltaTransform"],
      input: [
        {
          command: "position",
          desc: "",
          name: "position",
          enabled: true,
        },
        {
          command: "rotation",
          desc: "",
          name: "rotation",
          enabled: true,
        },
        {
          command: "scale",
          desc: "",
          name: "scale",
          enabled: true,
        },
        {
          command: "position_delta",
          desc: "",
          name: "position_delta",
          enabled: true,
        },
        {
          command: "rotation_delta",
          desc: "",
          name: "rotation_delta",
          enabled: true,
        },
        {
          command: "scale_delta",
          desc: "",
          name: "scale_delta",
          enabled: true,
        },
        {
          command: "isLocal?=true",
          desc: "",
          name: "isLocal: true",
          enabled: true,
        },
        {
          command: "isLocal?=false",
          desc: "",
          name: "isLocal: false",
          enabled: true,
        },
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
    },
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    data: {
      identifier: ["animations"],
      type: ["Event"],
      associatedNode: [
        "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere",
      ],
      input: [
        {
          command: "still",
          desc: "",
          name: "still",
          enabled: true,
        },
        {
          command: "wobble",
          desc: "",
          name: "wobble",
          enabled: true,
        },
        {
          command: "bounce",
          desc: "",
          name: "bounce",
          enabled: true,
        },
      ],
    },
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/cam_closeup",
    data: {
      identifier: ["cam_closeup"],
      type: ["CameraFocus"],
      associatedNode: [
        "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere",
      ],
      input: [
        {
          command: "focus",
          desc: "A close up of the wobble sphere",
          name: "Close Up",
          enabled: true,
        },
      ],
    },
  },
];

const testmetadata2 = undefined;

describe("linkpathsToData returns the correct pathDataList", () => {
  it("returns the correct pathlist", () => {
    expect(linkPathsToData(testmetadata1)).toStrictEqual(testpathDataList);
  });
});

describe("getActions to return actions of a node", () => {
  it("getActions non null", () => {
    const testNode = getAssetBundles(convertPathDataToTree(testmetadata1))[1];
    expect(getActions(testNode)).toEqual(testActionList);
  });

  it("getActions null metadata", () => {
    const testNode = getAssetBundles(testmetadata2);
    expect(testNode).toEqual(undefined);
    expect(getActions(undefined)).toEqual(undefined);
  });

  it("checkIfParent true", () => {
    const testNode = getAssetBundles(convertPathDataToTree(testmetadata1))[0];
    expect(checkIfParent(testNode)).toEqual(true);
  });

  it("checkIfParent false", () => {
    const testNode = getAssetBundles(convertPathDataToTree(testmetadata1))[1];
    expect(checkIfParent(testNode)).toEqual(false);
  });
});
