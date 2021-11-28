function getjsonfromurl(id) {
  return fetch(
    `https://capstonewebclient.blob.core.windows.net/apparatus/${  id  }.json`,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((responseJson) => responseJson)
    .catch((error) => error);
}

export default getjsonfromurl
