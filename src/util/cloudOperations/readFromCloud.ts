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
import { convertPathDataToTree } from "../jsonParsing";

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
): Promise<void> {
  return getApparatusFromCloud(id).then((apparatusJson) => {
    // eslint-disable-next-line no-param-reassign
    experienceDataTemp.apparatusRoot = convertPathDataToTree(apparatusJson);
    let id = "id-not-found";

    if (
      experienceDataTemp.apparatusRoot !== undefined &&
      experienceDataTemp.apparatusRoot.identifier !== undefined &&
      experienceDataTemp.apparatusRoot.identifier.length > 1
    ) {
      id = experienceDataTemp.apparatusRoot.identifier[0];
    }
    // eslint-disable-next-line no-param-reassign
    experienceDataTemp.experience.apparatusId = id;
  });
}

function setupExperienceData(
  userId: string,
  experienceId: string,
  experienceDataTemp: ExperienceData
): Promise<void> {
  return getExperienceFromCloud(userId, experienceId).then((experienceJson) => {
    if(experienceJson !== undefined) {
      experienceDataTemp.experience = experienceJson;
      if (experienceJson.skyboxId === undefined) {
        experienceDataTemp.experience.skyboxId = "default";
      }
      setupApparatusData(experienceJson.apparatusId, experienceDataTemp);
    }
  });
}

async function getBlobNamesInContainer(
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

async function getBlobsInContainer(
  blobName: string,
  storage = defaultStorage
): Promise<string[][]> {
  const returnedBlobs: string[][] = [];

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
  // eslint-disable-next-line no-restricted-syntax
  for await (const exp of containerClient.listBlobsFlat()) {
    const expName = exp.name.substring(0, exp.name.length - fileNamePostfix);
    const lastModified = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }).format(exp.properties.lastModified);
    returnedBlobs.push([expName, lastModified]);
  }

  return returnedBlobs;
}

export {
  getBlobNamesInContainer,
  getBlobsInContainer,
  getApparatusFromCloud,
  getExperienceFromCloud,
  setupApparatusData,
  setupExperienceData,
};
