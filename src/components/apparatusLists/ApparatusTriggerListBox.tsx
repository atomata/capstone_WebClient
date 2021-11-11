import styled from "styled-components";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import { callToWebGL } from "../../util/unityContextActions";
import { parseActions, Metadata } from "../../util/parsing";

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

const ApparatusTriggerListBox = ({ metadata }: { metadata: Metadata }) => {
  // dont use props as a props property, no caps,

  const actionArray = React.useMemo(() => parseActions(metadata), [metadata]);
  // everytime metadata is rendered we reparse metadata using useMemo hook

  return (
    <TriggerBox>
      <ListHeading>Selected Apparatus Trigger List</ListHeading>
      {actionArray.map((data, index) => (
        <div key={index}>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{data[1]}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {data.map((input, i) => {
                  if (i > 1) {
                    return (
                      <Button
                        key={i}
                        variant="contained"
                        onClick={() => callToWebGL(data[0], data[i])}
                        id={data[0]}
                      >
                        {input}
                      </Button>
                    );
                  }
                  return <></>;
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </TriggerBox>
  );
};
export default ApparatusTriggerListBox;
