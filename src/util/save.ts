import { BlobServiceClient, ContainerClient} from '@azure/storage-blob';

const containerName = `experiences`;
const sasToken = '?sv=2020-08-04&ss=b&srt=sco&sp=rwdlacitfx&se=2021-11-28T23:17:21Z&st=2021-11-28T03:17:21Z&spr=https&sig=Bzk26Orlp4qR1A01RF24e6Y5NQGnTtsvXYx1p9aggxU%3D';


const uploadFileToBlob = async (file: File | null): Promise<string[]> => {
    if (!file) return [];

    // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
    const blobService = new BlobServiceClient(
        `https://addressabletest1.blob.core.windows.net/?${sasToken}`
    );

    // get Container - full public read access
    const containerClient: ContainerClient = blobService.getContainerClient(containerName);

    // create blobClient for container
    const blobClient = containerClient.getBlockBlobClient(file.name);

    // set mimetype as determined from browser with file upload control
    const options = { blobHTTPHeaders: { blobContentType: file.type } };
    // upload file
    await blobClient.uploadData(file, options);
};
// </snippet_uploadFileToBlob>

export default uploadFileToBlob;