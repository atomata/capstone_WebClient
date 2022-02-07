import styled from "styled-components";
import { useActionBar } from "../../util/customHooks/ActionBar";

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

const SideBar = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1 / span 50;
  background-color: aliceblue;
  z-index: 2;
`;

const ActionBar = styled.div`
  grid-column: 4 / span 4;
  grid-row: 1 / span 36;
  background-color: #21415e;
  z-index: 2;
`;

const ActionSequenceBar = styled.div`
grid-column: 4 / span 47 ;
grid-row: 37 / span 14;
background-color: #a8ad68;
z-index: 2;   
`

function NewOverlay(): JSX.Element {
const { toggleSideBar, toggleActionList, sideBar,actionList } = useActionBar(); // ruochen double check this pls - Justin
  return (
    <Overlay>
      <OverlayGrid>
        <SideBar>
            <button type="button" onClick={toggleSideBar}>
              Side bar
            </button>
            <button
              type="button"
              onClick={() => {
                toggleActionList();
              }}
            >
              Action list
            </button>
        </SideBar>
       {actionList? <ActionBar/>: <div/>}
        <ActionSequenceBar/>
      </OverlayGrid>
    </Overlay>
  );
}

export default NewOverlay;
