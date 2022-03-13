import styled from "styled-components";
import useKeypress from 'react-use-keypress';
import React, { useState } from "react";

const TextDiv = styled.div`
  background: #3f3d56;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  width: 35em;
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
    const isEmpty = (desc === "" || desc === undefined);;

    useKeypress(" ", () => {
      setExpanded(!isExpanded);
    });

    return isExpanded && !isEmpty ? (
      <TextDiv>
        <DescLabel>{desc}</DescLabel>  
      </TextDiv>
    ) : (
      <div/>
    );
};

export default TextPreview;
