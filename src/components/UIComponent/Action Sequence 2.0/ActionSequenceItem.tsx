import styled from "styled-components";

const ActionSequenceItemRoot = styled.div`
display : flex;
background-color:  #ffc400;
`



function ActionSequenceItem(): JSX.Element {
    return (
      <ActionSequenceItemRoot>
          Item 1
      </ActionSequenceItemRoot>
    );
  }
  
  export default ActionSequenceItem;

