const sasToken =
  "?sv=2020-08-04&ss=b&srt=sco&sp=rwdlacitfx&se=2022-09-30T20:46:30Z&st=2021-11-30T13:46:30Z&spr=https&sig=e3MgX4FkExWFc5LWFv5RGZdLdyzSMy3ZSSX76%2BPzGFs%3D";

const unityScene = "AtomataScene";
const loadTrigger = "LoadApparatus";
const voidTrigger = "Trigger";
const skyboxTrigger = "LoadSkybox";
const defaultCameraCommand = "ReturnCamera";
const pauseApparatusCommand = "PauseApparatus";
const playApparatusCommand = "PlayApparatus";

const fileNamePostfix = 5;

const apparatusContainer =
  "https://addressabletest1.blob.core.windows.net/apparatus";
const developerStorage = "https://vclassroommspedex.blob.core.windows.net";

const defaultStorage = "https://addressabletest1.blob.core.windows.net";

const apparatusBlob = "apparatus";
const skyboxBlob = "skyboxes";

export {
  playApparatusCommand,
  pauseApparatusCommand,
  apparatusBlob,
  skyboxBlob,
  defaultStorage,
  developerStorage,
  apparatusContainer,
  sasToken,
  fileNamePostfix,
  unityScene,
  loadTrigger,
  voidTrigger,
  skyboxTrigger,
  defaultCameraCommand,
};
