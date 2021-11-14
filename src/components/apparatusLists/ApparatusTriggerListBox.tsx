import styled from "styled-components";
import * as React from "react";
import {Button, IconButton, List,ListItem, ListItemSecondaryAction} from "@material-ui/core";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
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
  text-align: left;
  margin: 10px;
`;

const ApparatusTriggerListBox = ({metadata, identifier, addAction}) => {
    // dont use props as a props property, no caps,

    const actionMap = React.useMemo(() => parseActions(metadata), [metadata]);
    const actionlist = actionMap.get(identifier);
    // everytime metadata is rendered we reparse metadata using useMemo hook
    if (actionlist !== undefined) {
        return (
            <TriggerBox>
                <ListHeading>Selected Apparatus Trigger List</ListHeading>
                <ListBoxScroller>
                    {actionlist[1].map((data) => (
                        <List>
                            <ListItem>
                                <Button
                                    key={data}
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => callToWebGL(actionlist[0], data)}
                                    id={data}
                                >
                                    {data}
                                </Button>
                            </ListItem>
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => addAction([actionlist[0], data])}>
                                    <AddOutlinedIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </List>
                    ))}
                </ListBoxScroller>
            </TriggerBox>);
    }
    return (
        <TriggerBox>
            <ListHeading>Selected Apparatus Trigger List</ListHeading>
        </TriggerBox>
    );

};
export default ApparatusTriggerListBox;
