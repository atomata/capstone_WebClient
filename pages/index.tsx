import { Button } from "@mui/material";
import { useEffect } from "react";
import { urlFor } from "../src/util/utils";
import styled from "styled-components";
import {
  verifyLogIn,
  logOut,
  checkIfLoggedIn,
  getUserName,
} from "../src/util/loginCookies";
import Loading from "../src/components/Loading";
import {
  OuterBox,
  ListHeading,
  LoadExperience,
  CreateExperience,
} from "../src/components/Workbench";

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #A5A4EA;
`;

const LeftIndex = styled.div`
  float: left;
  width: 50%;
  margin-top: 100px;
  margin-bottom: 5%;
  margin-left: 140px;
`;

const RightIndex = styled.div`
  float: right;
  width: 100%;
`;

const ImgIllustration = styled.img.attrs({
  alt: "Image Placeholder",
})`
  width: 99%;
  height: 650px;
  `
;

const LogOutButton = styled(Button)`
  && {
    display: block-inline;
    color: #1710A1;
    font-size: 15px;
    font-weight: bold;
    float: right;
    margin-top: -100px;
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
          <ImgIllustration src={urlFor("assets/teaching.svg")} />
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
