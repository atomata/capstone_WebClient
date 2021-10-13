import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {
    BlobDownloadResponseParsed,
    BlobServiceClient
} from "@azure/storage-blob";


const getPic = async (): Promise<BlobDownloadResponseParsed> => BlobServiceClient.fromConnectionString("DefaultEndpointsProtocol=https;AccountName=capstonewebclient;AccountKey=q9g8YPdHkWgsVQyV37v7puMfLzRfSrZH3ufZnB4DGzq1WSnkYgz3KSFVy0JW1vB0lNigYhEvl4k0GHm5yDS1aA==;EndpointSuffix=core.windows.net"

).getContainerClient("cat").getBlobClient("collcat.jpg").download(0,undefined,{maxRetryRequests: 20})

const httpTrigger: AzureFunction = 
    async (context: Context): Promise<void> => {
      context.log("Function triggered - kitty requested");
      const resp = await getPic();
      context.log(`Got response from blob storage: ${resp.contentLength} bytes`);
  
      context.res = {
        status: 200,
        headers: {
          "Content-Type": resp.contentType,
        },
        body: Buffer.of(),
      };
  
      // Read data into response
      await new Promise((res, rej) => {
        resp.readableStreamBody.on("end", res);
        resp.readableStreamBody.on("error", rej);
        resp.readableStreamBody.on("data", (d) => {
          context.res.body = Buffer.concat([
            context.res.body,
            d instanceof Buffer ? d : Buffer.from(d),
          ]);
        });
      });
    };
export default httpTrigger;