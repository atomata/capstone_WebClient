import styled from "styled-components";
import NavigationBox from "../src/components/NavigationBox";
import WebglBox from "../src/components/webgl/WebglBox";
import wobbleSphere from "../src/data/wobble-sphere.json";
import evilCylinder from "../src/data/evil-cylinder.json";
import {getjsonfromurl} from "../api/getjson/getjson"
import React, { useState } from 'react';

const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;

const LoadedView = ({ id }): JSX.Element => (
  <main>
    <Content>
      <WebglBox json={id} />
      <p>{id}</p>
      <NavigationBox />
    </Content>
  </main>
);

const EmptyView = () : JSX.Element => (
  <main>
    <Content>
      <p>No</p>
    </Content>
  </main>
)

function Experience ({ id }):  JSX.Element {
  const [loading, setLoading] = useState(true);
  const [jsonFile, setJsonFile] = useState([]);

  React.useEffect(function effectFunction() {
    getjsonfromurl(id).then((responseJson) => {
      setJsonFile(responseJson);
      setLoading(false);
    });
   }, []);

  return (
    (!loading) ?
    <main>
      <Content>
        <WebglBox json={jsonFile} />       
        <NavigationBox />
      </Content>
    </main> : <EmptyView/>
  );
};

Experience.getInitialProps = ({ query: { id } }) => ({ id });

export default Experience;
