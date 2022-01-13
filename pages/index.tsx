import { Button } from "@material-ui/core";
import { useEffect } from "react";
import {
  verifyLogIn,
  logOut,
  checkIfLoggedIn,
  getUserName,
} from "../src/util/loginCookies";
import {OuterBox, ListHeading, LoadExperience, CreateExperience } from "../src/components/SupportingComponents/Workbench"

const Home = () => {
  useEffect(() => {
    verifyLogIn();
  }, []);

  return checkIfLoggedIn() ? (
    <main>
      <h1>Welcome {getUserName()}!</h1>
      <Button onClick={logOut}>Log Out</Button>
      <OuterBox>
        <ListHeading>Load an Experience</ListHeading>
        <LoadExperience />
        <CreateExperience />
      </OuterBox>
    </main>
  ) : (
    <main />
  );
};

export default Home;
