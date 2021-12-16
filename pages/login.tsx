/* eslint-disable prefer-arrow-callback */
import styled from "styled-components";
import React from "react";
import LoginBox from "../src/components/LoginBox";
import { verifyNotLogIn, checkIfLoggedIn } from "../src/util/loginCookies";

const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;

const LoadingView = (): JSX.Element => (
  <main>
    <Content>
      <p>Loading....</p>
    </Content>
  </main>
);

function Login(): JSX.Element {
  React.useEffect(() => {verifyNotLogIn()}, [])

  return !checkIfLoggedIn() ? (
    <main>
      <Content>
        <LoginBox />
      </Content>
    </main>
  ) : (
    <LoadingView />
  );
}

export default Login;
