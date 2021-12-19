import { ContainerClient } from "@azure/storage-blob";

let ExperienceName: string;

function setExperienceName(name :string){
    ExperienceName=name;
}

function getExperienceName(){
    return (ExperienceName);
}

const getBlobsInContainer = async (userId) => {
    const returnedBlobUrls: string[] = [];

    var storageConnectionString = `https://addressabletest1.blob.core.windows.net/${  userId  }`;
    var containerClient = new ContainerClient(storageConnectionString,);

    // get list of blobs in container
    // eslint-disable-next-line
    for await (const blob of containerClient.listBlobsFlat()) {
        returnedBlobUrls.push(
            `https://addressabletest1.blob.core.windows.net/${userId}/${blob.name}`
        )
        
    }

    return returnedBlobUrls;
}

export {setExperienceName,getExperienceName, getBlobsInContainer}