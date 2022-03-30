import {
  ActionData,
  PathData,
  SerializedApparatus,
  TreeNode,
  Input,
} from "./types";

// Creates a list of path-data objects
function linkPathsToData(metadata: SerializedApparatus): PathData[] {
  if (
    metadata === undefined ||
    metadata.Paths === undefined ||
    metadata.Data === undefined ||
    metadata.Paths.length === 0 ||
    metadata.Data.length === 0
  ) {
    return undefined;
  }

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
    const semicolonIndex = unpack[1].indexOf(":");
    const identifier = unpack[1].substring(0, semicolonIndex);
    const dataVal = unpack[1].substring(semicolonIndex + 1);
    if (pathDataList[index].data[identifier] === undefined) {
      pathDataList[index].data[identifier] = [];
    }
    if (identifier === "input") {
      handleInputNode(dataVal, index, pathDataList);
    } else {
      pathDataList[index].data[identifier].push(dataVal);
    }
  });
  // return the created object
  return pathDataList;
}

// handles the input node parsing
function handleInputNode(
  dataVal: string,
  index: number,
  pathDataList: PathData[]
) {
  const typeAndRest = dataVal.split("/");
  const idAndArgs = typeAndRest[1].split("?");
  const id = idAndArgs[0];

  // in the case where args arn't provided, use default values to populate name and description
  const hasArgs = idAndArgs.length > 1;

  if (!hasArgs) {
    if (typeAndRest[0] === "bool") {
      pathDataList[index].data["input"].push(createBooleanInput(id, true));
      pathDataList[index].data["input"].push(createBooleanInput(id, false));
    } else {
      pathDataList[index].data["input"].push(createVoidInput(id));
    }
  } else {
    const args = idAndArgs[1];
    const argSplit = args.split("&");

    const argDictionary = {};
    for (let i of argSplit) {
      let keyvalue = i.split("=");
      argDictionary[keyvalue[0]] = keyvalue[1];
    }
    if (typeAndRest[0] === "bool") {
      pathDataList[index].data["input"].push(
        createBooleanInput(id, true, argDictionary)
      );
      pathDataList[index].data["input"].push(
        createBooleanInput(id, false, argDictionary)
      );
    } else {
      pathDataList[index].data["input"].push(createVoidInput(id, argDictionary));
    }
  }
}

// creates a boolean input and returns it
function createBooleanInput(
    id: string,
    val: boolean,
    argDictionary = undefined
): Input {
  return {
    command: `${id}?=${val.toString()}`,
    name:
        argDictionary !== undefined && "uiname" in argDictionary
            ? `${argDictionary["uiname"]}?${val.toString()}`
            : `${id}?=${val.toString()}`,
    desc:
        argDictionary !== undefined && "uidesc" in argDictionary
            ? argDictionary["uidesc"]
            : `${id}?=${val.toString()}`,
    enabled:
        argDictionary !== undefined && "uienabled" in argDictionary
            ? argDictionary["uienabled"] === "True"
            : true,
  };
}

// creates a void input and returns it
function createVoidInput(id: string, argDictionary = undefined): Input {
  return {
    command: id,
    name:
        argDictionary !== undefined && "uiname" in argDictionary
            ? argDictionary["uiname"]
            : id,
    desc:
        argDictionary !== undefined && "uidesc" in argDictionary
            ? argDictionary["uidesc"]
            : id,
    enabled:
        argDictionary !== undefined && "uienabled" in argDictionary
            ? argDictionary["uienabled"] === "True"
            : true,
  };
}


// takes a string[] path and makes sure it's in the tree
// returns the node at that path
function addPathToTreeAndReturnNode(items: string[], tree: TreeNode) {
  let node = tree;
  items.forEach((item) => {
    if (!(item in node.children)) {
      node.children[item] = {
        children: [],
        path: "",
        identifier: "",
        type: "",
      };
    }
    node = node.children[item];
  });
  return node;
}
// converts the pathdata object created with linkPathsToData into a tree structure
function convertPathDataToTree(metadata: SerializedApparatus): TreeNode {
  if (
    metadata === undefined ||
    metadata.Paths === undefined ||
    metadata.Data === undefined ||
    metadata.Paths.length === 0 ||
    metadata.Data.length === 0
  ) {
    return undefined;
  }
  const tree = { children: [], path: "", identifier: "", type: "" };
  const pathDataList = linkPathsToData(metadata);
  pathDataList.forEach((pathData) => {
    const node = addPathToTreeAndReturnNode(pathData.path.split("/"), tree);
    node.path = pathData.path;
    for (const data in pathData.data) {
      node[data] = pathData.data[data];
    }
  });
  const rootKey = metadata.Paths[0];
  return tree.children[rootKey];
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
function getAssetBundles(apparatusRoot: TreeNode): TreeNode[] {
  if (apparatusRoot === undefined) {
    return undefined;
  }
  const assetBundleList = [];
  traverseNodeDepthFirst(apparatusRoot, assetBundleList);
  return assetBundleList;
}

// input to one event can be multi valued . currently adding them separately in the list
// returns the list of actions of the given node
function getActions(node: TreeNode): ActionData[] {
  if (node === undefined) {
    return undefined;
  }
  const actionList = [];
  for (const child in node.children) {
    if (
      node.children[child].type[0] === "Event" ||
      node.children[child].type[0] === "CameraFocus"
    ) {
      for (const index in node.children[child].input) {
        if (node.children[child].input[index].enabled) {
          const actionData = {
            input: node.children[child].input[index],
            path: node.children[child].path,
            assetId: node.identifier,
          };
          actionList.push(actionData);
        }
      }
    }
  }
  return actionList;
}

// return assetbundles and associated action list as a tuple to the result list
function getAssetBundleActions(apparatusRoot: TreeNode): any[] {
  const result = [];
  const assetBundleList = getAssetBundles(apparatusRoot);

  for (const bundle of assetBundleList) {
    const actionList = getActions(bundle);
    result.push([bundle.identifier[0], actionList]);
  }
  return result;
}

export {
  convertPathDataToTree,
  getAssetBundleActions,
  getAssetBundles,
  getActions,
  linkPathsToData,
};
