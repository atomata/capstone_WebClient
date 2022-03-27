import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
import React from "react";
import styles from "../../SideBarButtons.module.css";

const ActionSequenceItemRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 10em;
`;

const ActionSequenceItemApparatus = styled.div`
  text-align: center;
  display: inline-block;
  height: 1.5em;
  margin: 0.5em;
  font-size: 14px;
  font-family: Inter, monospace;
  color: #ffffff;
`;

const Header = styled.div`
  display: flex;
  height: 1.5em;
  justify-content: right;
  width: 100%;
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
      <Header>
        <CancelIcon
          className={styles.cancelButton}
          sx={{ fontSize: "20px" }}
          onClick={(e) => {
            e.stopPropagation();
            removeAction();
          }}
        />
      </Header>
      <ActionSequenceItemApparatus>
        {id}:{name}
      </ActionSequenceItemApparatus>
    </ActionSequenceItemRoot>
  );
}

export default ActionSequenceItem;
