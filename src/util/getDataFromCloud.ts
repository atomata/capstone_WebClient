// TODO change the link to cloud
import {BlobServiceClient, ContainerClient} from "@azure/storage-blob";
import {apparatusURL, experienceURL, fileNamePostfix, sasToken} from "./Constants";

function getApparatusFromCloud(id: string): Promise<any> {
  return fetch(
    `${apparatusURL}/${id}.json`,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((responseJson) => responseJson)
    .catch((error) => error);
}

function getExperienceFromCloud(
  userId: string,
  experienceId: string
): Promise<any> {
  return fetch(
    `${experienceURL}/${userId}/${experienceId}.json`,
    { mode: "cors" }
  )
      .then((response) => response.json())
      .then((responseJson) => responseJson)
      .catch((error) => {console.log("error ", error); return null;})
}

const getBlobsInContainer = async (userId) => {
  const returnedBlobUrls: string[] = [];

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(
      `${experienceURL}/?${sasToken}`
  );

  // get Container - full public read access
  const containerClient: ContainerClient = blobService.getContainerClient(userId);

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
};

export { getBlobsInContainer,getApparatusFromCloud, getExperienceFromCloud };
