import styled from "styled-components";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import ActionSequenceBox from "./editorBoxes/ActionSequenceBox";
import ActionBox from "./editorBoxes/ActionBox";
import ApparatusListBox from "./editorBoxes/ApparatusListBox";
import { useOverlay, useActionList } from "../util/customHooks/overlayfunc";
import saveExperienceToCloud from "../util/cloudOperations/writeToCloud";
import Navbar from "./Navbar";
import PreviewOverlay from "./PreviewOverlay";
import styles from "../styles/NavbarStyle.module.css";
import { ExperienceData, SerializedApparatus } from "../util/types";

const OverlayRoot = styled.div`
  display: absolute;
  width: inherit;
  height: 750px;
  z-index: 0;
  opacity: 1;
  pointer-events: none;
`;

const OverlayShown = styled.div`
  display: absolute;
  width: inherit;
  height: 750px;
  opacity: 1;
  pointer-events: auto;
`;

const OverlayGrid = styled.div`
  display: grid;
  width: inherit;
  height: inherit;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
`;

const OverlayGridItem1 = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2 / span 4;
  z-index: 2;
  pointer-events: auto;
  margin: 5%;
`;

const OverlayGridItem2 = styled.div`
  grid-column: 8 / span 2;
  grid-row: 2 / span 7;
  padding: none;
  z-index: 2;
  pointer-events: auto;
  margin: 5%;
`;

const OverlayGridItem3 = styled.div`
  grid-column: 1 / span 2;
  grid-row: 6 / span 5;
  z-index: 2;
  pointer-events: auto;
  margin: 5%;
`;

const OverlayGridItem4 = styled.div`
  background-color: #fffaf0;
  position: relative;
  grid-column: 4 / span 3;
  grid-row: 8 / span 2;
  pointer-events: auto;
`;
const NavbarDiv = styled.div`
  position: absolute;
  width: 100%;
  pointer-events: auto;
  z-index: 3;
`;

type OverlayProps = {
  userId: string;
  experienceData: ExperienceData;
};

const TextBox = styled(TextField)`
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 15%;
  margin: -25px 0 0 -25px;
`;

const useStyles = makeStyles((theme) => ({
  textField: {
    background: "#FFFFFF",
  },
}));

// TODO parsing once and giving overlay only the info it needs
function Overlay({ userId, experienceData }: OverlayProps): JSX.Element {
  const [assetBundle, setAssetBundle] = useState({
    children: [],
    path: "",
    identifier: "",
  });
  const { showOverlay, toggleOverlay } = useOverlay();
  const [actionDesc, setActionDesc] = useState("");
  const classes = useStyles();
  const {
    actionList,
    setActionList,
    addActionToList,
    removeActionFromList,
    handleOnDragEnd,
  } = useActionList(experienceData);

  return experienceData !== undefined ? (
    <OverlayRoot>
      <NavbarDiv>
        <Navbar
          save={() => {
            experienceData.experience.actionList = [...actionList];
            saveExperienceToCloud(userId, experienceData.experience);
          }}
          toggle={toggleOverlay}
        />
      </NavbarDiv>
      {showOverlay ? (
        <OverlayShown className={swapOverlayStyles()}>
          <OverlayGrid>
            <OverlayGridItem1>
              <ApparatusListBox
                metadata={checkIfMetaExists()}
                handleAssetBundleChange={(data) => setAssetBundle(data)}
              />
            </OverlayGridItem1>
            <OverlayGridItem2>
              <ActionSequenceBox
                actionList={actionList}
                removeAction={(index: number) =>
                  removeActionFromList(index, actionList, setActionList)
                }
                handleOnDragEnd={handleOnDragEnd}
              />
            </OverlayGridItem2>
            <OverlayGridItem3>
              <ActionBox
                assetBundle={assetBundle}
                addAction={(actionData) =>
                  addActionToList(actionData, actionList, setActionList)
                }
              />
            </OverlayGridItem3>

            <OverlayGridItem4>
              <TextBox
                InputProps={{
                  className: classes.textField,
                }}
                // helperText="*Required"
                value={actionDesc}
                onChange={(e) => setActionDesc(e.target.value)}
                variant="outlined"
              />
            </OverlayGridItem4>
          </OverlayGrid>
        </OverlayShown>
      ) : (
        <OverlayShown>
          <PreviewOverlay actionList={actionList} />
        </OverlayShown>
      )}
    </OverlayRoot>
  ) : (
    <div>Error: corrupted experience data</div>
  );

  function checkIfMetaExists(): SerializedApparatus {
    return experienceData !== undefined
      ? experienceData.apparatusMetadata
      : undefined;
  }

  function swapOverlayStyles(): string {
    return showOverlay ? styles.visible : styles.invisible;
  }
}
export default Overlay;
