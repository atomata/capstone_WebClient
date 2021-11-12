import styled from "styled-components";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {Button} from "@material-ui/core";
import {callToWebGL} from "../../util/unityContextActions";
import {Metadata, parseActions} from "../../util/parsing";

const TriggerBox = styled.div`
  background: grey;
  min-width: 100%;
  overflow-y: scroll;
  border: 1px solid black;
  height: 18em;
`;

const ListHeading = styled.h1`
  font-size: 20px;
  text-align: center;
  font-family: Trebuchet MS;
  font-weight: bold;
  color: black;
`;

const ApparatusTriggerListBox = ({metadata,asset}: { metadata: Metadata , asset: string}) => {
    // dont use props as a props property, no caps,

    const actionMap = React.useMemo(() => parseActions(metadata), [metadata]);
    const actionlist = actionMap.get(asset);
    // everytime metadata is rendered we reparse metadata using useMemo hook
    if(actionlist !== undefined) {
        return (
            <TriggerBox>
                <ListHeading>Selected Apparatus Trigger List</ListHeading>
                {actionlist[1].map((data) => (
                    <Typography>
                        <Button
                            key={data}
                            variant="contained"
                            onClick={() => callToWebGL(actionlist[0],data)}
                            id={data}
                        >
                            {data}
                        </Button>
                    </Typography>
                ))}
            </TriggerBox>);
    }
    
        return (
            <TriggerBox>
            </TriggerBox>
        );
    
};
export default ApparatusTriggerListBox;
