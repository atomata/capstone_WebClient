import Link from "next/link";

/*
import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { verifyLogIn, logOut, checkIfLoggedIn, getUserName } from "../src/util/loginCookies";

const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;

const ApparatusList = () => {
  const apparatusIDList = ["evil-cylinder", "wobble-sphere"];

  return (
    <Content>
      {apparatusIDList.map((data, index) => (
        <Link
          key={index}
          href={{
            pathname: "/experience",
            query: { id: data },
          }}
        >
          <Button>{data}</Button>
        </Link>
      ))}
    </Content>
  );
};

function Home(): JSX.Element {
  useEffect(() => {verifyLogIn()}, [])

  return !checkIfLoggedIn() ? (
    <main></main>
  ) :
  (
    <main>
      <h2>Welcome {getUserName()}!</h2>
      <h1>SELECT AN APPARATUS</h1>
      <ApparatusList />
      <Button onClick={logOut}>Log Out</Button>
    </main>
  );
}
*/

import {Button} from "@material-ui/core";

const Home = (): JSX.Element => (
  <main>
      <Link
          key="selectionPage"
          href={{
              pathname: "/selection",
          }}
      >
          <Button> Create New Experience</Button>
      </Link>
      <Link
          key="experiencePage"
          href={{
              pathname: "/experience",
              query: { dataId: "testexp1" , isApparatusId: false, userId: "testuser1" },
          }}
      >
          <Button> Load Test Experience</Button>
      </Link>
  </main>
);


export default Home;
