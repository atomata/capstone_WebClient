import styled from "styled-components";
import ApparatusListBox from "../src/components/ApparatusListBox";
import ApparatusSelectedListBox from "../src/components/ApparatusSelectedListBox";
import ApparatusTriggerListBox from "../src/components/ApparatusTriggerListBox";
import NavigationBox from "../src/components/NavigationBox";
import WebglBox from "../src/components/WebglBox";
import Getimage from "../src/components/Getimage";

const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;

const Home = (): JSX.Element => (
  <main>
    <Content>
   {/* /<ApparatusListBox /> */}
      <WebglBox />
      <NavigationBox />
      {/* <Getimage/> */}
    </Content>
  </main>
);

export default Home;
