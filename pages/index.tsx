import Link from "next/link";
import {Button} from "@material-ui/core";
import { useEffect, useState } from "react";
import { verifyLogIn, logOut, checkIfLoggedIn, getUserName } from "../src/util/loginCookies";
import styled from "styled-components";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from "react";
//import { useExperienceName, getExperienceName } from "../src/util/getExperienceName";


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

const CreateExperience = ({setHook, viewHook}) => {
  return (
    <CreateInnerBox>
    <Box sx={{ display: 'flex', alignItems: 'center'}}>
      <TextField fullWidth helperText="Enter a name for your new experience" 
      onChange={(e) => setHook(e.target.value)}
      variant="standard"/>
      <Link key="selectionPage" href={{ pathname: "/selection",}}>
          <CreateButton> Create New Experience </CreateButton>
      </Link>
    </Box>
    </CreateInnerBox>
  );
}

const LoadExperience = () => {
  //const experienceId = getExperienceName();
    return (
      <InnerBox>
        <Link key="selectionPage" href={{ pathname: "/selection",}}>
          <LoadButton>Experience 1</LoadButton>
        </Link>
        <Link key="experiencePage" href={{pathname: "/experience", query: { dataId: "testexp1", isApparatusId: false }, }} >
          <LoadButton>Experience 2</LoadButton>
        </Link>
        <Link key="experiencePage" href={{pathname: "/experience", query: { dataId: "testexp1" , isApparatusId: false }, }} >
          <LoadButton >Experience 3</LoadButton>
        </Link>
        <Link key="experiencePage" href={{pathname: "/experience", query: { dataId: "testexp1" , isApparatusId: false }, }} >
          <LoadButton>Experience 4</LoadButton>
        </Link>
        <Link key="experiencePage" href={{pathname: "/experience", query: { dataId: "testexp1" , isApparatusId: false }, }} >
          <LoadButton>Experience 5</LoadButton>
        </Link>        
      </InnerBox>
    );
  };


function Home(): JSX.Element {
  const [experienceName, setExperienceName] = useState('');

  useEffect(() => {verifyLogIn()}, [])

  return checkIfLoggedIn() ? (
    <main>
      <h1>Welcome {getUserName()}!</h1>
      <Link
          key="selectionPage"
          href={{
              pathname: "/selection",
          }}
      >
          <Button> Create New Experience</Button>
      </Link>
      <Link
          key="experiencePage"
          href={{
              pathname: "/experience",
              query: { dataId: "testexp1" , isApparatusId: false },
          }}
      >
          <Button> Load Test Experience</Button>
      </Link>
      <Button onClick={logOut}>Log Out</Button>

      <OuterBox>
        <ListHeading>Load an Experience</ListHeading>
        <LoadExperience />
        <CreateExperience setHook={setExperienceName} viewHook={experienceName}/>
      </OuterBox>

  </main>
  ):(<main/>);
}

export default Home;