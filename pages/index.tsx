import {Button} from "@material-ui/core";
import { useEffect } from "react";
import {
  verifyLogIn,
  logOut,
  checkIfLoggedIn,
  getUserName,
} from "../src/util/loginCookies";
import Loading from "../src/components/Loading";
import {OuterBox, ListHeading, LoadExperience, CreateExperience } from "../src/components/Workbench";

function Home(): JSX.Element {
  useEffect(() => {
    verifyLogIn();
  }, []);

  return checkIfLoggedIn() ? (
    <main>
      <h1>Welcome {getUserName()}!</h1>
      <OuterBox>
        <ListHeading>Load an Experience</ListHeading>
        <LoadExperience />
        <CreateExperience />
      </OuterBox>
      <Button onClick={logOut}>Log Out</Button>
    </main>
  ) : (
    <Loading />
  );
}

export default Home;