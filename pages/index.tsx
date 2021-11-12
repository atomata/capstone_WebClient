import styled from "styled-components";
import Link from 'next/link'
import React from "react";


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

const Home = (): JSX.Element => (
  <main>
    <Content>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link  href={{
          pathname: "/experience",
          query: { id: "evil-cylinder" },
        }}>
          <a>Evil-Cylinder</a>
        </Link>
      </li>
      <li>
        <Link  href={{
          pathname: "/experience",
          query: { id: "wobble-sphere" },
        }}>
          <a>Wobble-Sphere</a>
        </Link>
      </li>
    </ul>
    </Content>
  </main>
);

export default Home;
