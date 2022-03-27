type ActionData = {
  path: string;
  input: Input;
  assetId: string;
  desc: string;
};

type Input = {
  command: string;
  name: string;
  desc: string;
  enabled: boolean;
};
type ExperienceData = {
  apparatusRoot: TreeNode;
  experience: SerializedExperience;
};

type SerializedExperience = {
  experienceId: string;
  apparatusId: string;
  actionList: ActionData[];
  skyboxId: string;
};

type SerializedApparatus = {
  Paths: string[];
  Data: string[];
};
type PathData = {
  path: string;
  data: Record<string, any[]>;
};

type TreeNode = {
  children: TreeNode[];
  path: string;
  identifier: string;
  type: string;
  input?: any[];
  defaultState?: string;
};

export type {
  ExperienceData,
  TreeNode,
  ActionData,
  PathData,
  SerializedApparatus,
  SerializedExperience,
};
