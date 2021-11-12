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

const ApparatusTriggerListBox = ({metadata}: { metadata: Metadata }) => {
    // dont use props as a props property, no caps,

    const actionMap = React.useMemo(() => parseActions(metadata), [metadata]);
    const actionlist = actionMap.get("wobble-sphere");
    // everytime metadata is rendered we reparse metadata using useMemo hook

    return (
        <TriggerBox>
            <ListHeading>Selected Apparatus Trigger List</ListHeading>
            {actionlist.map((data) => (
                <Typography>
                    <Button
                        key={data[0]}
                        variant="contained"
                        onClick={() => callToWebGL(data[1], data[0])}
                        id={data[0]}
                    >
                        {data[0]}
                    </Button>
                </Typography>
            ))}
        </TriggerBox>);
};
export default ApparatusTriggerListBox;
