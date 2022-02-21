import { Paper } from "@mui/material";
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

type ActionSequenceItemProps = {
  id:string
  name:string
  action:string
}

function ActionSequenceItem({id,name,action}:ActionSequenceItemProps): JSX.Element {
  return (
    <ActionSequenceItemRoot>
      <ActionSequenceItemApparatus>
        {id}:{name}
       </ActionSequenceItemApparatus>
      <ActionSequenceItemAction>{action}</ActionSequenceItemAction>
    </ActionSequenceItemRoot>
  );
}

export default ActionSequenceItem;
