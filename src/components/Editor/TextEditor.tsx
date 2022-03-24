import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
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
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
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
      minWidth="250px"
      minHeight="170px"
      maxWidth="400px"
      maxHeight="250px"
      dragAxis="both"
      bounds="parent"
    >
      {" "}
      <TextDiv>
        <Header>
          <SaveIcon
            className={styles.textboxButtons}
            onClick={() => {
              setDescription(currDesc);
            }}
          />

          <CancelIcon
            className={styles.textboxButtons}
            onClick={() => {
              toggleTextBox();
            }}
          />
        </Header>
        <textarea
          className="noDrag"
          style={{
            position: "absolute",
            background: "white",
            borderRadius: "5px",
            resize: "none",
            fontSize: "1.3em",
            left: "0.5em",
            right: "0.5em",
            bottom: "1em",
            top: "2.5em",
          }}
          value={currDesc}
          onChange={(e) => setCurrDesc(e.target.value)}
        />
      </TextDiv>
    </Rnd>
  );
};

export default TextEditor;
