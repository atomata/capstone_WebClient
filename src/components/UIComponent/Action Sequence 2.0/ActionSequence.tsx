import styled from "styled-components";
import ActionSequenceItem from "./ActionSequenceItem";

const ActionSequenceRoot = styled.div`
  display: relative;
  height: stretch;
  width: stretch;
  background-color: #00ffbf;
`;

const ActionSequenceHeader = styled.div.attrs({
  children: "Action Sequence List",
})`
  display: flex;
  justify-content: center;
  width: stretch;
  background-color: gold;
`;

const ActionSequenceList = styled.div`
  display: flex;
  min-height: stretch;
  min-width: stretch;
  background-color: #778b87;
  justify-content: center;
`;

function ActionSequence(): JSX.Element {
  return (
    <ActionSequenceRoot>
      <ActionSequenceList>
        <ActionSequenceItem />
        <ActionSequenceItem />
        <ActionSequenceItem />
        <ActionSequenceItem />
      </ActionSequenceList>
    </ActionSequenceRoot>
  );
}

export default ActionSequence;
