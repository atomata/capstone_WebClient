/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

function addActionToList([path, input] : [string, string], hookinput: Array<[string, string]>,functioninput: Function){
    hookinput.push([path, input]);
    functioninput([...hookinput]);
}

function removeActionFromList(index, hookinput: Array<[string,string]>, functioninput: Function) {
    hookinput.splice(index, 1);
    functioninput([...hookinput]);
}

export {addActionToList, removeActionFromList}
