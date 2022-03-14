import styled from "styled-components";
import TextField from "@mui/material/TextField";
import React, { useContext, useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ExpandIcon from "@mui/icons-material/Expand";
import { ActionContext } from "../../util/customHooks/actionContext";

const Header = styled.div`
  color: white;
`;

const TextDiv = styled.div`
  background: #3f3d56;
  display: flex;
  width: inherit;
  height:inherit;
  flex-direction: column;
  border-radius: 15px;
`;
  // max-height: 80%;
const DefaultButton = styled.div`
  padding: 0.5em;
  cursor: pointer;
  text-align: center;
  font-family: Inter, monospace;
  font-size: 1.5em;
  color: white;
  background: #3f3d56;
  max-height: 22%;
  border-radius: 15px;
`;

const TextEditor = (): JSX.Element => {
  const [isExpanded, setExpanded] = useState(false);
  const [currDesc, setCurrDesc] = useState("");
  const { actionList, selectedAction, setDescription } =
    useContext(ActionContext);
  useEffect(() => {
    if (selectedAction !== undefined && selectedAction.desc !== undefined) {
      setCurrDesc(selectedAction.desc);
    } else {
      setCurrDesc("");
    }
  }, [selectedAction, actionList]);
  return isExpanded ? (
    <TextDiv>
      <Header>
        <IconButton
          sx={{ color: "white" }}
          onClick={() => {
            setExpanded((value) => !value);
          }}
        >
          <ExpandIcon sx={{ fontSize: 30, ml: "0.5em" }} />
        </IconButton>
        <IconButton
          sx={{ color: "white" }}
          onClick={() => setDescription(currDesc)}
        >
          <SaveAltIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Header>

      <Box
        sx={{
          m: "1em",
          mt: "0.5em",
          mb: "1.2em",
          mr: "1.3em",
          alignItems: "center",
          height:"100%",
        }}
      >
        <textarea 
          style={{
            background: "white",
            borderRadius: "5px",
            width: "100%",
            height:"100%",
            resize: "none",
          }}
          value={currDesc}
          // multiline
          // rows={2}
          onChange={(e) => setCurrDesc(e.target.value)}
        />
      </Box>
    </TextDiv>
  ) : (
    <DefaultButton onClick={() => setExpanded((value) => !value)}>
      ADD/EDIT DESCRIPTION
    </DefaultButton>
  );
};

export default TextEditor;
