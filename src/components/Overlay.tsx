import styled from "styled-components";
import React, { useState } from "react";
import ActionSequenceBox from "./editorBoxes/ActionSequenceBox";
import ActionBox from "./editorBoxes/ActionBox";
import ApparatusListBox from "./editorBoxes/ApparatusListBox";
import { useOverlay, useActionList } from "../util/customHooks/overlayfunc";
import { saveExp } from "../util/cloudOperations/writeToCloud";
import Navbar from "./Navbar";
import PreviewOverlay from "./PreviewOverlay";
import styles from "../styles/NavbarStyle.module.css";
import { ExperienceData, SerializedApparatus } from "../util/types";
import TextEditor from "./TextEditor";

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
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(15, 1fr);
`;

const OverlayGridItem1 = styled.div`
  grid-column: 1 / span 3;
  grid-row: 3 / span 6;
  z-index: 2;
  pointer-events: auto;
  margin: 5%;
`;

const OverlayGridItem2 = styled.div`
  grid-column: 13 / span 4;
  grid-row: 3 / span 8;
  padding: none;
  z-index: 2;
  pointer-events: auto;
  margin: 5%;
`;

const OverlayGridItem3 = styled.div`
  grid-column: 1 / span 3;
  grid-row: 9 / span 6;
  z-index: 2;
  pointer-events: auto;
  margin: 5%;
`;

const OverlayGridItem4 = styled.div`
  display: flex;
  position: relative;
  grid-column: 6 / span 5;
  grid-row: 12 / span 4;
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

// TODO parsing once and giving overlay only the info it needs
function Overlay({ userId, experienceData }: OverlayProps): JSX.Element {
  const [assetBundle, setAssetBundle] = useState({
    children: [],
    path: "",
    identifier: "",
  });

  const { showOverlay, toggleOverlay } = useOverlay();

  const {
    selectedAction,
    setSelectedAction,
    actionList,
    removeActionFromList,
    handleOnDragEnd,
  } = useActionList(experienceData,undefined);  // set as undefined to fix ci/cd since we are not using this component anymore

  return experienceData !== undefined ? (
    <OverlayRoot>
      <NavbarDiv>
        <Navbar
          save={() => {
            experienceData.experience.actionList = [...actionList];
            saveExp(userId, experienceData.experience);
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
                selectedAction={selectedAction}
                removeAction={(index: number) => removeActionFromList(index)}
                selectAction={(index: number) => {
                  setSelectedAction(index);
                }}
                handleOnDragEnd={handleOnDragEnd}
              />
            </OverlayGridItem2>
            <OverlayGridItem3>
              <ActionBox
                assetBundle={assetBundle}
              />
            </OverlayGridItem3>

            <OverlayGridItem4>
              <TextEditor
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
