import styled from "styled-components";
import { useActionBar } from "../../util/customHooks/ActionBarFunc";
import SideBarItem from "./SideBarItem";
import ActionSequence from "./Action Sequence 2.0/ActionSequence";
import TextEditor from "./TextEditor";
import { SideBarContext } from "../../util/customHooks/SideBarContext";
import ToolDocItem from "./ToolDocItem";
import { ExperienceData } from "../../util/types";
import { experienceContext } from "../../util/customHooks/experienceContext";
import { useActionList } from "../../util/customHooks/overlayfunc";

// the side bar box

const UIComponentRoot = styled.div`
  display: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 0;
`;

const UIComponentGrid = styled.div`
  display: grid;
  width: inherit;
  height: inherit;
  z-index: 2;
  grid-template-columns: repeat(50, 1fr);
  grid-template-rows: repeat(50, 1fr);
`;

// css and placement for the action bar (the action bar is the bar on the side which have the button)
const SideBarGrid= styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / span50;
  background-color: #3F3D56;
  z-index: 2;
  color: white;
`;

// css and placement for the side bar (the side bar is the area where we can toggle on or off)
const ToolDocGrid = styled.div`
  grid-column: 3 / span 7;
  grid-row: 1 / span 39;
  background-color: #21415e;
  z-index: 2;
  padding: 0.5em;
`;

// css and placement for the action sequence
const ActionSequenceBarGrid = styled.div`
  grid-column: 3 / span 48;
  grid-row: 40 / span 11;
  background-color: #a8ad68;
  z-index: 2;
`;

// css and placement for the text area
const TextEditorGrid = styled.div`
  grid-column: 18 / span 20;
  grid-row: 30 / span 8;
  z-index: 2;
  background-color: #0c0475;
`;

type OverlayProps = {
  userId: string;
  experienceData: ExperienceData;
};

function SideBar({ userId, experienceData }: OverlayProps): JSX.Element {
  const {
    toggleToolDoc,
    toggleApparatusInfo,
    tooDoc,
    apparatusInfo,
    setToolDoc,
    setApparatusInfo,
  } = useActionBar();

  // Things Justin needs to use in action sequence, fix the variable names so I can use them please
  const {
    actionList,
    setActionList,
    addActionToList,
    removeActionFromList,
    handleOnDragEnd,
  } = useActionList(experienceData);

  return (
    <UIComponentRoot>
      <UIComponentGrid>
        <SideBarContext.Provider
          value={{
            toggleToolDoc,
            toggleApparatusInfo,
            tooDoc,
            apparatusInfo,
            setToolDoc,
            setApparatusInfo,
          }}
        >
          <experienceContext.Provider value={{ userId, experienceData }}>
            {" "}
            <SideBarGrid>
              <SideBarItem />
            </SideBarGrid>
            {tooDoc ? (
              <ToolDocGrid>
                <ToolDocItem />
              </ToolDocGrid>
            ) : (
              <div />
            )}
          </experienceContext.Provider>
        </SideBarContext.Provider>
        <ActionSequenceBarGrid>
          <ActionSequence
            actionList={actionList}
            removeAction={(index: number) =>
              removeActionFromList(index, actionList, setActionList)
            }
            handleOnDragEnd={handleOnDragEnd}
          />
        </ActionSequenceBarGrid>
        <TextEditorGrid>
          <TextEditor />
        </TextEditorGrid>
      </UIComponentGrid>
    </UIComponentRoot>
  );
}

export default SideBar;