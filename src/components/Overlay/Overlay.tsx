import styled from "styled-components";
import { useState } from "react";
import ActionSequenceBox from "../apparatusLists/ActionSequenceBox";
import ApparatusTriggerListBox from "../apparatusLists/ApparatusTriggerListBox";
import ApparatusListBox from "../apparatusLists/ApparatusListBox";
import wobbleSphere from "../../data/wobble-sphere.json";
import evilCylinder from "../../data/evil-cylinder.json";

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
  background-color: #120b1a;
  grid-column: 1 / span 2;
  grid-row: 6 / span 2;
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

function Overlay(): JSX.Element {
  const [apparatus, setApparatus] = useState("wobble-sphere");
  const [showOverlay,setOverlay] = useState(false);


  const toggleOverlay = () => {
    setOverlay((show) => !show);
  };
  return (
    <OverlayRoot>
      <ToggleDiv>
        <ToggleOverlayButton onClick={toggleOverlay} />
      </ToggleDiv>
      {showOverlay ? (
        <OverlayShown>
          <OverlayGrid>
            <OverlayGridItem1>
              <ApparatusListBox metadata={evilCylinder.Metadata} handleApparatusChange={(data) => setApparatus(data)}/>
            </OverlayGridItem1>
            <OverlayGridItem2>
              <ActionSequenceBox metadata={evilCylinder.Metadata} />
            </OverlayGridItem2>
            <OverlayGridItem3>
              <ApparatusTriggerListBox metadata={evilCylinder.Metadata} asset= {apparatus} />
            </OverlayGridItem3>
          </OverlayGrid>
        </OverlayShown>
      ) : (
        <OverlayHidden>
          <OverlayGrid>
            <OverlayGridItem1>
              <ApparatusListBox metadata={evilCylinder.Metadata} handleApparatusChange={(data) => setApparatus(data)}/>
            </OverlayGridItem1>
            <OverlayGridItem2>
              <ActionSequenceBox metadata={evilCylinder.Metadata} />
            </OverlayGridItem2>
            <OverlayGridItem3>
              <ApparatusTriggerListBox metadata={evilCylinder.Metadata} asset={apparatus} />
            </OverlayGridItem3>
          </OverlayGrid>
        </OverlayHidden>
      )}
    </OverlayRoot>
  );
}
export default Overlay;
