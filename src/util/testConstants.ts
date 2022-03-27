import { convertPathDataToTree } from "./jsonParsing";

const testmetadata1 = {
  Paths: [
    "evil-cylinder",
    "evil-cylinder/evil-cylinder",
    "evil-cylinder/evil-cylinder/delta",
    "evil-cylinder/evil-cylinder/delta/wobble-sphere",
    "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere",
    "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/cam_closeup",
  ],
  Data: [
    "0@identifier:evil-cylinder",
    "0@type:Serialization",
    "0@defaultState:evil-cylinder/default",
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
  skyboxId: "default",
};

const testExperienceData = {
  apparatusRoot: convertPathDataToTree(testmetadata1),
  experience: testSerializedExperience,
};

const testpathDataList = [
  {
    path: "evil-cylinder",
    data: {
      identifier: ["evil-cylinder"],
      type: ["Serialization"],
      defaultState: ["evil-cylinder/default"],
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
          desc: "",
          name: "position",
          enabled: true,
        },
        {
          command: "rotation",
          desc: "",
          name: "rotation",
          enabled: true,
        },
        {
          command: "scale",
          desc: "",
          name: "scale",
          enabled: true,
        },
        {
          command: "position_delta",
          desc: "",
          name: "position_delta",
          enabled: true,
        },
        {
          command: "rotation_delta",
          desc: "",
          name: "rotation_delta",
          enabled: true,
        },
        {
          command: "scale_delta",
          desc: "",
          name: "scale_delta",
          enabled: true,
        },
        {
          command: "isLocal?=true",
          desc: "",
          name: "isLocal: true",
          enabled: true,
        },
        {
          command: "isLocal?=false",
          desc: "",
          name: "isLocal: false",
          enabled: true,
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
      associatedNode: [
        "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere",
      ],
      input: [
        {
          command: "still",
          desc: "",
          name: "still",
          enabled: true,
        },
        {
          command: "wobble",
          desc: "",
          name: "wobble",
          enabled: true,
        },
        {
          command: "bounce",
          desc: "",
          name: "bounce",
          enabled: true,
        },
      ],
    },
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/cam_closeup",
    data: {
      identifier: ["cam_closeup"],
      type: ["CameraFocus"],
      associatedNode: [
        "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere",
      ],
      input: [
        {
          command: "focus",
          desc: "A close up of the wobble sphere",
          name: "Close Up",
          enabled: true,
        },
      ],
    },
  },
];

const testActionList = [
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    input: { command: "still", name: "still", desc: "", enabled: true },
    assetId: ["wobble-sphere"],
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    input: { command: "wobble", name: "wobble", desc: "", enabled: true },
    assetId: ["wobble-sphere"],
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/animations",
    input: { command: "bounce", name: "bounce", desc: "", enabled: true },
    assetId: ["wobble-sphere"],
  },
  {
    path: "evil-cylinder/evil-cylinder/delta/wobble-sphere/wobble-sphere/cam_closeup",
    input: {
      command: "focus",
      name: "Close Up",
      desc: "A close up of the wobble sphere",
      enabled: true,
    },
    assetId: ["wobble-sphere"],
  },
];

export {
  testmetadata1,
  testSerializedExperience,
  testExperienceData,
  testpathDataList,
  testActionList,
};
