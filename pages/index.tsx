import { Button } from "@mui/material";
import { useEffect } from "react";
import styled from "styled-components";
import {
  verifyLogIn,
  logOut,
  checkIfLoggedIn,
} from "../src/util/loginCookies";
import Loading from "../src/components/Loading";
import {
  OuterBox,
  LoadExperience,
  CreateExperience,
} from "../src/components/Workbench";

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #A5A4EA;
`;

const LeftIndex = styled.div`
  float: left;
  width: 50%;
  padding-top: 8.5em;
  padding-bottom: 5%;
  padding-left: 9em;
`;

const RightIndex = styled.div`
  float: right;
  width: 100%;
`;

const ImgIllustration = styled.img.attrs({
  alt: "Image Placeholder",
})`
  width: 99%;
  height: 40em;
  `
;

const LogOutButton = styled(Button)`
  && {
    display: block-inline;
    color: #1710A1;
    font-size: 0.94em;
    font-weight: bold;
    float: right;
    margin-top: -7em;
  }
`;

function Home(): JSX.Element {
  useEffect(() => {
    verifyLogIn();
  }, []);

  return checkIfLoggedIn() ? (
    <main>
      <Content>
        <LeftIndex>
          <ImgIllustration src= "assets/teaching.svg" />
          <LogOutButton onClick={logOut}>DO YOU WISH TO LOGOUT?</LogOutButton>
        </LeftIndex>
        <RightIndex>
          <OuterBox>
            <LoadExperience />
            <CreateExperience />
          </OuterBox>
        </RightIndex>
      </Content>  
    </main>
  ) : (
    <Loading />
  );
}

export default Home;
