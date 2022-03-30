import Link from "next/link";
import { useEffect, useState, forwardRef } from "react";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import {
  useWorkbench,
  useDeleteDialog,
} from "../util/customHooks/workbenchFunc";
import { getBlobsInContainer } from "../util/cloudOperations/readFromCloud";
import { deleteExp } from "../util/cloudOperations/writeToCloud";
import { getUserName } from "../util/loginCookies";

const OuterBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;
  height: 90%;
  background: #3f3d56;
  border-radius: 1.2em;
`;

const ExperienceContainer = styled.div`
  position: relative;
  flex-direction: column;
  justify-items: center;
  display: flex;
  height: 85%;
  margin-right: 1em;
  margin-left: 1em;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.7em;
  }
  &::-webkit-scrollbar-thumb {
    background: #a5a4ea;
    border-radius: 1em;
    background-clip: padding-box;
  }
  table {
    border-collapse: separate;
    border-spacing: 0 0.5em;
  }
`;

const InnerBox = styled.div`
  position: relative;
  font-family: Trebuchet MS;
  font-weight: bold;
  flex-direction: column;
  justify-items: center;
  display: flex;
  height: 100%;
  margin-right: 1em;
  margin-left: 1em;
`;

const ExperienceHeader = styled.tr`
  color: white;
  font-family: Inter, monospace;
  letter-spacing: 0.1em;
  font-weight: bold;
  font-size: 16px;
  background: #3f3d56;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 2em;
  margin-right: 3em;
  margin-top: 1.5em;
  margin-bottom: 1em;
  z-index: 4;
`;

const ExperienceRow = styled.tr`
  border: 1px solid black;
  background-color: white;
  color: #3f3d56;
  font-weight: bold;
  height: 3em;
  font-family: Inter, monospace;
  font-size: 14px;
  td {
    padding-top: 0.65em;
    padding-bottom: 0.65em;
    padding-left: 1.6em;
  }
`;

const ExperienceName = styled.th`
  text-align: left;
  width: 30%;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ExperienceDesc = styled.th`
  text-align: center;
  width: 50%;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ExperienceMisc = styled.th`
  text-align: right;
  width: 30%;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
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
  height: 3.5em;
  width: 40%;
  font-size: 16px;
  cursor: pointer;
  font-family: Inter, monospace;
  letter-spacing: 0.1em;
  border-radius: 1.5em;
  margin-left: 1em;
  margin-bottom: 2em;
  margin-right: 1em;
  margin-top: 1em;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CreateInnerBox = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  margin-right: 1.5em;
  margin-left: 2em;
`;

const ExperienceField = styled(TextField)`
  width: 60%;
  margin-right: 1.3em;
`;

const ErrorMsg = styled.label`
  font-family: Inter, monospace;
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

const WorkbenchTable = () => (
  <OuterBox>
    <ExperienceHeader>
      <ExperienceName>EXPERIENCE NAME</ExperienceName>
      <ExperienceDesc>LAST MODIFIED</ExperienceDesc>
      <ExperienceMisc>OPTIONS</ExperienceMisc>
    </ExperienceHeader>
    <LoadExperience />
    <CreateExperience />
  </OuterBox>
);

const CreateExperience = () => {
  const [expName, setExpName] = useState("");

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
        <Link
          key="selectionPage"
          href={{
            pathname: "/selection",
            query: { experienceId: expName },
          }}
        >
          <CreateButton
            data-testid="create-button"
            onClick={(e) => handleExperienceCreate(e, expName)}
          >
            {" "}
            CREATE NEW EXPERIENCE{" "}
          </CreateButton>
        </Link>
      </Box>
      <ErrorMsg>{expErr}</ErrorMsg>
    </CreateInnerBox>
  );
};

const slideTransition = forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

// TODO show proper error message when data cannot be fetched
const LoadExperience = () => {
  const [expList, setExpList] = useState([]);

  const {
    delOpen,
    delIndex,
    delExpName,
    handleDeleteDialogOpen,
    handleDeleteDialogClose,
  } = useDeleteDialog();
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
    <ExperienceContainer>
      <InnerBox data-testid="inner-box">
        <Dialog
          open={delOpen}
          TransitionComponent={slideTransition}
          keepMounted
          onClose={handleDeleteDialogClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            Are you sure you want to delete this experience?
          </DialogTitle>
          <DialogContent color="primary">
            <DialogContentText id="alert-dialog-slide-description">
              Once deleted, this experience cannot be returned and will be lost
              forever. Do you wish to continue?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                expList.splice(delIndex, 1);
                setExpList([...expList]);
                deleteExp(getUserName(), delExpName);
                handleDeleteDialogClose();
              }}
            >
              YES
            </Button>
            <Button onClick={handleDeleteDialogClose}>NO</Button>
          </DialogActions>
        </Dialog>
        <table cellSpacing="0" cellPadding="0">
          <tbody>
            {expList.map((exp, index) => (
              // eslint-disable-next-line react/jsx-key
              <ExperienceRow>
                <td style={{ textAlign: "left", width: "25%" }}>{exp[0]}</td>
                <td style={{ textAlign: "center", width: "50%" }}>{exp[1]}</td>
                <ExperienceButtons>
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
                    <EditIcon style={{ fontSize: "36px" }} />
                  </Link>
                  <DeleteIcon
                    style={{ fontSize: "36px" }}
                    onClick={() => {
                      handleDeleteDialogOpen(index, exp[0]);
                    }}
                  />
                </ExperienceButtons>
              </ExperienceRow>
            ))}
          </tbody>
        </table>
      </InnerBox>
    </ExperienceContainer>
  );
};

export { WorkbenchTable, LoadExperience, CreateExperience };
