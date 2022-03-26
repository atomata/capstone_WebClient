import {
  ActionData,
  AssetBundle,
  PathData,
  SerializedApparatus,
  Tree,
} from "./types";

// Creates a list of path-data objects
function linkPathsToData(metadata: SerializedApparatus): PathData[] {
  const pathDataList = [] as PathData[];

  // make an empty object for each path
  metadata.Paths.forEach((path) => {
    const datum: PathData = { path, data: {} };
    pathDataList.push(datum);
  });

  // add data to the correct path
  metadata.Data.forEach((data) => {
    const unpack = data.split("@");
    const index = Number(unpack[0]);

    // TODO fix the semicolon split issue , fix the uienabled , fix the boolean inputs

    const semicolonIndex = unpack[1].indexOf(":");
    const identifier = unpack[1].substring(0, semicolonIndex);
    const dataVal = unpack[1].substring(semicolonIndex + 1);
    if (pathDataList[index].data[identifier] === undefined) {
      pathDataList[index].data[identifier] = [];
    }
    if (identifier === "input") {
      const typeAndRest = dataVal.split("/");
      const idAndArgs = typeAndRest[1].split("?");
      const id = idAndArgs[0];

      // in the case where args arn't provided, use default values to populate name and description
      const hasArgs = idAndArgs.length > 1;

      if (!hasArgs) {
        pathDataList[index].data[identifier].push({
          command: id,
          name: id,
          desc: "",
        });
      } else {
        const args = idAndArgs[1];
        const argSplit = args.split("&");

        const argDictionary = {};
        for (let i of argSplit) {
          let keyvalue = i.split("=");
          argDictionary[keyvalue[0]] = keyvalue[1];
        }

        pathDataList[index].data[identifier].push({
          command: id,
          name: "uiname" in argDictionary ? argDictionary["uiname"] : id,
          desc: "uidesc" in argDictionary ? argDictionary["uidesc"] : id,
          enabled:
            "uienabled" in argDictionary
              ? argDictionary["uienabled"] === "True"
              : false,
        });
      }
    } else {
      pathDataList[index].data[identifier].push(dataVal);
    }
  });
  // return the created object
  return pathDataList;
}

// takes a string[] path and makes sure it's in the tree
// returns the node at that path
function addPathToTreeAndReturnNode(items: string[], tree: Tree) {
  let node = tree;
  items.forEach((item) => {
    if (!(item in node.children)) {
      node.children[item] = { children: [], path: "" };
    }
    node = node.children[item];
  });
  return node;
}

// converts the pathdata object created with linkPathsToData into a tree structure
function convertPathDataToTree(metadata: SerializedApparatus): Tree {
  const tree = { children: [], path: "" };
  const pathDataList = linkPathsToData(metadata);
  pathDataList.forEach((pathData) => {
    const node = addPathToTreeAndReturnNode(pathData.path.split("/"), tree);
    node.path = pathData.path;
    for (const data in pathData.data) {
      node[data] = pathData.data[data];
    }
  });

  return tree;
}

// travers the tree depth first to find the asset bundle nodes
function traverseNodeDepthFirst(node, assetBundleList) {
  if (node !== undefined) {
    if (node.type !== undefined && node.type[0] === "AssetBundle") {
      assetBundleList.push(node);
    }
    if (node.children !== undefined) {
      for (const child in node.children) {
        traverseNodeDepthFirst(node.children[child], assetBundleList);
      }
    }
  }
}

// returns the list of assetbundle nodes in the tree
function getAssetBundles(metadata: SerializedApparatus): AssetBundle[] {
  if (metadata === undefined) {
    return undefined;
  }
  const assetTree = convertPathDataToTree(metadata);
  const assetBundleList = [];
  traverseNodeDepthFirst(assetTree, assetBundleList);
  return assetBundleList;
}

// input to one event can be multi valued . currently adding them separately in the list
// returns the list of actions of the given node
function getActions(node: AssetBundle): ActionData[] {
  const actionList = [];
  if (node === undefined) {
    return undefined;
  }
  for (const child in node.children) {
    if (
      node.children[child].type[0] === "Event" ||
      node.children[child].type[0] === "CameraFocus"
    ) {
      for (const index in node.children[child].input) {
        const actionData = {
          input: node.children[child].input[index],
          path: node.children[child].path,
          assetId: node.identifier,
        };
        actionList.push(actionData);
      }
    }
  }
  return actionList;
}

function getAssetBundleActions(metadata: SerializedApparatus) {
  const list = [];
  const assetBundleList = getAssetBundles(metadata);

  for (const bundle of assetBundleList) {
    const actionList = [];
    for (const child in bundle.children) {
      if (
        bundle.children[child].type[0] === "Event" ||
        bundle.children[child].type[0] === "CameraFocus"
      ) {
        for (const index in bundle.children[child].input) {
          const actionData = {
            input: bundle.children[child].input[index],
            path: bundle.children[child].path,
            assetId: bundle.identifier,
          };
          actionList.push(actionData);
        }
      }
    }
    list.push([bundle.identifier[0], actionList]);
  }
  return list;
}

// Checks if a given node is a parent node or not by recursively checking if it has any direct/indirect children of type 'AssetBundle'
function checkIfParent(node: AssetBundle): boolean {
  if (node.children !== undefined) {
    for (const child in node.children) {
      if (
        node.children[child].type[0] === "AssetBundle" ||
        checkIfParent(node.children[child])
      ) {
        return true;
      }
    }
  }
  return false;
}
export {
  getAssetBundleActions,
  getAssetBundles,
  getActions,
  checkIfParent,
  linkPathsToData,
};
