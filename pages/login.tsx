/* eslint-disable prefer-arrow-callback */
import styled from "styled-components";
import React from "react";
import LoginBox from "../src/components/LoginBox";
import { verifyNotLogIn, checkIfLoggedIn } from "../src/util/loginCookies";
import Loading from "../src/components/Loading";

const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
`;

function Login(): JSX.Element {
  React.useEffect(() => {verifyNotLogIn()}, [])

  return !checkIfLoggedIn() ? (
    <main>
      <Content>
        <LoginBox />
      </Content>
    </main>
  ) : (
    <Loading/>
  );
}

export default Login;
