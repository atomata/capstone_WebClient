import { useState } from "react";
import styled from "styled-components";

const SelectledListBox = styled.div`
  background: #2196f3;
  min-width: 100%;
  min-height: 100%;
  //margin-bottom: 2rem;
  //margin-top: 4rem;
  //position: absolute;
  //left: 2rem;
  //right: auto;
  //top: 0px;
  p {
    font-size: 1em;
    text-align: center;
    font-family: Trebuchet MS;
    font-weight: bold;
    margin: 0;
  }
`;

const ApparatusSelectedListBox = () => (
  <SelectledListBox>
      <p> Selected Apparatus List</p>
  </SelectledListBox>
);
export default ApparatusSelectedListBox;
