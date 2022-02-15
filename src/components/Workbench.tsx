import Link from "next/link";
import { useEffect, useState, forwardRef } from "react";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import Box from "@mui/material/Box";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TextField from "@mui/material/TextField";
import { useWorkbench, useDeleteDialog } from "../util/customHooks/workbenchFunc";
import { getUserName } from "../util/loginCookies";
import { getBlobsInContainer } from "../util/cloudOperations/readFromCloud";
import { deleteExp } from "../util/cloudOperations/writeToCloud";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const OuterBox = styled.div`
  margin-top: 2%;
  margin-left: 10%;
  margin-right: 10%;
  padding: 20px;
  weight: 100%;
  height: 92%;
  background: #3f3d56;
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
  background: #3f3d56;
  overflow: scroll;

  table {
    border-collapse: separate;
    border-spacing: 0 0.5em;
  }

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const ExperienceHeader = styled.tr`
  color: white;
  font-family: Trebuchet MS;
  text-align: left;
  th {
    background: #3f3d56;
    padding-bottom: 12px;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1;
    padding-left: 30px;
  }
`;

const ExperienceRow = styled.tr`
  border: 1px solid black;
  background-color: white;
  color: #3f3d56;
  font-weight: bold;
  height: 60px;
  font-size: 16px;
  font-family: Trebuchet MS;

  td {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
  }
`;

const ExperienceName = styled.th`
  width: 35%;
`;

const ExperienceDesc = styled.th`
  width: 35%;
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
  padding-top: 10px;
  cursor: pointer;

  * {
    margin-left: 6px;
    fontsize: 50px;
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
  const [descName, setDescName] = useState("");

  const { expErr, handleExperienceCreate } = useWorkbench();

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
          <CreateButton onClick={(e) => handleExperienceCreate(e, expName)}> CREATE NEW EXPERIENCE </CreateButton>
        </Link>
      </Box>
      <ErrorMsg>{expErr}</ErrorMsg>
    </CreateInnerBox>
  );
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// TODO show proper error message when data cannot be fetched
const LoadExperience = () => {
  const [expList, setExpList] = useState([]);
  const [open, setOpen] = useState(false);

  const { delIndex, delExpName, setDelIndex, setDelExpName, handleDeleteDialogOpen, handleDeleteDialogClose } = useDeleteDialog();

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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDeleteDialogClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Are you sure you want to delete this experience?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this experience?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
                    expList.splice(delIndex, 1);
                    setExpList([...expList]);
                    deleteExp(getUserName(), delExpName);
                    handleDeleteDialogClose();
                  }}>YES</Button>
          <Button onClick={handleDeleteDialogClose}>NO</Button>
        </DialogActions>
      </Dialog>
      <table cellSpacing="0" cellPadding="0">
        <thead>
          <ExperienceHeader>
            <ExperienceName>EXPERIENCE NAME</ExperienceName>
            <ExperienceDesc>DESCRIPTION</ExperienceDesc>
            <ExperienceMisc>
              <MoreHorizIcon style={{ fontSize: "36px" }} />
            </ExperienceMisc>
          </ExperienceHeader>
        </thead>
        <tbody>
          {expList.map((expName, index) => (
            // eslint-disable-next-line react/jsx-key
            <ExperienceRow>
              <td>{expName}</td>
              <td>DESCRIPTION GOES HERE</td>
              <ExperienceButtons>
                <PlayArrowOutlinedIcon style={{ fontSize: "40px" }} />
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
                  <EditIcon style={{ fontSize: "36px" }} />
                </Link>
                <DeleteIcon
                  style={{ fontSize: "36px" }}
                  onClick={() => {
                    setDelIndex(index);
                    setDelExpName(expName);
                    handleDeleteDialogOpen();
                  }}
                />
                <MoreHorizIcon style={{ fontSize: "36px" }} />
              </ExperienceButtons>
            </ExperienceRow>
          ))}
        </tbody>
      </table>
    </InnerBox>
  );
};

export { OuterBox, LoadExperience, CreateExperience };
