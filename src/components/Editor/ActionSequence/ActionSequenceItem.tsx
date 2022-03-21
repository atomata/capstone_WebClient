import styled from "styled-components";
import Button from "@mui/material/Button";

const ActionSequenceItemRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 10em;
  justify-content: center;
`;

const ActionSequenceItemApparatus = styled.div`
  display: inline-block;
  height: 1.5em;
  margin: 0.5em;
  font-size: 1em;
  font-family: Inter, monospace;
  color: #ffffff;
`;

const ActionSequenceItemAction = styled.div`
  display: flex;
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
    <ActionSequenceItemRoot
      onClick={() => {
        selectAction();
      }}
    >
      <ActionSequenceItemApparatus>
        {id}:{name}
      </ActionSequenceItemApparatus>
      <ActionSequenceItemAction>
        <Button
          variant="contained"
          color="error"
          onClick={(e) => {
            e.stopPropagation();
            removeAction();
          }}
        >
          Delete
        </Button>
      </ActionSequenceItemAction>
    </ActionSequenceItemRoot>
  );
}

export default ActionSequenceItem;
