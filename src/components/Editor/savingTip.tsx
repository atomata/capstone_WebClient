import { useContext } from "react";
import styled from "styled-components";
import { SideBarContext } from "../../util/customHooks/SideBarContext";

const SavingTipBox = styled.div`
  display: absolute;
  width: inherit;
  height: inherit;
  background-color: gray;
  color: white;
`;

function SavingTip(): JSX.Element {
  const { savingTip } = useContext(SideBarContext);
  return (
    <div>
      {savingTip? <SavingTipBox>Saving</SavingTipBox>: <div />}
    </div>
  );
}

export default SavingTip;
