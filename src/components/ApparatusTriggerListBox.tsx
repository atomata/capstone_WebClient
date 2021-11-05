import styled from "styled-components";
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from "react";
import DropddownList from "../components/DropdownListBox";

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
  
    return (
  <TriggerBox>
    <ListHeading>Selected Apparatus Trigger List</ListHeading>
    <DropddownList buttonName={props.Paths[2]} buttonOption={props.Data}/> 
  </TriggerBox>
  );
};
export default ApparatusTriggerListBox;
