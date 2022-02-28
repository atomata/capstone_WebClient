import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
import {
  apparatusContainer,
  fileNamePostfix,
  sasToken,
  defaultStorage,
} from "../constants";
import {
  ExperienceData,
  SerializedApparatus,
  SerializedExperience,
} from "../types";

function getApparatusFromCloud(id: string): Promise<SerializedApparatus> {
  return fetch(`${apparatusContainer}/${id}.json`, { mode: "cors" })
    .then((response) => response.json())
    .catch((error) => error);
}

function getExperienceFromCloud(
  userId: string,
  experienceId: string
): Promise<SerializedExperience> {
  return fetch(`${defaultStorage}/${userId}/${experienceId}.json`, {
    mode: "cors",
  })
    .then((response) => response.json())
    .catch((error) => null);
}

function setupApparatusData(
  id: string,
  experienceDataTemp: ExperienceData
): Promise<any> {
  return getApparatusFromCloud(id).then((apparatusJson) => {
    // eslint-disable-next-line no-param-reassign
    experienceDataTemp.apparatusMetadata = apparatusJson;
    // eslint-disable-next-line no-param-reassign
    experienceDataTemp.experience.apparatusId = apparatusJson.Id;
  });
}

function setupExperienceData(
  userId: string,
  experienceId: string,
  experienceDataTemp: ExperienceData
): Promise<any> {
  return getExperienceFromCloud(userId, experienceId).then((experienceJson) => {
    // eslint-disable-next-line no-param-reassign
    experienceDataTemp.experience = experienceJson;
    setupApparatusData(experienceJson.apparatusId, experienceDataTemp);
  });
}

async function getBlobsInContainer(
  blobName: string,
  storage = defaultStorage
): Promise<string[]> {
  const returnedBlobUrls: string[] = [];

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(`${storage}/?${sasToken}`);

  // get Container - full public read access
  const containerClient: ContainerClient =
    blobService.getContainerClient(blobName);

  // Ensures when new user can create experience
  await containerClient.createIfNotExists({
    access: "container",
  });
  // get list of blobs in container
  for await (const exp of containerClient.listBlobsFlat()) {
    const expName = exp.name.substring(0, exp.name.length - fileNamePostfix);
    returnedBlobUrls.push(expName);
  }
  return returnedBlobUrls;
}
export {
  getBlobsInContainer,
  getApparatusFromCloud,
  getExperienceFromCloud,
  setupApparatusData,
  setupExperienceData,
};
