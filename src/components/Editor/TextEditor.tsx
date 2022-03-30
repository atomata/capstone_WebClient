import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
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

const TextBoxDiv = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  padding-top: 0.5em;
  padding-left: 0.5em;
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
            className={styles.saveButton}
            sx={{ fontSize: "25px" }}
            onClick={() => {
              setDescription(currDesc);
            }}
          />

          <CancelIcon
            className={styles.cancelButton}
            sx={{ fontSize: "25px" }}
            onClick={() => {
              toggleTextBox();
            }}
          />
        </Header>
        <TextBoxDiv>
          <textarea
            className="noDrag"
            style={{
              background: "white",
              borderRadius: "5px",
              height: "calc(100% - 1.5em)",
              width: "calc(100% - 1.5em)",
              resize: "none",
              fontSize: "1.3em",
            }}
            value={currDesc}
            onChange={(e) => setCurrDesc(e.target.value)}
          />
        </TextBoxDiv> 
      </TextDiv>
    </Rnd>
  );
};

export default TextEditor;
