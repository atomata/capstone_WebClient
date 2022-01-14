import { AssetBundle, Metadata, PathData, Tree } from "./types";

// Creates a list of path-data objects
function linkPathsToData(metadata: Metadata): PathData[] {
  const pathDataList = [] as PathData[];

  // make an empty object for each path
  metadata.Paths.forEach((path) => {
    const datum: PathData = { Path: path, Data: {} };
    pathDataList.push(datum);
  });

  // add data to the correct path
  metadata.Data.forEach((data) => {
    const unpack = data.split("@");
    const index = Number(unpack[0]);

    const dataSplit = unpack[1].split(":");
    if (pathDataList[index].Data[dataSplit[0]] === undefined) {
      pathDataList[index].Data[dataSplit[0]] = [];
    }
    if (dataSplit[0] === "input") {
      pathDataList[index].Data[dataSplit[0]].push(dataSplit[1].split("/")[1]);
    } else {
      pathDataList[index].Data[dataSplit[0]].push(dataSplit[1]);
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
    if (!(item in node.Children)) {
      node.Children[item] = { Children: [], Path: "" };
    }
    node = node.Children[item];
  });
  return node;
}

// converts the pathdata object created with linkPathsToData into a tree structure
function convertPathDataToTree(metadata: Metadata): Tree {
  const tree = { Children: [], Path: "" };
  const pathDataList = linkPathsToData(metadata);
  pathDataList.forEach((pathData) => {
    const node = addPathToTreeAndReturnNode(pathData.Path.split("/"), tree);
    node.Path = pathData.Path;
    for (const data in pathData.Data) {
      node[data] = pathData.Data[data];
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

// returns the list of actions of the given node
function getActions(node: AssetBundle): any[] {
  if (node === undefined) {
    return undefined;
  }
  for (const child in node.Children) {
    if (node.Children[child].type[0] === "Event") {
      return [node.Children[child].input, node.Children[child].Path];
    }
  }
  return undefined;
}

// Checks if a given node is a parent node or not by recursively checking if it has any direct/indirect children of type 'AssetBundle'
function checkIfParent(node: AssetBundle): boolean {
  if (node.Children !== undefined) {
    for (const child in node.Children) {
      if (
        node.Children[child].type[0] === "AssetBundle" ||
        checkIfParent(node.Children[child])
      ) {
        return true;
      }
    }
  }
  return false;
}
export {
  getAssetBundles,
  getActions,
  checkIfParent,
  linkPathsToData
};
