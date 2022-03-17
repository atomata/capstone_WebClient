import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
import { defaultStorage, sasToken } from "../constants";
import { SerializedExperience } from "../types";

async function saveExp(
  userId: string,
  experience: SerializedExperience
): Promise<void> {
  const file = new File(
    [JSON.stringify(experience)],
    `${experience.experienceId}.json`
  );

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(`${defaultStorage}/?${sasToken}`);

  // get Container - full public read access
  const containerClient: ContainerClient =
    blobService.getContainerClient(userId);

  await containerClient.createIfNotExists({
    access: "container",
  });

  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(file.name);

  // set mimetype as determined from browser with file upload control
  const options = { blobHTTPHeaders: { blobContentType: file.type } };
  // upload file
  await blobClient.uploadData(file, options).catch(()=> console.log("cannot save"));
}

async function deleteExp(userId: string, expName: string): Promise<void> {
  const blobService = new BlobServiceClient(`${defaultStorage}/?${sasToken}`);
  const containerClient: ContainerClient =
    blobService.getContainerClient(userId);
  await containerClient.deleteBlob(expName.concat(".json")).catch(()=> console.log("file does not exist"));
}

export { saveExp, deleteExp };
