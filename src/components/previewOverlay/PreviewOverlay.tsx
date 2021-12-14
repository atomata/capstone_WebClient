import styled from "styled-components";

const PreviewRoot = styled.div`
  display: absolute;
  width: inherit;
  height: 850px;
  opacity: 1;
  pointer-events: auto;
`;
const PreviewGrid = styled.div`
  display: grid;
  width: inherit;
  height: inherit;
  grid-template-columns: repeat(19, 1fr);
  grid-template-rows: repeat(9, 1fr);
`;

const PreviewGridLeft = styled.div`
  background-color: #1b791b;
  grid-column: 5 / span 1;
  grid-row: 10 / span 1;
  z-index: 2;
  pointer-events: auto;
  margin: 5%;
  min-height: 3em;
  min-width: 2em;
`;

const PreviewGridCenter = styled.div`
  background-color: #814e8b;
  grid-column: 7 / span 7 ;
  grid-row: 10 / span 1;
  z-index: 2;
  pointer-events: auto;
  margin: 5%;
  min-height: 3em;
  min-width: inherit;
`;

const PreviewGridRight = styled.div`
  background-color: #4e578b;
  grid-column: 15 / span 1;
  grid-row: 10 / span 1;
  z-index: 2;
  pointer-events: auto;
  margin: 5%;
  min-height: 3em;
  min-width: 2em;
`;

function PreviewOverlay({ userId, experienceData }): JSX.Element {
  return (
    <PreviewRoot>
      <PreviewGrid>
        <PreviewGridLeft/>
        <PreviewGridCenter/>
        <PreviewGridRight/>
      </PreviewGrid>
    </PreviewRoot>
  );
}

export default PreviewOverlay;
