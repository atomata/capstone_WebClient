import styled from "styled-components";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ExpandIcon from "@mui/icons-material/Expand";
import { ActionData, ExperienceData } from "../util/types";

const Box = styled.tr`
  background: #3f3d56;
  width: 100%;
  height: 100%;
  td {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const Header = styled.tr`
  color: white;
  font-family: Trebuchet MS;
  font-size: 18px;
  display: flex;
  justify-content: center;
`;

const TextDiv = styled.div`
  background: #3f3d56;
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 5px;
  position: relative;
`;

const DefaultButton = styled.div`
  padding-top: 15px;
  cursor: pointer;
  text-align: center;
  font-family: Trebuchet MS;
  letter-spacing: 1.5px;
  font-size: 20px;
  color: white;
  background: #3f3d56;
  width: 90%;
  height: 22%;
  border-radius: 15px;
`;
const SlideName = styled.label`
  letter-spacing: 1.5px;
  padding-top: 15px;
  padding-left: 20px;
`;

const TestDiv = styled.div`
  margin-left: auto;
  cursor: pointer;
  padding-top: 5px;
  padding-right: 15px;
  color: white;
`;

type TextEditorProps = {
  actionList: ActionData[];
  selectedAction: number;
  setDescription: (desc) => void;
};
const TextEditor = ({
  actionList,
  selectedAction,
  setDescription,
}: TextEditorProps): JSX.Element => {
  const [isExpanded, setExpanded] = useState(false);
  const [currDesc, setCurrDesc] = useState("");
  useEffect(() => {
    if (
      actionList[selectedAction] !== undefined &&
      actionList[selectedAction].desc !== undefined
    ) {
      setCurrDesc(actionList[selectedAction].desc);
    } else {
      setCurrDesc("");
    }
  }, [selectedAction, actionList]);
  return isExpanded ? (
    <TextDiv>
      <table cellSpacing="0" cellPadding="0">
        <thead>
          <Header>
            <SlideName>APPARATUS {selectedAction}</SlideName>
            <TestDiv>
              <IconButton
                style={{ color: "white" }}
                onClick={() => setDescription(currDesc)}
              >
                <SaveIcon sx={{ fontSize: 25 }} />
              </IconButton>
              <IconButton
                style={{ color: "white" }}
                onClick={() => {
                  setExpanded((value) => !value);
                }}
              >
                <ExpandIcon sx={{ fontSize: 25 }} />
              </IconButton>
            </TestDiv>
          </Header>
        </thead>
        <tbody>
          <Box>
            <td>
              <TextField
                style={{
                  background: "white",
                  width: "100%",
                  borderRadius: "5px",
                }}
                value={currDesc}
                multiline
                rows={2}
                onChange={(e) => setCurrDesc(e.target.value)}
                variant="outlined"
              />
            </td>
          </Box>
        </tbody>
      </table>
    </TextDiv>
  ) : (
    <DefaultButton onClick={() => setExpanded((value) => !value)}>
      ADD/EDIT DESCRIPTION
    </DefaultButton>
  );
};

export default TextEditor;
