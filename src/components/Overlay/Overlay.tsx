import styled from "styled-components";
import React, { useState } from "react";
import ActionSequenceBox from "../apparatusLists/ActionSequenceBox";
import ActionBox from "../apparatusLists/ActionBox";
import ApparatusListBox from "../apparatusLists/ApparatusListBox";
import {
  addActionToList,
  removeActionFromList,
} from "../../util/overlayfunc/overlayfunc";
import saveExperienceToCloud from "../../util/saveExperienceToCloud";
import Navbar from "../Navbar";
import PreviewOverlay from "../previewOverlay/PreviewOverlay";
import styles from "../../styles/NavbarStyle.module.css";
import { getExperienceName } from "../../util/getExperienceName";

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
  background-color: #00ffbf;
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

const NavbarDiv = styled.div`
  position: absolute;
  width: 100%;
  pointer-events: auto;
  z-index: 3;
`;

function Overlay({ userId, experienceData }): JSX.Element {
  const [assetbundle, setAssetbundle] = useState({ identifier: [] });
  const [showOverlay, setOverlay] = useState(true);
  const [actionList, setActionList] = useState(
    experienceData !== undefined
      ? experienceData.initializationData.actionList
      : []
  );

  const toggleOverlay = () => {
    setOverlay((show) => !show);
  };

  // Setting the postion of the item dragged and dropped.
  function handleOnDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const [reorderItem] = actionList.splice(result.source.index, 1);
    actionList.splice(result.destination.index, 0, reorderItem);
  }
  return (
    <OverlayRoot>
      <NavbarDiv>
        <Navbar
          save={() => {
            const experienceId = getExperienceName();
            saveExperienceToCloud(
              userId,
              experienceId,
              experienceData.apparatusId,
              actionList
            );
          }}
          toggle={toggleOverlay}
        />
      </NavbarDiv>
      {showOverlay ? (
        <OverlayShown
          className={swapOverlayStyles()}
        >
          <OverlayGrid>
            <OverlayGridItem1>
              <ApparatusListBox
                metadata={
                  checkIfMetaExists()
                }
                handleAssetBundleChange={(data) => setAssetbundle(data)}
              />
            </OverlayGridItem1>
            <OverlayGridItem2>
              <ActionSequenceBox
                actionList={actionList}
                removeAction={(index) =>
                  removeActionFromList(index, actionList, setActionList)
                }
                handleOnDragEnd={handleOnDragEnd}
              />
            </OverlayGridItem2>
            <OverlayGridItem3>
              <ActionBox
                assetbundle={assetbundle}
                addAction={([path, input]) =>
                  addActionToList(
                    [path, input, assetbundle.identifier[0]],
                    actionList,
                    setActionList
                  )
                }
              />
            </OverlayGridItem3>
          </OverlayGrid>
        </OverlayShown>
      ) : (
        <OverlayShown>
          <PreviewOverlay actionList = {actionList} />
        </OverlayShown>
      )}
    </OverlayRoot>
  );

  function checkIfMetaExists(): any {
    return experienceData !== undefined
      ? experienceData.apparatusMetadata
      : undefined;
  }

  function swapOverlayStyles(): string {
    return showOverlay ? styles.visible : styles.invisible;
  }
}
export default Overlay;
