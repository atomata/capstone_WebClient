import styled from "styled-components";
import { useState } from "react";
import ActionSequenceBox from "../apparatusLists/ActionSequenceBox";
import ActionBox from "../apparatusLists/ActionBox";
import ApparatusListBox from "../apparatusLists/ApparatusListBox";

const OverlayRoot = styled.div`
  display: absolute;
  width: inherit;
  height: inherit;
  z-index: 0;
  opacity: 1;
  pointer-events: none;
`;

const OverlayShown = styled.div`
  display: absolute;
  width: inherit;
  height: inherit;
  opacity: 1;
  pointer-events: auto;
`;

const OverlayHidden = styled.div`
  display: absolute;
  width: inherit;
  height: inherit;
  opacity: 0;
  pointer-events: none;
`;

const OverlayGrid = styled.div`
  display: grid;
  width: inherit;
  height: inherit;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
`;

const OverlayGridItem1 = styled.div`
  background-color: red;
  grid-column: 1 / span 2;
  grid-row: 2 / span 4;
  z-index: 2;
  pointer-events: auto;
  margin: 5%;
`;

const OverlayGridItem2 = styled.div`
  background-color: #00ffbf;
  grid-column: 8 / span 2;
  grid-row: 2 / span 7;
  padding: none;
  z-index: 2;
  pointer-events: auto;
  margin: 5%;
`;

const OverlayGridItem3 = styled.div`
  background-color: red;
  grid-column: 1 / span 2;
  grid-row: 6 / span 4;
  z-index: 2;
  pointer-events: auto;
  margin: 5%;
`;

const ToggleDiv = styled.div`
  position: absolute;
  pointer-events: auto;
  z-index: 3;
`;
const ToggleOverlayButton = styled.button.attrs({
  children: "Toggle Overlay",
})`
  background-color: rgba(0, 0, 255, 0.5);
  width: 8em;
  height: 3em;
  z-index: inherit;
  pointer-events: auto;
  margin: 0.75em;
  color: white;
`;

function Overlay({ json }: { json: any }): JSX.Element {
  const [assetbundle, setAssetbundle] = useState({});
  const [showOverlay, setOverlay] = useState(false);
  const [actionList, setActionList] = useState([]);

  function addActionToList([path, input]) {
    actionList.push([path, input]);
    setActionList([...actionList]);
  }

  function removeActionFromList(index) {
    actionList.splice(index, 1);
    setActionList([...actionList]);
  }

  const toggleOverlay = () => {
    setOverlay((show) => !show);
  };

   //Setting the postion of the item dragged and dropped.
   function handleOnDragEnd (result) {

    //dropped outside the list
    if (!result.destination) {
      return;
    }
   //console.log(result);
    const items = actionList;
    const [reorderItem] = items.splice(result.source.index,1);
    items.splice(result.destination.index, 0, reorderItem);
  }

  return (
    <OverlayRoot>
      <ToggleDiv>
        <ToggleOverlayButton onClick={toggleOverlay} />
      </ToggleDiv>
      {showOverlay ? (
        <OverlayShown>
          <OverlayGrid>
            <OverlayGridItem1>
              <ApparatusListBox
                metadata={json.Metadata}
                handleApparatusChange={(data) => setAssetbundle(data)}
              />
            </OverlayGridItem1>
            <OverlayGridItem2>
              <ActionSequenceBox
                actionList={actionList}
                removeAction={(index) => removeActionFromList(index)}
                handleOnDragEnd = {handleOnDragEnd}
              />
            </OverlayGridItem2>
            <OverlayGridItem3>
              <ActionBox
                assetbundle={assetbundle}
                addAction={([path, input]) => addActionToList([path, input])}
              />
            </OverlayGridItem3>
          </OverlayGrid>
        </OverlayShown>
      ) : (
        <OverlayHidden/>
      )}
    </OverlayRoot>
  );
}
export default Overlay;
