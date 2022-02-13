const testmetadata1 = {
    Id: "evil-cylinder",
    Paths: [
        "evil-cylinder",
        "evil-cylinder/evil-cylinder",
        "evil-cylinder/evil-cylinder/delta",
        "evil-cylinder/evil-cylinder/delta/wobble-sphere",
        "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere",
        "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    ],
    Data: [
        "0@identifier:evil-cylinder",
        "0@type:Serialization",
        "1@identifier:evil-cylinder",
        "1@type:AssetBundle",
        "2@identifier:delta",
        "2@type:DeltaTransform",
        "2@input:vec3/position",
        "2@input:vec3/rotation",
        "2@input:vec3/scale",
        "2@input:vec3/position_delta",
        "2@input:vec3/rotation_delta",
        "2@input:vec3/scale_delta",
        "2@input:bool/isLocal",
        "3@identifier:wobble-sphere",
        "3@type:Serialization",
        "4@identifier:wobble-sphere",
        "4@type:AssetBundle",
        "5@identifier:animations",
        "5@type:Event",
        "5@associatedNode:evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere",
        "5@input:void/still",
        "5@input:void/wobble",
        "5@input:void/bounce",
    ],
};

export {testmetadata1};