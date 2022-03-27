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
  apparatusMetadata: SerializedApparatus;
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

type AssetBundle = { children: any[]; path: string; identifier: string };

type Tree = { children: any[]; path: string };

export type {
  ExperienceData,
  AssetBundle,
  Tree,
  ActionData,
  PathData,
  SerializedApparatus,
  SerializedExperience,
};
