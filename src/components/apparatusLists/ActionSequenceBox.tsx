import Button from '@mui/material/Button';
import styled from "styled-components";
import React, {useState,useEffect} from "react";

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

const ListBoxScroller = styled.div`
  max-height: 13em;
  min-width: 100%;
  max-width: 100%;
  min-height: 12em;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ActionSequenceBox = ({actionList}) =>{
    return (
        <ActionListBox>
        <ListHeading>Action List</ListHeading>
        <ListBoxScroller>
            {actionList.map((data) => (
                <ListButton>
                    <Button variant="contained" color="secondary">
                        {data[1]}
                    </Button>
                </ListButton>
            ))}
        </ListBoxScroller>
    </ActionListBox>);
};
export default ActionSequenceBox;
