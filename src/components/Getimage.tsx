import {useState} from "react"
import styled from "styled-components"
import httpTrigger from "../../api/get_pic/index";
import { urlFor } from "../util/utils";

const KittyImage = styled.img`
  width: 25em;
  height: auto;
`;

const MyButton = styled.button.attrs({
    children: "Button"
    })`
    background: #866f91;
    width: 10em;
    height: 5em;
    margin-bottom: 2rem;
    margin-top: 4rem;
    position: absolute;
    z-index: 5;
    opacity: 1.0;
    `;


const button = (): JSX.Element => {
    const [data, setData] = useState("");

    const getData = () => {
        fetch(urlFor("api/get_pic"))
        .then((got) => got.blob())
        .then((blob) => setData(URL.createObjectURL(blob)));
    }

    return (
        <div>
            <MyButton type = "button" onClick = {getData}></MyButton>
            <p>{getData}</p>
            <KittyImage src={data} alt="Kitty" />
        </div>
    );
};

export default button;