import Button from '@mui/material/Button';
import styled from "styled-components";

const ActionListBox = styled.div`
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


const ActionSequenceBox = ({props}) => (
  <ActionListBox>
      <ListHeading>Action List</ListHeading>
      <ListButton><Button variant="contained" color="primary">{props}</Button><br/></ListButton> 
  </ActionListBox>
);
export default ActionSequenceBox;
