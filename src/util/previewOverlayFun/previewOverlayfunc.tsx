import { Dispatch, SetStateAction, useState } from "react";
import { callToWebGL } from "../unityContextActions";

type ActionListType = {
    actionList: Array<[string,string,string]>
  };

  
const useSelected = ({actionList}:ActionListType):{selected : number, setCount :Dispatch<SetStateAction<number>>, cyclePreviewLeft: ReturnType<null>, cyclePreviewRight: ReturnType<null>} => {
    const [selected, setCount] = useState(0)

    function cyclePreviewRight() {
        return selected < actionList.length - 1 ? () => { setCount(selected + 1); callToWebGL(actionList[selected + 1][0], actionList[selected + 1][1]); } : (null);
        // same logic with the cyclePreviewLeft, but check if seleteced is the end of the actionList
    }
    
    function cyclePreviewLeft() {
        if(selected > 0){
            return ()=>  {setCount(selected - 1);callToWebGL(actionList[selected - 1][0], actionList[selected - 1][1]);}
        }
        return ()=>  {setCount(selected);callToWebGL(actionList[selected][0], actionList[selected][1]);}
        // return selected > 0 ? () => { setCount(selected - 1); callToWebGL(actionList[selected - 1][0], actionList[selected - 1][1]); }:() => {};

    }

    return {selected,setCount,cyclePreviewLeft,cyclePreviewRight};
}



export { useSelected };
export type { ActionListType };
