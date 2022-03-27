import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  width: stretch;
  font-size: 16px;
  color: white;
  font-family: Inter, monospace;
  margin-bottom: 1em;
`;

const Container = styled.div`
  margin-top: 1.5em;
  margin-left: 0.5em;
  margin-right: 0.5em;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const TreeViewContainer = styled.div`
  overflow-y: scroll;
  margin-left: 0.5em;
  &::-webkit-scrollbar {
    width: 0.2em;
  }
  &::-webkit-scrollbar-thumb {
    background: #a5a4ea;
    border-radius: 1em;
    background-clip: padding-box;
  }
`;

export {Header, Container, TreeViewContainer}