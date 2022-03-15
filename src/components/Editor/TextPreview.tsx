import styled from "styled-components";
import useKeypress from 'react-use-keypress';
import React, { useState } from "react";
import { Rnd } from "react-rnd";

const TextDiv = styled.div`
  background: #3f3d56;
  min-height: 5em;
  min-width: 10em;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  width: inherit;
  height: inherit;
  text-align:justify;
`;

const DescLabel = styled.label`
  padding: 0.5em;
  text-align: center;
  font-family: Trebuchet MS;
  font-size: 1.6em;
  color: white;
  border-radius: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
`

const TextPreview = ({ desc }: any): JSX.Element => {
    const [isExpanded, setExpanded] = useState(true);
    const isEmpty = (desc === "" || desc === undefined);

    useKeypress(" ", () => {
      setExpanded(!isExpanded);
    });

    return isExpanded && !isEmpty ? (
      <Rnd>
      <TextDiv>
        <DescLabel>{desc}</DescLabel>  
      </TextDiv>
      </Rnd>
    ) : (
      <div/>
    );
};

export default TextPreview;
