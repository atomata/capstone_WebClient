import styled from "styled-components";
import ActionSequenceItem from "./ActionSequenceItem";

const ActionSequenceRoot = styled.div`
  display: absolute;
  width: inherit;
  height: inherit;
  background-color: #00ffbf;
  padding: 1em 1em  1em 1em  ;
`;

const ActionSequenceList = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #778b87;
`;

function ActionSequence(): JSX.Element {
  return (
    <ActionSequenceRoot>
      <ActionSequenceList>
          <ActionSequenceItem/>
          <ActionSequenceItem/>
          <ActionSequenceItem/>
          <ActionSequenceItem/>
      </ActionSequenceList>
    </ActionSequenceRoot>
  );
}

export default ActionSequence;
