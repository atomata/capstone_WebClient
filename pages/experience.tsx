import styled from "styled-components";
import ApparatusListBox from "../src/components/apparatusLists/ApparatusListBox";
import ApparatusSelectedListBox from "../src/components/apparatusLists/ActionSequenceBox";
import ApparatusTriggerListBox from "../src/components/apparatusLists/ApparatusTriggerListBox";
import NavigationBox from "../src/components/NavigationBox";
import WebglBox from "../src/components/webgl/WebglBox";
import Getimage from "../src/components/Getimage";

import wobbleSphere from "../src/data/wobble-sphere.json";
import evilCylinder from "../src/data/evil-cylinder.json";

const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;


// TEMPORARY FUNCTION
// REPLACE WHEN WE LOAD FROM AZURE DB
const loadJSON = (id) => {
    if(id == "wobble-sphere")
      return wobbleSphere;

    return evilCylinder;

};

const Experience = ({id}): JSX.Element => (
  <main>
    <Content>
      {/* /<ApparatusListBox /> */}
      <WebglBox json={loadJSON(id)}/>
      <NavigationBox />
      {/* <Getimage/> */}
    </Content>
  </main>
);

Experience.getInitialProps = ({ query: { id } }) => {
  return { id };
}

export default Experience;
