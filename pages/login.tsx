/* eslint-disable prefer-arrow-callback */
import React from "react";
import LoginBox from "../src/components/LoginBox";
import { verifyNotLogIn, checkIfLoggedIn } from "../src/util/loginCookies";
import Loading from "../src/components/Loading";

function Login(): JSX.Element {
  React.useEffect(() => {verifyNotLogIn()}, [])

  return !checkIfLoggedIn() ? (
    <main>
        <LoginBox />
    </main>
  ) : (
    <Loading/>
  );
}

export default Login;
