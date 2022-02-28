import styled from "styled-components";
import Button from "@mui/material/Button";

const ActionSequenceItemRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: stretch;
  min-width: 12em;
  margin: 0.5em;
  padding-top: 2em;
`;

const ActionSequenceItemApparatus = styled.div`
  display: flex;
  min-width: stretch;
  height: 1.5em;
  justify-content: center;
  margin: 0.5em;
  font-size: 1.05em;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  color: #ffffff;
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
  selectAction: () => void;
};

function ActionSequenceItem({
  id,
  name,
  removeAction,
  selectAction,
}: ActionSequenceItemProps): JSX.Element {
  return (
    <ActionSequenceItemRoot onClick={selectAction}>
      <ActionSequenceItemApparatus>
        {id}:{name}
      </ActionSequenceItemApparatus>
      <ActionSequenceItemAction>
        <Button variant="contained" color="error" onClick={removeAction}>
          Delete
        </Button>
      </ActionSequenceItemAction>
    </ActionSequenceItemRoot>
  );
}

export default ActionSequenceItem;
