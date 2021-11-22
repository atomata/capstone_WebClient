import styled from "styled-components";
import NavigationBox from "../src/components/NavigationBox";
import WebglBox from "../src/components/webgl/WebglBox";
import wobbleSphere from "../src/data/wobble-sphere.json";
import evilCylinder from "../src/data/evil-cylinder.json";
import Link from 'next/link'
import { Button } from "@material-ui/core";

const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;


// TEMPORARY FUNCTION
// REPLACE WHEN WE LOAD FROM AZURE DB
const loadJSON = (id) => {
    if(id === "wobble-sphere")
      return wobbleSphere;

    return evilCylinder;
};

const Experience = ({id}): JSX.Element => (
  <main>
    <Content>
     
      {/* /<ApparatusListBox /> */}
      <WebglBox json={loadJSON(id)}/>
      <NavigationBox />
      <Link  href={{
        pathname: "/",
      }}>
        <Button>Return to Apparatus List</Button>
      </Link>
      {/* <Getimage/> */}
    </Content>
  </main>
);

Experience.getInitialProps = ({ query: { id } }) => ({ id })

export default Experience;
