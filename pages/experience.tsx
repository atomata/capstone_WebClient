/* eslint-disable prefer-arrow-callback */
import styled from "styled-components";
import React, { useState } from "react";
import NavigationBox from "../src/components/NavigationBox";
import WebglBox from "../src/components/webgl/WebglBox";
import { getApparatusFromCloud } from "../src/util/getDataFromCloud";

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

const LoadingView = (): JSX.Element => (
  <main>
    <Content>
      <p>Loading....</p>
    </Content>
  </main>
);

function Experience({ id }): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [jsonFile, setJsonFile] = useState([]);

  React.useEffect(() => {
    getApparatusFromCloud(id).then((responseJson) => {
      setJsonFile(responseJson);
      setLoading(false);
    });
  }, [id]);

  return !loading ? (
    <main>
      <Content>
        <WebglBox json={jsonFile} />
        <NavigationBox />
      </Content>
    </main>
  ) : (
    <LoadingView />
  );
}

Experience.getInitialProps = ({ query: { id } }) => ({ id });

export default Experience;
