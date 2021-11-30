import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";

const sasToken =
  "?sv=2020-08-04&ss=b&srt=sco&sp=rwdlacitfx&se=2022-09-30T20:46:30Z&st=2021-11-30T13:46:30Z&spr=https&sig=e3MgX4FkExWFc5LWFv5RGZdLdyzSMy3ZSSX76%2BPzGFs%3D";
const saveExperienceToCloud = async (
  userId: string,
  experienceId: string,
  apparatusId: string,
  actionList: any[]
): Promise<any> => {
  const experience = { Apparatus: apparatusId, Actions: actionList };

  const file = new File([JSON.stringify(experience)], `${experienceId}.json`);

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(
    `https://addressabletest1.blob.core.windows.net/?${sasToken}`
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
