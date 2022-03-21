import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { Rnd } from "react-rnd";
import styles from "../SideBarButtons.module.css";
import { ActionContext } from "../../util/customHooks/actionContext";
import { SideBarContext } from "../../util/customHooks/SideBarContext";

const Header = styled.div`
  display: flex;
  justify-content: right;
`;
const TextDiv = styled.div`
  background: #3f3d56;
  display: flex;
  width: inherit;
  height: inherit;
  flex-direction: column;
  border-radius: 15px;
`;

const TextEditor = (): JSX.Element => {
  const { toggleTextBox } = useContext(SideBarContext);
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
    <Rnd
      cancel=".noDrag"
      minWidth="200"
      minHeight="150"
      maxWidth="400"
      maxHeight="250"
    >
      {" "}
      <TextDiv>
        <Header>
          <IconButton
            className={styles.sidebarItem}
            onClick={() => {
              setDescription(currDesc);
            }}
          >
            <SaveIcon
              sx={{
                fontSize: 25,
                marginRight: "0.3rem",
              }}
            />
          </IconButton>
          <IconButton
            className={styles.sidebarItem}
            onClick={() => {
              toggleTextBox();
            }}
          >
            <CancelIcon
              sx={{
                fontSize: 25,
                marginRight: "0.3rem",
              }}
            />
          </IconButton>
        </Header>
        <Box
          className="noDrag"
          sx={{
            position: "relative",
            ml: "1em",
            mr: "1.4em",
            mt: "0.5em",
            mb: "1.2em",
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
              resize: "none",
              fontSize: "1.3rem",
            }}
            value={currDesc}
            onChange={(e) => setCurrDesc(e.target.value)}
          />
        </Box>
      </TextDiv>
    </Rnd>
  );
};

export default TextEditor;
