import { useState } from "react";
import styled from "styled-components";

const NavBox = styled.div `
background: #262626;
width: 1700px;
height: 2rem;
margin-bottom: 2rem;
position: absolute;
left: 0;
right: auto;
top: 0;
`;
 
const NavigationBox = () :
JSX.Element => (
    <NavBox/>
);
export default NavigationBox;
