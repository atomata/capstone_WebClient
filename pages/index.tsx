import Link from "next/link";
import {Button} from "@material-ui/core";
import { useEffect } from "react";
import { verifyLogIn, logOut, checkIfLoggedIn, getUserName } from "../src/util/loginCookies";

function Home(): JSX.Element {
  useEffect(() => {verifyLogIn()}, [])

  return checkIfLoggedIn() ? (
    <main>
      <h1>Welcome {getUserName()}!</h1>
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
      <Button onClick={logOut}>Log Out</Button>
  </main>
  ):(<main/>);
}


export default Home;
