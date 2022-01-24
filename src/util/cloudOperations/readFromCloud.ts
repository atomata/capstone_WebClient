import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
import {
  apparatusContainer,
  fileNamePostfix,
  sasToken,
  experienceStorage,
} from "../constants";
import { SerializedApparatus, SerializedExperience } from "../types";

function getApparatusFromCloud(id: string): Promise<SerializedApparatus> {
  return fetch(`${apparatusContainer}/${id}.json`, { mode: "cors" })
    .then((response) => response.json())
    .catch((error) => error);
}

function getExperienceFromCloud(
  userId: string,
  experienceId: string
): Promise<SerializedExperience> {
  return fetch(`${experienceStorage}/${userId}/${experienceId}.json`, {
    mode: "cors",
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("error ", error);
      return null;
    });
}

async function getBlobsInContainer(
  blobName: string,
  storage = experienceStorage
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
export { getBlobsInContainer, getApparatusFromCloud, getExperienceFromCloud };
