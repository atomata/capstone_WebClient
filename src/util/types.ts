type Metadata = {
  Paths: string[];
  Data: string[];
};
type InitializationData = {
  actionList: [];
};
type ExperienceData = {
  apparatusId: string;
  experienceId: string;
  apparatusMetadata: Metadata;
  initializationData: InitializationData;
};

type SerializedExperience = {
  apparatusId: string;
  actionList: [];
};

type SerializedApparatus = {
  Id: { Identifier : string };
  Metadata : Metadata;
};
type PathData = {
  Path: string;
  Data: Record<string, any[]>;
};

type AssetBundle = { Children: any[]; Path: string; identifier: string[] };

type Tree = { Children: any[]; Path: string };

export type {
  Metadata,
  InitializationData,
  ExperienceData,
  AssetBundle,
  Tree,
  PathData,
  SerializedApparatus,
  SerializedExperience
};
