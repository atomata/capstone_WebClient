import styled from "styled-components";
import TextField from "@mui/material/TextField";
import React from "react";
import { IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const TextBox = styled(TextField)`
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 15%;
  margin: -25px 0 0 -25px;
`;

const TextDiv = styled.div`
  background: #fffaf0;
  border: 1px solid black;
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;
  max-width: 100%;
`;

const TextEditor = ({
  actionList,
  selectedAction,
  currDesc,
  handleChange,
}): JSX.Element => (
  <TextDiv>
    <IconButton
      key="actionDesc"
      onClick={() => {
        actionList[selectedAction].desc = currDesc;
      }}
    >
      <SaveIcon />
    </IconButton>
    <TextBox
      value={currDesc}
      onChange={(e) => handleChange(e.target.value)}
      variant="outlined"
    />
  </TextDiv>
);

export default TextEditor;
