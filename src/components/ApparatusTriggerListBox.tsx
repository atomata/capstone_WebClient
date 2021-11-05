import styled from "styled-components";
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from "react";
import DropddownList from "../components/DropdownListBox";
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
   
  //to resolve unit key issue
  let counter= 0;

  return (
  <TriggerBox>
    <ListHeading>Selected Apparatus Trigger List</ListHeading>
    {
      props.map((detail) => (
        <div key={counter++}>
          <ListButton><Button variant="contained" color="primary">{detail}</Button></ListButton>
        </div>))
    }
  </TriggerBox>
  );
};
export default ApparatusTriggerListBox;
