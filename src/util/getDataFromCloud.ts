function getApparatusFromCloud(id) {
  return fetch(
    `https://capstonewebclient.blob.core.windows.net/apparatus/${  id  }.json`,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((responseJson) => responseJson)
    .catch((error) => error);
}

function getExperienceFromCloud(userId,experienceId) {
  return fetch(
      `https://addressabletest1.blob.core.windows.net/${  userId  }/${  experienceId  }.json`,
      { mode: "cors" }
  )
      .then((response) => response.json())
      .then((responseJson) => responseJson)
      .catch((error) => {console.log("error ", error); return null;})
}

export  {getApparatusFromCloud, getExperienceFromCloud}
