/* eslint-disable prefer-arrow-callback */
import styled from "styled-components";
import React, { useState } from "react";
import LoginBox from "../src/components/LoginBox";
import Cookies from 'universal-cookie';
import { checkIfLoggedIn } from "../src/util/loginCookies";

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
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();

  console.log(checkIfLoggedIn());

  console.log(cookies.get('user'));

  return !loading ? (
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
