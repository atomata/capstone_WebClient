import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {
    BlobDownloadResponseParsed,
    BlobServiceClient,
  } from "@azure/storage-blob";

const getKitty = async (): Promise<BlobDownloadResponseParsed> =>
    BlobServiceClient.fromConnectionString(
    "AccountName=account;AccountKey=key1;DefaultEndpointsProtocol=http;BlobEndpoint=http://127.0.0.1:10000/account;"
    )
    .getContainerClient("dev")
    .getBlobClient("cat.jpg")
    .download(0, undefined, { maxRetryRequests: 20 });

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log("Function triggered - kitty requested");
    const resp = await getKitty();
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
  }


export default httpTrigger;