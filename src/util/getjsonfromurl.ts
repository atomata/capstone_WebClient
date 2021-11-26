async function getjsonfromurl(id: unknown): Promise<unknown> {
  try {
    const response = await fetch(
      `https://capstonewebclient.blob.core.windows.net/apparatus/${id}.json`,
      { mode: "cors" }
    );
    return await response.json();
  } catch (error) {
    return error;
  }
}

export { getjsonfromurl };
