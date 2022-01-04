/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { useState } from "react";


/*
*custom hook for overlay, action list
*/
const useActionList = (experienceData) => {

    const [actionList, setActionList] = useState(
        experienceData !== undefined
          ? experienceData.initializationData.actionList
          : []
      );

    function addActionToList([path, input, assetID] : [string, string, string], hookinput: Array<[string, string,string]>,functioninput: Function){
        hookinput.push([path, input,assetID]);
        functioninput([...hookinput]);
    }
    
    function removeActionFromList(index, hookinput: Array<[string,string]>, functioninput: Function) {
        hookinput.splice(index, 1);
        functioninput([...hookinput]);
    }

    return {actionList, setActionList, addActionToList, removeActionFromList}
}

/*
*custom hook for overlay, action list
*/
const useOverlay = () => {
    const [showOverlay, setOverlay] = useState(true)
    
    const toggleOverlay = () => {
        setOverlay((show) => !show)
    }

    return {showOverlay,toggleOverlay}
}

export {useOverlay, useActionList}

