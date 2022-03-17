import {
  checkIfParent,
  getActions,
  getAssetBundles,
  linkPathsToData,
} from "../util/jsonParsing";
import { testmetadata1 } from "../util/testConstants";

const testActionList = [
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    input: { command: "still", name: "still", desc: "" },
    assetId: ["wobble-sphere"],
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    input: { command: "wobble", name: "wobble", desc: "" },
    assetId: ["wobble-sphere"],
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    input: { command: "bounce", name: "bounce", desc: "" },
    assetId: ["wobble-sphere"],
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/cam_closeup",
    input: {
      command: "focus",
      name: "Close Up",
      desc: "A close up of the wobble sphere",
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
        },
        {
          command: "rotation",
          desc: "",
          name: "rotation",
        },
        {
          command: "scale",
          desc: "",
          name: "scale",
        },
        {
          command: "position_delta",
          desc: "",
          name: "position_delta",
        },
        {
          command: "rotation_delta",
          desc: "",
          name: "rotation_delta",
        },
        {
          command: "scale_delta",
          desc: "",
          name: "scale_delta",
        },
        {
          command: "isLocal",
          desc: "",
          name: "isLocal",
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
        },
        {
          command: "wobble",
          desc: "",
          name: "wobble",
        },
        {
          command: "bounce",
          desc: "",
          name: "bounce",
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
    const testNode = getAssetBundles(testmetadata1)[1];
    expect(getActions(testNode)).toEqual(testActionList);
  });

  it("getActions null metadata", () => {
    const testNode = getAssetBundles(testmetadata2);
    expect(testNode).toEqual(undefined);
    expect(getActions(undefined)).toEqual(undefined);
  });

  it("checkIfParent true", () => {
    const testNode = getAssetBundles(testmetadata1)[0];
    expect(checkIfParent(testNode)).toEqual(true);
  });

  it("checkIfParent false", () => {
    const testNode = getAssetBundles(testmetadata1)[1];
    expect(checkIfParent(testNode)).toEqual(false);
  });
});
