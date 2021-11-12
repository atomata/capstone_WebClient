import {tupleExpression} from "@babel/types";

type Metadata = {
    Paths: string[];
    Data: string[];
};

function parseAssets(metadata: Metadata) {
    const assetArray = [];
    for (let i = 0; i < metadata.Data.length; i += 1) {
        const data = metadata.Data[i];
        const regex = /\d@type\/AssetBundle/;
        // assuming that the next item in the list is a key
        if (data.match(regex)) {
            const keyMeta = metadata.Data[i + 1].split("@");
            const key = keyMeta[1].split(":");
            assetArray.push(key[1]);
        }
    }
    return assetArray;
}

function parseActions(metadata: Metadata) {
    const actionMap = new Map();
    let trigger = [];
    let identifier = "";
    let path = "";
    for (let i = 0; i < metadata.Data.length; i += 1) {
        const data = metadata.Data[i];
        const regexTrigger = /\d@input:void:.+/;
        const regexIdentifier = /\d@associatedNode\/.+/;

        if(data.match(regexIdentifier)){
            identifier = data.split("/")[1];
            trigger = [];
            path = metadata.Paths[data.split("@")[0]];
            actionMap.set(identifier,[path,trigger]);

        }
        else if (data.match(regexTrigger)) {
            const vals = data.split(":");
            const actionName = vals[2];
            trigger.push(actionName);
        }
    }
    return actionMap;
}

export {parseActions, parseAssets};
export type {Metadata};
