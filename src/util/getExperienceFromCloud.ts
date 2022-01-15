import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";

const sasToken =
  "?sv=2020-08-04&ss=b&srt=sco&sp=rwdlacitfx&se=2022-09-30T20:46:30Z&st=2021-11-30T13:46:30Z&spr=https&sig=e3MgX4FkExWFc5LWFv5RGZdLdyzSMy3ZSSX76%2BPzGFs%3D";

const getBlobsInContainer = async (userId) => {
  const returnedBlobUrls: string[] = [];

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(
    `https://addressabletest1.blob.core.windows.net/?${sasToken}`
  );

  // get Container - full public read access
  const containerClient: ContainerClient = blobService.getContainerClient(userId);

  // Ensures when new user can create experience
  await containerClient.createIfNotExists({
    access: "container",
  });

  // get list of blobs in container
  for await (const exp of containerClient.listBlobsFlat()) {
    const expName = exp.name.substring(0, exp.name.length - 5);
    returnedBlobUrls.push(expName);
  }
  return returnedBlobUrls;
};

export {getBlobsInContainer };
