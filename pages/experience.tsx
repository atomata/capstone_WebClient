import styled from "styled-components";
import ApparatusListBox from "../src/components/apparatusLists/ApparatusListBox";
import ApparatusSelectedListBox from "../src/components/apparatusLists/ActionSequenceBox";
import ApparatusTriggerListBox from "../src/components/apparatusLists/ApparatusTriggerListBox";
import NavigationBox from "../src/components/NavigationBox";
import WebglBox from "../src/components/webgl/WebglBox";
import Getimage from "../src/components/Getimage";

const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;


const Experience = ({id}): JSX.Element => (
  <main>
    <Content>
   {/* /<ApparatusListBox /> */}
      <WebglBox />
      <NavigationBox />
      {/* <Getimage/> */}
    </Content>
  </main>
);

Experience.getInitialProps = ({ query: { id } }) => {
  return { id };
}

export default Experience;
