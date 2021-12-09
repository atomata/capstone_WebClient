import styled from "styled-components";
import Link from "next/link";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from "react";

const OuterBox = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left:20%;
  margin-right:20%;
  padding: 20px;
  weight: 100%;
  height:100%;
  background: #D0D0D0;
  border: 2px solid black;
`;

const InnerBox = styled.div`
  font-family: Trebuchet MS;
  font-weight: bold;
  border: 2px solid black;
  background: white;
  flex-direction: column;
  justify-items: center;
  display: flex;
  min-height: 12em;
  max-height: 13em;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ListHeading = styled.h1`
  font-size: 20px;
  text-align: center;
  font-family: Trebuchet MS;
  font-weight: bold;
  color: black;
`;

const LoadButton = styled.button`
background-color: #555555;
border: 1px solid black;
color: white;
font-weight: bold;
padding: 15px 32px;
font-size: 16px;
margin: 2px 2px;
cursor: pointer;
font-family: Trebuchet MS;
`;

const CreateButton = styled.button`
background-color: #555555;
border: 2px solid black;
color: white;
font-weight: bold;
padding: 15px 36px;
width: 50%;
font-size: 16px;
margin-left: 1%;
cursor: pointer;
font-family: Trebuchet MS;
`;

const CreateInnerBox = styled.div`
  margin-top:2%;
`;

const CreateExperience = () => {
  return (
    <CreateInnerBox>
    <Box sx={{ display: 'flex', alignItems: 'center'}}>
      <TextField fullWidth helperText="Enter a name for your new experience" variant="standard"/>
      <Link href={{ pathname: "/apparatusLibrary" }} >
          <CreateButton> Create New Experience </CreateButton>
      </Link>
    </Box>
    </CreateInnerBox>
  );
}

const LoadExperience = () => {
    return (
      <InnerBox>
        <Link href={{ pathname: "/apparatusLibrary" }}>
          <LoadButton>Experience 1</LoadButton>
        </Link>
        <Link href={{ pathname: "/apparatusLibrary" }}>
          <LoadButton>Experience 2</LoadButton>
        </Link>
        <Link href={{ pathname: "/apparatusLibrary" }}>
          <LoadButton>Experience 3</LoadButton>
        </Link>
        <Link href={{ pathname: "/apparatusLibrary" }}>
          <LoadButton>Experience 4</LoadButton>
        </Link>
        <Link href={{ pathname: "/apparatusLibrary" }}>
          <LoadButton>Experience 5</LoadButton>
        </Link>
        <Link href={{ pathname: "/apparatusLibrary" }}>
          <LoadButton>Experience 6</LoadButton>
        </Link>          
      </InnerBox>
    );
  };
  
  const WorkBench = (): JSX.Element => {

    return (
      <OuterBox>
        <ListHeading>Load an Experience</ListHeading>
        <LoadExperience />
        <CreateExperience />
      </OuterBox>
    );

  }
  
  export default WorkBench;