const testmetadata1 = {
  Paths: [
    "evil-cylinder",
    "evil-cylinder/evil-cylinder",
    "evil-cylinder/evil-cylinder/delta",
    "evil-cylinder/evil-cylinder/delta/wobble-sphere",
    "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere",
    "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/cam_closeup"
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
    "6@identifier:cam_closeup",
    "6@type:CameraFocus",
    "6@associatedNode:evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere",
    "6@input:void/focus?uiname=Close Up&uidesc=A close up of the wobble sphere",
  ],
};

const testSerializedExperience = {
  experienceId: "testexp1",
  apparatusId: "evil-cylinder",
  actionList: [],
};

const testExperienceData = {
  apparatusMetadata: testmetadata1,
  experience: testSerializedExperience,
};
export { testmetadata1, testSerializedExperience, testExperienceData };
