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
  width: 45%;
`;

const RightIndex = styled.div`
  float: right;
  width: 100%;
`;

const ImgIllustration = styled.img.attrs({
  alt: "Image Placeholder",
})
  `
  width: 99%;
  display:block;
  height: 600px;
  margin-top: 25%;
  margin-bottom: 5%;
  margin-left: 120px;
  `
;

const LogOutButton = styled(Button)`
  && {
    background-color: #FFFFFF;
    display: block-inline;
    color: #1710A1;
    margin-top: 30px;
    padding: 15px;
    padding-left: 85px;
    padding-right: 85px;
    font-weight: bold;
    border-radius: 4px;
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
          <LogOutButton onClick={logOut}>Log Out</LogOutButton>
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
