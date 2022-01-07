import { useState } from "react";
import { callToWebGL } from "../unityContextActions";

const useSelected = ({actionList}) => {

    const [selected, setCount] = useState(0)

    function cyclePreviewRight() {
        return selected < actionList.length - 1 ? () => { setCount(selected + 1); callToWebGL(actionList[selected + 1][0], actionList[selected + 1][1]); } : undefined;
    }
    
    function cyclePreviewLeft() {
        return selected > 0 ? () => { setCount(selected - 1); callToWebGL(actionList[selected - 1][0], actionList[selected - 1][1]); } : undefined;
    }

    return{selected,setCount, cyclePreviewLeft,cyclePreviewRight};
}



export {useSelected}