// Getting the data for evil-cylinder. the url currently is hard coded
// Will change after creating the table of apparatus
export function getjsonfromurl (){
    return fetch('https://capstonewebclient.blob.core.windows.net/apparatus/evil-cylinder.json')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
    })
    .catch((error) => {
        console.error(error)
    })
}