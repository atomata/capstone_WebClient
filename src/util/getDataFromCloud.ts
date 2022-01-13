// TODO change the link to cloud
function getApparatusFromCloud(id: string): Promise<any> {
  return fetch(
    `https://capstonewebclient.blob.core.windows.net/apparatus/${id}.json`,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((responseJson) => responseJson);
}

function getExperienceFromCloud(
  userId: string,
  experienceId: string
): Promise<any> {
  return fetch(
    `https://addressabletest1.blob.core.windows.net/${userId}/${experienceId}.json`,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((responseJson) => responseJson);
}

export { getApparatusFromCloud, getExperienceFromCloud };
