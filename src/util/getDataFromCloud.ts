function getApparatusFromCloud(id) {
  return fetch(
    `https://capstonewebclient.blob.core.windows.net/apparatus/${  id  }.json`,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((responseJson) => responseJson);
}

function getExperienceFromCloud(userId,experienceId) {
  return fetch(
      `https://addressabletest1.blob.core.windows.net/${  userId  }/${  experienceId  }.json`,
      { mode: "cors" }
  )
      .then((response) => response.json())
      .then((responseJson) => responseJson)
}

export  {getApparatusFromCloud, getExperienceFromCloud}
