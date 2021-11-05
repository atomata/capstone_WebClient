import styled from "styled-components";
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useState } from "react";
import { Button } from "@material-ui/core";

const TriggerBox = styled.div`
  background: grey;
  min-width: 100%;
  overflow-y: scroll;
  border: 1px solid black;
  height: 18em;
`;

const ListHeading = styled.h1 `
font-size:20px;
text-align: center;
font-family: Trebuchet MS;
font-weight: bold;
color: black;
`
const ListButton = styled.div `
  text-align: center;
  margin: 5px;
`

const ApparatusTriggerListBox = ({props}) => {

  let actionArray = [];
  // Array holds
  // [id][0] = path = props.Paths[id]
  // [id][1] = name
  // [id][2+] = actions

  for (let i = 0; i < props.Data.length; i++) {
    let identifier = props.Data[i].split('@');
    let action = identifier[1].split(':');

    if(action[0] == "input"){
      if(actionArray[identifier[0]] == null || actionArray[identifier[0]] == undefined)
        actionArray[identifier[0]] = [props.Paths[identifier[0]], props.Data[i-1].split('@')[1].split(':')[1]];
      actionArray[identifier[0]].push([action[2]]);
    }
  };

  function callToWebGL(path, input){
    alert(path + "@" + input +"?false");
    //uin.SendMessage()
  }

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
                  {data.map(function(input, i){
                      if(i > 1){
                        return <Button key={i} variant="contained" onClick={() => callToWebGL(data[0], data[i])} id={data[0]}>{input}</Button>
                      }    
                  })}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>)
        )}
    
  </TriggerBox>
  );
};
export default ApparatusTriggerListBox;
