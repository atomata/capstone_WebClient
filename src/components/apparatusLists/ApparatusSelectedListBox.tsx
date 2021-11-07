import Button from '@mui/material/Button';
import styled from "styled-components";

const SelectledListBox = styled.div`
  background: #FFFDD0;
  min-width: 100%;
  min-height: 100%;
  border: 1px solid black;
  overflow-y: scroll;
`;

const ListHeading = styled.h1 `
font-size:20px;
text-align: center;
font-family: Trebuchet MS;
font-weight: bold;
color: black;
`;

const ListButton = styled.div `
  text-align: center;
  margin: 5px;
`;


const ApparatusSelectedListBox = ({props}) => (
  <SelectledListBox>
      <ListHeading>Selected Apparatus List</ListHeading>
      <ListButton><Button variant="contained" color="primary">{props}</Button><br/></ListButton> 
  </SelectledListBox>
);
export default ApparatusSelectedListBox;
