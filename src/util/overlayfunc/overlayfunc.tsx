import { useState } from "react";

function addActionToList([path, input] : [string, string], hookinput: Array<[string, string]>,functioninput: Function){
    // const [actionList, setActionList] = useState([]);
    hookinput.push([path, input]);
    functioninput([...hookinput]);
}

function removeActionFromList(index, hookinput: Array<[string,string]>, functioninput: Function) {
    // const [actionList, setActionList] = useState([]);
    hookinput.splice(index, 1);
    functioninput([...hookinput]);
}

export {addActionToList, removeActionFromList}

