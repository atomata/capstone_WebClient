import styled from "styled-components";

const ActionSequenceItemRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffc400;
  min-height: stretch;
  min-width: 12em;
  margin: 0.5em;
  padding-top: 2em;
`;

const ActionSequenceItemApparatus = styled.div`
  display: flex;
  background-color: #0066ff;
  min-width: stretch;
  height: 1.5em;
  justify-content: center;
  margin: 0.5em;
`;

const ActionSequenceItemAction = styled.div`
  display: flex;
  background-color: #ff0015;
  min-width: stretch;
  height: 1.5em;
  justify-content: center;
  margin: 0.5em;
`;

function ActionSequenceItem(): JSX.Element {
  return (
    <ActionSequenceItemRoot>
      <ActionSequenceItemApparatus>Item 1</ActionSequenceItemApparatus>
      <ActionSequenceItemAction> Action 1</ActionSequenceItemAction>
    </ActionSequenceItemRoot>
  );
}

export default ActionSequenceItem;
