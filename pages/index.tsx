import styled from "styled-components";
import Link from 'next/link'
import React from "react";
import { Button } from "@material-ui/core";


const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const LinkButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Click Me
    </a>
  )
})

/*
  TODO:
  - Generate Apparatus List by reading all apparatuses (not hard coded)
  - Load JSON based on Apparatus ID
*/

const Home = (): JSX.Element => (
  <main>
    <Content>
    <h1>SELECT AN APPARATUS</h1>
    <Link  href={{
      pathname: "/experience",
      query: { id: "evil-cylinder" },
    }}>
      <Button>Evil-Cylinder</Button>
    </Link>
    <Link  href={{
      pathname: "/experience",
      query: { id: "wobble-sphere" },
    }}>
      <Button>Wobble-Sphere</Button>
    </Link>
    </Content>
  </main>
);

export default Home;
