import {
  checkIfParent,
  getActions,
  getAssetBundles,
  linkPathsToData,
} from "../util/jsonParsing";
import {testmetadata1} from "../util/testConstants";

const testActionList = [
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    input: { command: "still", name: undefined, desc: undefined },
    assetId: ["wobble-sphere"],
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    input: { command: "wobble", name: undefined, desc: undefined },
    assetId: ["wobble-sphere"],
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    input: { command: "bounce", name: undefined, desc: undefined },
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
          desc: undefined,
          name: undefined,
        },
        {
          command: "rotation",
          desc: undefined,
          name: undefined,
        },
        {
          command: "scale",
          desc: undefined,
          name: undefined,
        },
        {
          command: "position_delta",
          desc: undefined,
          name: undefined,
        },
        {
          command: "rotation_delta",
          desc: undefined,
          name: undefined,
        },
        {
          command: "scale_delta",
          desc: undefined,
          name: undefined,
        },
        {
          command: "isLocal",
          desc: undefined,
          name: undefined,
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
      associatedNode: ["evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere"],
      input: [
        {
          command: "still",
          desc: undefined,
          name: undefined,
        },
        {
          command: "wobble",
          desc: undefined,
          name: undefined,
        },
        {
          command: "bounce",
          desc: undefined,
          name: undefined,
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
