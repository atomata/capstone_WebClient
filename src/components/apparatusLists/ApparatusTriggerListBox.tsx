import styled from "styled-components";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {Button} from "@material-ui/core";
import {callToWebGL} from "../../util/unityContextActions";
import {Metadata, parseActions} from "../../util/parsing";

const TriggerBox = styled.div`
  background: #fffaf0;
  border: 1px solid black;
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;
  max-width: 100%;
`;

const ListBoxScroller = styled.div`
  max-height: 13em;
  min-width: 100%;
  max-width: 100%;
  min-height: 12em;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ListHeading = styled.h1`
  font-size: 20px;
  text-align: center;
  font-family: Trebuchet MS;
  font-weight: bold;
  color: black;
`;


const ListButton = styled.div`
  text-align: center;
  margin: 5px;
`;

const ApparatusTriggerListBox = ({metadata, asset}: { metadata: Metadata, asset: string }) => {
    // dont use props as a props property, no caps,

    const actionMap = React.useMemo(() => parseActions(metadata), [metadata]);
    const actionlist = actionMap.get(asset);
    // everytime metadata is rendered we reparse metadata using useMemo hook
    if (actionlist !== undefined) {
        return (
            <TriggerBox>
                <ListHeading>Selected Apparatus Trigger List</ListHeading>
                <ListBoxScroller>
                    {actionlist[1].map((data) => (
                            <ListButton>
                                <Button
                                    key={data}
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => callToWebGL(actionlist[0], data)}
                                    id={data}
                                >
                                    {data}
                                </Button>
                            </ListButton>
                    ))}
                </ListBoxScroller>
            </TriggerBox>);
    }
    return (
        <TriggerBox>
        </TriggerBox>
    );

};
export default ApparatusTriggerListBox;
