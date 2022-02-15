import styled from "styled-components";
import TextField from "@mui/material/TextField";
import React from "react";
import { IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ExpandIcon from "@mui/icons-material/Expand";

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
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;

const SlideName = styled.label`
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

const TextEditor = ({
  actionList,
  selectedAction,
  currDesc,
  handleChange,
}): JSX.Element => (
  <TextDiv>
    <table cellSpacing="0" cellPadding="0">
      <thead>
        <Header>
          <SlideName>APPARATUS {selectedAction}</SlideName>
          <TestDiv>
            <IconButton
              style={{ color: "white" }}
              onClick={() => {
                actionList[selectedAction].desc = currDesc;
              }}
            >
              <SaveIcon sx={{ fontSize: 25 }} />
            </IconButton>
            <IconButton style={{ color: "white" }}>
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
              onChange={(e) => handleChange(e.target.value)}
              variant="outlined"
            />
          </td>
        </Box>
      </tbody>
    </table>
  </TextDiv>
);

export default TextEditor;
