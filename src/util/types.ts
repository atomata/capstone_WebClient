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

export type { Metadata, InitializationData, ExperienceData };