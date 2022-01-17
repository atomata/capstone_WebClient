import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
import {experienceURL, sasToken} from "./Constants";


const saveExperienceToCloud = async (
  userId: string,
  experienceId: string,
  apparatusId: string,
  actionList: any[]
): Promise<any> => {
  const experience = { apparatusId, actionList };

  const file = new File([JSON.stringify(experience)], `${experienceId}.json`);

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(
    `${experienceURL}/?${sasToken}`
  );

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
  await blobClient.uploadData(file, options);
};
// </snippet_uploadFileToBlob>

export default saveExperienceToCloud;
