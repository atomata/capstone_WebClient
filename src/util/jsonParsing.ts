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

    const dataSplit = unpack[1].split(":");
    if (pathDataList[index].data[dataSplit[0]] === undefined) {
      pathDataList[index].data[dataSplit[0]] = [];
    }
    if (dataSplit[0] === "input") {
      const commandSplit = dataSplit[1].split("/")[1].split("?");
      let infoSplit;
      if (commandSplit[1] !== undefined) {
        infoSplit = commandSplit[1].split("&");
      }

      const inputObject = {
        command: commandSplit[0],
        name:
          infoSplit !== undefined
            ? infoSplit[0].split("uiname=")[1]
            : undefined,
        desc:
          infoSplit !== undefined
            ? infoSplit[1].split("uidesc=")[1]
            : undefined,
      };
      pathDataList[index].data[dataSplit[0]].push(inputObject);
    } else {
      pathDataList[index].data[dataSplit[0]].push(dataSplit[1]);
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

  console.log("the list is ", list);
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
