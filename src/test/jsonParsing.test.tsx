import {
  checkIfParent,
  convertPathDataToTree,
  getActions,
  getAssetBundles,
  linkPathsToData,
} from "../util/jsonParsing";
import {testActionList, testmetadata1, testpathDataList} from "../util/testConstants";


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
