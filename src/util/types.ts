type Metadata = {
  Paths: string[];
  Data: string[];
};

type ActionData = {
  path: string;
  input: string;
  assetID: string;
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
  Id: { Identifier: string };
  Metadata: Metadata;
};
type PathData = {
  Path: string;
  Data: Record<string, any[]>;
};

type AssetBundle = { Children: any[]; Path: string; identifier: string[] };

type Tree = { Children: any[]; Path: string };

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
