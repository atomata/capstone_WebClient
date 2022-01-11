import styled from "styled-components";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import { Button, IconButton } from "@material-ui/core";
import { callToWebGL } from "../../util/unityContextActions";
import { useSelected } from "../../util/previewOverlayFun/previewOverlayfunc";

const PreviewRoot = styled.div`
  display: absolute;
  width: inherit;
  height: 900px;
  opacity: 1;
  pointer-events: auto;
`;
const PreviewGrid = styled.div`
  display: grid;
  width: inherit;
  height: inherit;
  grid-template-columns: repeat(19, 1fr);
  grid-template-rows: repeat(15, 1fr);
`;

const PreviewGridLeft = styled.div`
  grid-column: 5 / span 1;
  grid-row: 14 / span 1;
  z-index: 2;
  pointer-events: auto;
  margin: 5%;
  min-height: 2em;
  min-width: 2em;
`;

const PreviewGridCenter = styled.div`
  grid-column: 7 / span 7;
  grid-row: 13 / span 1;
  z-index: 2;
  pointer-events: auto;
  margin: 5%;
  min-height: 1em;
  min-width: inherit;
  padding-left: 10%;
  padding-right: 10%;
`;

const PreviewGridRight = styled.div`
  grid-column: 15 / span 1;
  grid-row: 14 / span 1;
  z-index: 2;
  pointer-events: auto;
  margin: 5%;
  min-height: 2em;
  min-width: 2em;
`;

const ActionTabList = styled.div`
  display: flex;
  overflow-x: scroll;
  align-items: center;
`;
const ActionTabListItem = styled.div`
  min-height: 1em;
  outline-style: solid;
  outline-width: 0.1em;
  outline-color: black;
  margin: 1em;
  align-self: center;
`;

const ActionTabSelectedListItem = styled.div`
background-color: white;
`;

type PreviewOverlayProps = {
  actionList: Array<[string,string,string]>
};

function PreviewOverlay({actionList}:PreviewOverlayProps): JSX.Element {

  const {selected, setCount, cyclePreviewLeft,cyclePreviewRight} = useSelected({actionList})

  return (
    <PreviewRoot>
      
      {actionList[0] !== undefined ? 
      <PreviewGrid>
        <PreviewGridLeft>
          <IconButton
            style={{
              minWidth: "100%",
              minHeight: "100%",
              outlineStyle: "solid",
              outlineWidth: "0.1em",
              outlineColor: "black",
            }}
            onClick={cyclePreviewLeft()}
          >
            <ChevronLeftSharpIcon  />
          </IconButton>
        </PreviewGridLeft>
        <PreviewGridCenter>
          <ActionTabList>
            {actionList.map((data, index) => (  
            <ActionTabListItem key={index}>
              {selected===index ? <ActionTabSelectedListItem>
                <Button onClick={() => {callToWebGL(data[0], data[1]); setCount(index)}}>{index}</Button>
              </ActionTabSelectedListItem>:<Button onClick={() => {callToWebGL(data[0], data[1]); setCount(index)}}>{index}</Button>}
            </ActionTabListItem>   
            ))}
          </ActionTabList>
        </PreviewGridCenter> 
        <PreviewGridRight>
          <IconButton
            style={{
              minWidth: "100%",
              minHeight: "100%",
              outlineStyle: "solid",
              outlineWidth: "0.1em",
              outlineColor: "black",
            }}
            onClick={cyclePreviewRight()}
          >
            <ChevronRightSharpIcon  />
          </IconButton>
        </PreviewGridRight>
        
      </PreviewGrid>
      : <div/>}
    </PreviewRoot>
  );

}

export default PreviewOverlay;
