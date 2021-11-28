/* eslint-disable arrow-body-style */
async function getjsonfromurl(id: string) {
  try {
    const response = await fetch(
      `https://capstonewebclient.blob.core.windows.net/apparatus/${id}.json`,
      { mode: "cors" }
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
}

export default getjsonfromurl