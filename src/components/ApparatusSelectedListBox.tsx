import { useState } from "react";
import styled from "styled-components";

const SelectledListBox = styled.div `
background: #2196F3;
width: 300px;
height: 450px;
margin-bottom: 2rem;
margin-top: 4rem;
position: absolute;
left: 2rem;
right: auto;
top: 0px;
p {
    font-size:20px;
    text-align: center;
    font-family: Trebuchet MS;
    font-weight: bold;
    }
`;
 
const ApparatusSelectedListBox = () => {
    return (
      <div>
        <SelectledListBox><p> Selected Apparatus List</p></SelectledListBox>
      </div>
    );
  };
export default ApparatusSelectedListBox;