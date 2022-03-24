import styled from "styled-components";
import useKeypress from "react-use-keypress";
import React, { useState } from "react";
import { Rnd } from "react-rnd";

const TextDiv = styled.div`
  background: #3f3d56;
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  border-radius: 15px;
`;

const DescLabel = styled.label`
  position: absolute;
  top: 1.5em;
  left: 0.7em;
  right: 0.7em;
  bottom: 1.5em;
  font-family: Inter, monospace;
  font-size: 1.6em;
  word-break: break-all;
  color: white;
  border-radius: 15px;
  overflow-y: scroll;
  &{
    scrollbar-color: #a5a4ea #3f3d56;
    scrollbar-width: thin;
  } 
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background: #a5a4ea;
    border-radius: 1em;
    background-clip: padding-box;
  }
`;

const TextPreview = ({ desc }: any): JSX.Element => {
  const [isExpanded, setExpanded] = useState(true);
  const isEmpty = desc === "" || desc === undefined;

  useKeypress(" ", () => {
    setExpanded(!isExpanded);
  });

  return isExpanded && !isEmpty ? (
    <Rnd
      cancel=".noDrag"
      minWidth="200px"
      minHeight="150px"
      maxWidth="400px"
      maxHeight="250px"
      dragAxis="both"
      bounds="parent"
    >
      <TextDiv>
        <DescLabel className="noDrag">{desc}</DescLabel>
      </TextDiv>
    </Rnd>
  ) : (
    <div />
  );
};

export default TextPreview;
