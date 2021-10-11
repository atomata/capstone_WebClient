import styled from "styled-components";
import ApparatusSelectedListBox from "./ApparatusSelectedListBox";
import ApparatusTriggerListBox from "./ApparatusTriggerListBox";

const OverlayRoot = styled.div`
  display: absolute;
  width: inherit;
  height: inherit;
  z-index: 0;
  opacity: 0.4;
  pointer-events: none
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
  grid-row: 2 / span 6;
  z-index:2;
  pointer-events: auto;
`;

const OverlayGridItem2 = styled.div`
  background-color: #00ffbf;
  grid-column: 8 / span 2;
  grid-row: 2 / span 7;
  padding: none;
  z-index:2;
  pointer-events: auto;
`;

const OverlayGridItem3 = styled.div`
  background-color: #120b1a;
  grid-column: 3 / span 5;
  grid-row: 8 / span 2;
  z-index:2;
  pointer-events: auto;
`;

const JustinsSuperTestButton = styled.button.attrs({
    children: "Justin's MYSTERIOUS TEST BUTTON",
  })`
  background: #7fc985;
  width: 10em;
  height: 5em;
  margin-bottom: 2rem;
  margin-top: 4rem;
  position: absolute;
  z-index: inherit;
`;

const Overlay = (): JSX.Element => (
  <OverlayRoot>
    <OverlayGrid>
      <OverlayGridItem1>
        <ApparatusSelectedListBox />
      </OverlayGridItem1>
      <OverlayGridItem2>
          <JustinsSuperTestButton/>
      </OverlayGridItem2>
      <OverlayGridItem3>
        <ApparatusTriggerListBox />
      </OverlayGridItem3>
    </OverlayGrid>
  </OverlayRoot>
);
export default Overlay;
