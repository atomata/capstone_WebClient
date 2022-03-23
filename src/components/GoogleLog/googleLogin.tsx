import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { refreshTokenSetup } from "./refreshTokenSetup";
import {useGoogleLog} from '../../util/customHooks/googleLoginFunc';

const clientId =
  "940221773800-2kpn0pebpu339lmg7tgeu675aooj1mln.apps.googleusercontent.com";

function Login() {
const {onSuccess, onFailure} = useGoogleLog();
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}

export default Login;
