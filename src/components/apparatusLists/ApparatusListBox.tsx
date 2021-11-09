import Button from '@mui/material/Button';
import styled from "styled-components";
import { load } from '../../util/unityContextActions';


const ListBox = styled.div `
background: #FFFAF0;
border: 1px solid black;
min-width: 100%;
min-height: 100%;
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

const ApparatusListBox = (props) => (
        <ListBox>
          <ListHeading>Apparatus List</ListHeading>
          <ListButton>
            <Button variant="contained" color="secondary" onClick = {() => load(props.sphere)}>{props.sphere}</Button>
            <br/>
            <br/>
            <Button variant="contained" color="secondary" onClick = {() => load(props.earth)}>{props.earth}</Button>
          </ListButton> 
        </ListBox>
    );
export default ApparatusListBox;