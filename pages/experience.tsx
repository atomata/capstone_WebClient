import styled from "styled-components";
import NavigationBox from "../src/components/NavigationBox";
import WebglBox from "../src/components/webgl/WebglBox";
import wobbleSphere from "../src/data/wobble-sphere.json";
import evilCylinder from "../src/data/evil-cylinder.json";
import {getjsonfromurl} from "../api/getjson/getjson"
const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;

// TEMPORARY FUNCTION
// REPLACE WHEN WE LOAD FROM AZURE DB
const loadJSON = (id) => {
  //if (id === "wobble-sphere") return wobbleSphere;

  return getjsonfromurl();
};

const Experience = ({ id }): JSX.Element => (
  <main>
    <Content>
      {console.log(getjsonfromurl())}
      {/* /<ApparatusListBox /> */}
      <WebglBox json={loadJSON(id)} />
      <NavigationBox />
      {/* <Getimage/> */}
    </Content>
  </main>
);

Experience.getInitialProps = ({ query: { id } }) => ({ id });

export default Experience;
