import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
import { getExperienceFromCloud } from "./getDataFromCloud";

const containerName = `experiences`;
const sasToken =
  "?sv=2020-08-04&ss=b&srt=sco&sp=rwdlacitfx&se=2021-11-28T23:17:21Z&st=2021-11-28T03:17:21Z&spr=https&sig=Bzk26Orlp4qR1A01RF24e6Y5NQGnTtsvXYx1p9aggxU%3D";

const saveExperienceToCloud = async (
  userId: string,
  experienceId: string,
  apparatusId: string,
  actionList: any[]
): Promise<any> => {
  const experience = { Apparatus: apparatusId, Actions: actionList };
  let userdata = {};
  getExperienceFromCloud(userId).then(async (responseJson) => {
    // The user file exists. then either we are adding a new experience or we are modifying an existing experience
    if (responseJson !== null) {
      userdata = responseJson;
      console.log("the response value is ", responseJson);
    }
    userdata[experienceId] = experience;
    const file = new File([JSON.stringify(userdata)], `${userId}.json`);

    // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
    const blobService = new BlobServiceClient(
      `https://addressabletest1.blob.core.windows.net/?${sasToken}`
    );

    // get Container - full public read access
    const containerClient: ContainerClient =
      blobService.getContainerClient(containerName);

    // create blobClient for container
    const blobClient = containerClient.getBlockBlobClient(file.name);

    // set mimetype as determined from browser with file upload control
    const options = { blobHTTPHeaders: { blobContentType: file.type } };
    // upload file
    await blobClient.uploadData(file, options);
  });
};
// </snippet_uploadFileToBlob>

export default saveExperienceToCloud;
