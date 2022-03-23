import React from "react";
import GoogleLogin from "react-google-login";
import { refreshTokenSetup } from './refreshTokenSetup' 

const clientId = "940221773800-2kpn0pebpu339lmg7tgeu675aooj1mln.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser: ", res.progileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name}`
    )
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("[Login failed] res: ", res);
    alert(
      `Failed to login.`
    )
  };
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
