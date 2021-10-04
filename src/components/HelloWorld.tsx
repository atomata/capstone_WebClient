import { useState } from "react";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  & > * {
    margin: 0.5em;
  }
`;

const KittyImage = styled.img`
  width: 25em;
  height: auto;
`;

const HelloWorld = (): JSX.Element => {
  const [data, setData] = useState("");

  const getData = () => {
    fetch("/api/message?name=ethan")
      .then((got) => got.blob())
      .then((blob) => setData(URL.createObjectURL(blob)));
  };

  return (
    <Content>
      <p>Click the button below to request a kitty image</p>
      <button type="button" onClick={getData}>
        Click Me
      </button>
      <KittyImage src={data} alt="Kitty" />
    </Content>
  );
};

export default HelloWorld;
export { HelloWorld };
