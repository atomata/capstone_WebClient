export function getjsonfromurl (){
    return fetch('https://capstonewebclient.blob.core.windows.net/apparatus/evil-cylinder.json',{mode:'no-cors'})
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson
    })
    .catch((error) => {
        console.error(error)
    })
}