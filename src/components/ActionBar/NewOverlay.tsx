import styled from "styled-components";
import { useActionBar } from "../../util/customHooks/ActionBar";
import ActionBar from "./ActionBar";
import SideBar from "./SideBar";

const Overlay = styled.div`
  display: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 0;
`;

const OverlayGrid = styled.div`
  display: grid;
  width: inherit;
  height: inherit;
  z-index: 2;
  grid-template-columns: repeat(50, 1fr);
  grid-template-rows: repeat(50, 1fr);
`;

const SideBarGrid = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1 / span 50;
  background-color: aliceblue;
  z-index: 2;
`;

const ActionBarGrid = styled.div`
  grid-column: 4 / span 7;
  grid-row: 1 / span 39;
  background-color: #21415e;
  z-index: 2;
  padding:0.5em;
`;

const ActionSequenceBarGrid = styled.div`
  grid-column: 4 / span 47;
  grid-row: 40 / span 11;
  background-color: #a8ad68;
  z-index: 2;
`;

const TextEditorGrid = styled.div`
  grid-column: 18/ span 20;
  grid-row: 30 / span 8;
  z-index: 2;
  background-color: #0c0475;
`
function NewOverlay(): JSX.Element {
  const {actionList } =
    useActionBar(); // ruochen double check this pls - Justin
  return (
    <Overlay>
      <OverlayGrid>
        <SideBarGrid>
           <SideBar/>
        </SideBarGrid>
        {actionList ? <ActionBarGrid>
          <ActionBar/>
        </ActionBarGrid>: <div />}
        <ActionSequenceBarGrid />
        <TextEditorGrid/>
      </OverlayGrid>
    </Overlay>
  );
}

export default NewOverlay;
