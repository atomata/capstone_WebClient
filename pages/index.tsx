import { useEffect } from "react";
import styled from "styled-components";
import { verifyLogIn, logOut, checkIfLoggedIn } from "../src/util/loginCookies";
import Loading from "../src/components/Loading";
import { WorkbenchTable } from "../src/components/Workbench";

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  height: 100vh;
  background-color: #a5a4ea;
`;

const LeftIndex = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 45%;
  height: 100%;
  overflow: hidden;
`;

const RightIndex = styled.div`
  display: flex;
  width: 55%;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const ImgIllustration = styled.img.attrs({
  alt: "Image Placeholder",
})`
  width: 70%;
  margin-top: 4em;
  margin-left: auto;
  margin-right: auto;
`;

const LogOutButton = styled.button`
  color: #1710a1;
  background: Transparent;
  border: none;
  font-family: Trebuchet MS;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  margin-left: 22%;
  margin-right: auto;
`;

function Home(): JSX.Element {
  useEffect(() => {
    verifyLogIn();
  }, []);

  return checkIfLoggedIn() ? (
    <main>
      <Content>
        <LeftIndex>
          <ImgIllustration src="assets/teaching.svg" />
          <LogOutButton onClick={logOut}>DO YOU WISH TO LOGOUT?</LogOutButton>
        </LeftIndex>
        <RightIndex>
          <WorkbenchTable />
        </RightIndex>
      </Content>
    </main>
  ) : (
    <Loading />
  );
}

export default Home;
