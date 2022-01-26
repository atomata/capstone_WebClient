import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { getUserName } from "../util/loginCookies";
import { getBlobsInContainer } from "../util/cloudOperations/readFromCloud";

const OuterBox = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 20%;
  margin-right: 20%;
  padding: 20px;
  weight: 100%;
  height: 100%;
  background: #d0d0d0;
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
  margin-top: 2%;
`;

const CreateExperience = () => {
  const [expName, setExpName] = useState("Experience");
  return (
    <CreateInnerBox>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          required
          label="Required"
          defaultValue="Experience"
          fullWidth
          helperText="Enter a name for your new experience"
          onChange={(e) => setExpName(e.target.value)}
          variant="standard"
        />
        <Link
          key="selectionPage"
          href={{
            pathname: "/selection",
            query: { experienceId: expName },
          }}
        >
          <CreateButton> Create New Experience </CreateButton>
        </Link>
      </Box>
    </CreateInnerBox>
  );
};

// TODO show proper error message when data cannot be fetched
const LoadExperience = () => {
  const [expList, setExpList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getBlobsInContainer(getUserName());
        setExpList(res);
      } catch (err) {
        console.log("test", err);
      }
    }
    fetchData();
  }, []);

  return (
    <InnerBox>
      {expList.map((expName) => (
        <Link
          key={expName}
          href={{
            pathname: "/experience",
            query: {
              experienceId: expName,
              apparatusId: "",
              dataType: "experience",
            },
          }}
        >
          <LoadButton> {expName} </LoadButton>
        </Link>
      ))}
    </InnerBox>
  );
};

export { OuterBox, ListHeading, LoadExperience, CreateExperience };
