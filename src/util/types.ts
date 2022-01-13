type Metadata = {
  Paths: string[];
  Data: string[];
};
type InitializationData = {
  actionList: [];
};
type ExperienceData = {
  apparatusId: string;
  apparatusMetadata: Metadata;
  initializationData: InitializationData;
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
};
