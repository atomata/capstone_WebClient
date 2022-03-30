import React from "react";
import GoogleLogin from "react-google-login";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useGoogleLog } from "../../util/customHooks/googleLoginFunc";

const clientId =
  "940221773800-2kpn0pebpu339lmg7tgeu675aooj1mln.apps.googleusercontent.com";

const GoogleLoginButton = styled(Button)`
  && {
    background-color: #ffffff;
    display: block-inline;
    color: #1710a1;
    margin-top: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 3.7em;
    padding-right: 3.7em;
    font-weight: bold;
  }
`;
function Login() {
  const { onSuccess, onFailure } = useGoogleLog();
  return (
    <div>
      {" "}
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <GoogleLoginButton
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Google Log In
          </GoogleLoginButton>
        )}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}

export default Login;
