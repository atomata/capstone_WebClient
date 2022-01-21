import { ActionData, AssetBundle, Metadata, PathData, Tree } from "./types";

// Creates a list of path-data objects
function linkPathsToData(metadata: Metadata): PathData[] {
  const pathDataList = [] as PathData[];

  // make an empty object for each path
  metadata.paths.forEach((path) => {
    const datum: PathData = { path: path, data: {} };
    pathDataList.push(datum);
  });

  // add data to the correct path
  metadata.data.forEach((data) => {
    const unpack = data.split("@");
    const index = Number(unpack[0]);

    const dataSplit = unpack[1].split(":");
    if (pathDataList[index].data[dataSplit[0]] === undefined) {
      pathDataList[index].data[dataSplit[0]] = [];
    }
    if (dataSplit[0] === "input") {
      pathDataList[index].data[dataSplit[0]].push(dataSplit[1].split("/")[1]);
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
      node.children[item] = { Children: [], Path: "" };
    }
    node = node.children[item];
  });
  return node;
}

// converts the pathdata object created with linkPathsToData into a tree structure
function convertPathDataToTree(metadata: Metadata): Tree {
  const tree = { Children: [], Path: "" };
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
    if (node.Children !== undefined) {
      for (const child in node.Children) {
        traverseNodeDepthFirst(node.Children[child], assetBundleList);
      }
    }
  }
}

// returns the list of assetnbundle nodes in the tree
function getAssetBundles(metadata: Metadata): AssetBundle[] {
  if (metadata === undefined) {
    return [];
  }
  const assetTree = convertPathDataToTree(metadata);
  const assetBundleList = [];
  traverseNodeDepthFirst(assetTree, assetBundleList);
  return assetBundleList;
}

//TODO input to one event can be mutil valued . currently adding them separatly in the list
// returns the list of actions of the given node
function getActions(node: AssetBundle): ActionData[] {
  const actionList = [];
  if (node === undefined) {
    return undefined;
  }
  for (const child in node.children) {
    if (node.children[child].type[0] === "Event") {
      for (const index in node.children[child].input) {
        const actionData = {
          input: node.children[child].input[index],
          path: node.children[child].Path,
          assetID: node.identifier,
        };
        actionList.push(actionData);
      }
    }
  }
  return actionList;
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
export { getAssetBundles, getActions, checkIfParent, linkPathsToData };
