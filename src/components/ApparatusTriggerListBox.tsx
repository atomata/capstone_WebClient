import { useState } from "react";
import styled from "styled-components";

const TriggerBox = styled.div`
  background: grey;
  min-width: 100%;
  min-height: 100%;
  /* margin-bottom: 2rem;
margin-top: 1rem;
position: absolute;
left: 2rem;
right: auto;
bottom: 0px;
top: 535px; */
  p {
    font-size: 1em;
    text-align: center;
    font-family: Trebuchet MS;
    font-weight: bold;
    margin: 0;
  }
`;

const ApparatusTriggerListBox = () => (
  <TriggerBox>
    <p>Selected Apparatus Trigger List</p>
  </TriggerBox>
);
export default ApparatusTriggerListBox;
