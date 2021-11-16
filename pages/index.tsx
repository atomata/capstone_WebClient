import styled from "styled-components";
import NavigationBox from "../src/components/NavigationBox";
import WebglBox from "../src/components/webgl/WebglBox";

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
