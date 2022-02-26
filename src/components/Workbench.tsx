import Link from "next/link";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import Box from "@mui/material/Box";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TextField from "@mui/material/TextField";
import { useWorkbench } from "../util/customHooks/workbenchFunc";
import { getUserName } from "../util/loginCookies";
import { getBlobsInContainer } from "../util/cloudOperations/readFromCloud";

const OuterBox = styled.div`
  margin-top: 2%;
  margin-left: 10%;
  margin-right: 10%;
  padding: 1.2em;
  weight: 100%;
  height: 92%;
  background: #3F3D56;
  border-radius: 1.2em;
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
  overflow: scroll;

  table {
    border-collapse: separate;
    border-spacing: 0 0.5em;
  }

  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar { 
      display: none;  /* Safari and Chrome */
  }
`;

const ExperienceHeader = styled.tr`
  color: white;
  font-family: Trebuchet MS;
  text-align: left;
  th {
    background: #3F3D56;
    padding-bottom: 0.4em;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1;
    padding-left: 1.6em; 
  } 
`;

const ExperienceRow = styled.tr`
  border: 1px solid black;
  background-color: white;
  color: #3f3d56;
  font-weight: bold;
  height: 3em;
  font-size: 1em;
  font-family: Trebuchet MS;
  
  td {
    padding-top: 0.65em;
    padding-bottom: 0.65em;
    padding-left: 1.6em; 
  }
`;

const ExperienceName = styled.th`
  width: 35%;
`;

const ExperienceDesc = styled.th`
  width: 35%;
`;

const ExperienceMisc = styled.th`
  padding-right: 1.3em;
  text-align: right;
  cursor: pointer;
`;

const ExperienceButtons = styled.td`
  color: #a5a4ea;
  float: right;
  padding-right: 1.3em;
  padding-top: 0.65em;
  cursor: pointer;

  * {
    margin-left: 0.3em;
  }
`;

const CreateButton = styled.button`
  background-color: #f75d77;
  border: 0em;
  color: white;
  font-weight: bold;
  padding: 1.1em 2.3em;
  width: 40%;
  font-size: 1.05em;
  margin-left: 1%;
  cursor: pointer;
  font-family: Trebuchet MS;
  border-radius: 1.3em;
  margin-top: -0.25em;
`;

const CreateInnerBox = styled.div`
  margin-top: 2%;
`;

const ExperienceField = styled(TextField)`
  width: 60%;
  margin-top: 0.65em;
  margin-right: 1.3em;
`;

const ErrorMsg = styled.label`
  font-family: Trebuchet MS;
  color: red;
`;

const useStyles = makeStyles((theme) => ({
  textField: {
    background: "#FFFFFF",
  },
  helper: {
    color: "#FFFFFF",
  },
}));

const CreateExperience = () => {
  const [expName, setExpName] = useState("");

  const {
    expErr,
    handleExperienceCreate
  } = useWorkbench();

  const classes = useStyles();

  return (
    <CreateInnerBox>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ExperienceField
          required
          InputProps={{
            className: classes.textField,
          }}
          FormHelperTextProps={{
            className: classes.helper,
          }}
          id="name-input"
          label="New Experience Name"
          helperText="*Required"
          onChange={(e) => setExpName(e.target.value)}
          variant="outlined"
        />
        <Link
          key="selectionPage"
          href={{
            pathname: "/selection",
            query: { experienceId: expName },
          }}
        >
          <CreateButton onClick={(e) => handleExperienceCreate(e, expName)}> CREATE NEW EXPERIENCE </CreateButton>
        </Link>
      </Box>
      <ErrorMsg>{expErr}</ErrorMsg>
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
      <table cellSpacing="0" cellPadding="0">
        <thead>
          <ExperienceHeader>
            <ExperienceName>EXPERIENCE NAME</ExperienceName>
            <ExperienceDesc>LAST MODIFIED</ExperienceDesc>
            <ExperienceMisc><MoreHorizIcon style={{fontSize: '36px'}}/></ExperienceMisc>
          </ExperienceHeader>
        </thead>
        <tbody>
          {expList.map((exp) => (
            // eslint-disable-next-line react/jsx-key
            <ExperienceRow>
              <td>{exp[0]}</td>
              <td>{exp[1]}</td>
              <ExperienceButtons>
                <PlayArrowOutlinedIcon style={{fontSize: '40px'}} />
                <Link
                  key={exp[0]}
                  href={{
                    pathname: "/experience",
                    query: {
                      experienceId: exp[0],
                      apparatusId: "",
                      dataType: "experience",
                    },
                  }}
                >
                  <EditIcon style={{fontSize: '36px'}} />
                </Link>
                <DeleteIcon style={{fontSize: '36px'}} />
                <MoreHorizIcon style={{fontSize: '36px'}} />
              </ExperienceButtons>
            </ExperienceRow>
          ))}
        </tbody>
      </table>
    </InnerBox>
  );
};

export { OuterBox, LoadExperience, CreateExperience };
