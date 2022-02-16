import { Paper } from "@mui/material";
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
  min-height: 91%;
  min-width: stretch;
  background-color: #778b87;
  justify-content: left;
  overflow-x: scroll;
`;

function ActionSequence(): JSX.Element {

  return (
      <ActionSequenceRoot>
        <ActionSequenceHeader />
        <ActionSequenceList>
          <ActionSequenceItem />
          <ActionSequenceItem />
          <ActionSequenceItem />
          <ActionSequenceItem />
          <ActionSequenceItem />
          <ActionSequenceItem />
          <ActionSequenceItem />
          <ActionSequenceItem />
          <ActionSequenceItem />
          <ActionSequenceItem />
          <ActionSequenceItem />
          <ActionSequenceItem />
          <ActionSequenceItem />
          <ActionSequenceItem />
          <ActionSequenceItem />
          <ActionSequenceItem />
        </ActionSequenceList>
      </ActionSequenceRoot>
  );
}

export default ActionSequence;
