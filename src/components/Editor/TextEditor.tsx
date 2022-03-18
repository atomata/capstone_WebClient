import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import styles from "../SideBarButtons.module.css";
import { ActionContext } from "../../util/customHooks/actionContext";

const TextDiv = styled.div`
  background: #3f3d56;
  display: flex;
  width: inherit;
  height: inherit;
  flex-direction: column;
  border-radius: 15px;
`;

const TextEditor = (): JSX.Element => {
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
  return (
    <TextDiv>
      <div>
        <IconButton
          className={styles.sidebarItem}
          onClick={() => setDescription(currDesc)}
        >
          <SaveAltIcon sx={{ fontSize: 30, ml: "0.3rem" }} />
        </IconButton>
      </div>
      <Box
        className="noDrag"
        sx={{
          m: "1em",
          mt: "0.5em",
          mb: "1.2em",
          mr: "1.3em",
          alignItems: "center",
          height: "100%",
        }}
      >
        <textarea
          className="noDrag"
          style={{
            background: "white",
            borderRadius: "5px",
            width: "100%",
            height: "100%",
            minHeight: "5rem",
            resize: "none",
            fontSize: "1.6rem",
          }}
          value={currDesc}
          onChange={(e) => setCurrDesc(e.target.value)}
        />
      </Box>
    </TextDiv>
  );
};

export default TextEditor;
