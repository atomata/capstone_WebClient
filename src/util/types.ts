type Metadata = {
  paths: string[];
  data: string[];
};

type ActionData = {
  path: string;
  input: string;
  assetId: string;
};
type ExperienceData = {
  apparatusMetadata: Metadata;
  experience : SerializedExperience
};

type SerializedExperience = {
  experienceId: string;
  apparatusId: string;
  actionList: ActionData[];
};

type SerializedApparatus = {
  id: { Identifier: string };
  metadata: Metadata;
};
type PathData = {
  path: string;
  data: Record<string, any[]>;
};

type AssetBundle = { children: any[]; path: string; identifier: string[] };

type Tree = { children: any[]; path: string };

export type {
  Metadata,
  ExperienceData,
  AssetBundle,
  Tree,
  ActionData,
  PathData,
  SerializedApparatus,
  SerializedExperience,
};
