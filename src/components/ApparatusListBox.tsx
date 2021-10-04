import { useState } from "react";
import styled from "styled-components";

const ListBox = styled.div `
background: #ff9800;
width: 300px;
height: 650px;
margin-top: 4rem;
margin-bottom: 2rem;
position: absolute;
left: auto;
right: 2rem;
top: 0px;
p {
font-size:20px;
text-align: center;
font-family: Trebuchet MS;
font-weight: bold;
}
`;

const ApparatusListBox = () => {
    return (
      <div>
        <ListBox><p>Apparatus List</p></ListBox>
      </div>
    );
  };
export default ApparatusListBox;