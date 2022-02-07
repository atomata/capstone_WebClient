import styled from "styled-components";

const ActionBarRoot = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: red;
`;

function ActionBar(): JSX.Element {
  return <ActionBarRoot>
      Action Bar elements here
  </ActionBarRoot>;
}

export default ActionBar;
