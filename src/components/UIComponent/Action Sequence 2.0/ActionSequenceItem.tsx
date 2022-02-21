import styled from "styled-components";
import Button from "@mui/material/Button";

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
  min-width: stretch;
  height: 1.5em;
  justify-content: center;
  margin: 0.5em;
`;

type ActionSequenceItemProps = {
  id: string;
  name: string;
  removeAction: () => void;
};

function ActionSequenceItem({
  id,
  name,
  removeAction,
}: ActionSequenceItemProps): JSX.Element {
  return (
    <ActionSequenceItemRoot>
      <ActionSequenceItemApparatus>
        {id}:{name}
      </ActionSequenceItemApparatus>
      <ActionSequenceItemAction>
        <Button onClick={removeAction}>Delete</Button>
      </ActionSequenceItemAction>
    </ActionSequenceItemRoot>
  );
}

export default ActionSequenceItem;
