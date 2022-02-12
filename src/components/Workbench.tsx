import Link from "next/link";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Icon  from "@mui/material/Icon";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TextField from "@mui/material/TextField";
import { getUserName } from "../util/loginCookies";
import { getBlobsInContainer } from "../util/cloudOperations/readFromCloud";

const OuterBox = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 10%;
  margin-right: 10%;
  padding: 20px;
  weight: 100%;
  height: 80%;
  background: #3F3D56;
  border-radius: 15px;
`;

const InnerBox = styled.div`
  font-family: Trebuchet MS;
  font-weight: bold;
  background: white;
  flex-direction: column;
  justify-items: center;
  display: flex;
  height: 85%;
  background: #3F3D56;
  min-height: 12em;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  table {
    text-align: center;
    border-collapse:separate; 
    border-spacing: 0 0.5em;
  }

  table th {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1; 
  }
`;

const ListHeading = styled.h1`
  font-size: 20px;
  text-align: center;
  font-family: Trebuchet MS;
  font-weight: bold;
  color: black;
`;

const ExperienceHeader = styled.tr`
  color: white;
  text-align: center;
  font-family: Trebuchet MS;
  th {
    padding-bottom: 15px;
  }
`;

const ExperienceRow = styled.tr`
  border: 1px solid black;
  background-color:white;
  color: #3F3D56;
  font-weight: bold;
  padding: 15px 32px;
  font-size: 16px;
  margin: 2px 2px;
  font-family: Trebuchet MS;
  td {
    padding-top:10px;
    padding-bottom:10px;
  }
`;

const ExperienceMisc = styled.th`
  float: right;
  padding-right: 20px;
  cursor: pointer;
`;

const ExperienceButtons = styled.td`
  color: #A5A4EA;
  float: right;
  padding-right: 20px;
  cursor: pointer;
`;

const LoadButton = styled.button`
  border: 1px solid black;
  color: #3F3D56;
  font-weight: bold;
  padding: 15px 32px;
  font-size: 16px;
  margin: 2px 2px;
  cursor: pointer;
  font-family: Trebuchet MS;
`;

const CreateButton = styled.button`
  background-color: #F75D77;
  border: 0px;
  color: white;
  font-weight: bold;
  padding: 15px 36px;
  width: 50%;
  font-size: 16px;
  margin-left: 1%;
  cursor: pointer;
  font-family: Trebuchet MS;
  border-radius: 20px;
  margin-top: -6px;
`;

const CreateInnerBox = styled.div`
  margin-top: 2%;
`;

const ExperienceField = styled(TextField)`
  width: 40%;
  margin-top: 15px;
  margin-right: 20px;
`;

const useStyles = makeStyles((theme) => ({
  textField: {
    background: "#FFFFFF"
  },
  helper: {
    color: "#FFFFFF"
  }
}));

const CreateExperience = () => {
  const [expName, setExpName] = useState("Experience");
  const [descName, setDescName] = useState("Description");

  const classes = useStyles();

  return (
    <CreateInnerBox>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ExperienceField
          required
          InputProps={{
            className: classes.textField
          }}
          FormHelperTextProps={{
            className: classes.helper
          }}
          label="New Experience Name"
          helperText="*Required"
          onChange={(e) => setExpName(e.target.value)}
          variant="outlined" 
        />
        <ExperienceField
          InputProps={{
            className: classes.textField
          }}
          FormHelperTextProps={{
            className: classes.helper
          }}
          label="Description"
          helperText=" "
          onChange={(e) => setDescName(e.target.value)}
          variant="outlined" 
        />       
        <Link
          key="selectionPage"
          href={{
            pathname: "/selection",
            query: { experienceId: expName },
          }}
        >
          <CreateButton> CREATE NEW EXPERIENCE </CreateButton>
        </Link>
      </Box>
    </CreateInnerBox>
  );
};


// TODO show proper error message when data cannot be fetched
const LoadExperience = () => {
  const [expList, setexpList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getBlobsInContainer(getUserName());
        setexpList(res);
      } catch (err) {
        console.log("test", err);
      }
    }
    fetchData();
  }, []);

  return (
    <InnerBox>
      <table cellSpacing="0" cellPadding="0">
        <thead>
          <ExperienceHeader>
            <th>EXPERIENCE NAME</th>
            <th>DESCRIPTION</th>
            <ExperienceMisc><MoreHorizIcon/></ExperienceMisc>
          </ExperienceHeader>
        </thead>       
        <tbody>
          {expList.map((expName) => (
            <ExperienceRow> 
              <td>{expName}</td>
              <td>DESCRIPTION GOES HERE</td>
              <ExperienceButtons>
                <PlayArrowIcon/>
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
                  <EditIcon/>
                </Link>
                <DeleteIcon/>
                <MoreHorizIcon/>
              </ExperienceButtons>
            </ExperienceRow>
            
          ))}
        </tbody>
      </table>

      
    </InnerBox>
  );
};

export { OuterBox, ListHeading, LoadExperience, CreateExperience };
