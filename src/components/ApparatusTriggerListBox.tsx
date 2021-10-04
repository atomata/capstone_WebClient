import { useState } from "react";
import styled from "styled-components";

const TriggerBox = styled.div `
background: grey;
width: 1135px;
height: 165px;
margin-bottom: 2rem;
margin-top: 1rem;
position: absolute;
left: 2rem;
right: auto;
bottom: 0px;
top: 535px;
p {
    font-size:20px;
    text-align: center;
    font-family: Trebuchet MS;
    font-weight: bold;
  }
`;

const ApparatusTriggerListBox = () => {
    return (
      <div>
        <TriggerBox><p>Selected Apparatus Trigger List</p></TriggerBox>
      </div>
    );
  };
export default ApparatusTriggerListBox;