import Link from "next/link";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import Box from "@mui/material/Box";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TextField from "@mui/material/TextField";
import { getUserName } from "../util/loginCookies";
import { getBlobsInContainer } from "../util/cloudOperations/readFromCloud";

const OuterBox = styled.div`
  margin-top: 2%;
  margin-left: 10%;
  margin-right: 10%;
  padding: 20px;
  weight: 100%;
  height: 92%;
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
  overflow: scroll;

  table {
    text-align: center;
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
  text-align: center;
  font-family: Trebuchet MS;
  th {
    background: #3F3D56;
    padding-bottom: 15px;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1; 
  } 
`;

const ExperienceRow = styled.tr`
  border: 1px solid black;
  background-color: white;
  color: #3f3d56;
  font-weight: bold;
  padding: 15px 32px;
  font-size: 16px;
  margin: 2px 2px;
  font-family: Trebuchet MS;
  td {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const ExperienceName = styled.th`
  width: 40%;
`;

const ExperienceDesc = styled.th`
  width: 40%;
`;

const ExperienceMisc = styled.th`
  padding-right: 20px;
  text-align: right;
  cursor: pointer;
`;

const ExperienceButtons = styled.td`
  color: #a5a4ea;
  float: right;
  padding-right: 20px;
  cursor: pointer;

  * {
    margin-left: 6px;
  }
`;

const CreateButton = styled.button`
  background-color: #f75d77;
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
    background: "#FFFFFF",
  },
  helper: {
    color: "#FFFFFF",
  },
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
            className: classes.textField,
          }}
          FormHelperTextProps={{
            className: classes.helper,
          }}
          label="New Experience Name"
          helperText="*Required"
          onChange={(e) => setExpName(e.target.value)}
          variant="outlined"
        />
        <ExperienceField
          InputProps={{
            className: classes.textField,
          }}
          FormHelperTextProps={{
            className: classes.helper,
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
            <ExperienceName>EXPERIENCE NAME</ExperienceName>
            <ExperienceDesc>DESCRIPTION</ExperienceDesc>
            <ExperienceMisc><MoreHorizIcon/></ExperienceMisc>
          </ExperienceHeader>
        </thead>
        <tbody>
          {expList.map((expName) => (
            <ExperienceRow>
              <td>{expName}</td>
              <td>DESCRIPTION GOES HERE</td>
              <ExperienceButtons>
                <PlayArrowIcon />
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
                  <EditIcon />
                </Link>
                <DeleteIcon />
                <MoreHorizIcon />
              </ExperienceButtons>
            </ExperienceRow>
          ))}
        </tbody>
      </table>
    </InnerBox>
  );
};

export { OuterBox, LoadExperience, CreateExperience };
