import { useState } from "react";
import { refreshTokenSetup } from "../../components/GoogleLog/refreshTokenSetup";
import { logIn } from "../loginCookies";

const useGoogleLog = () => {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser: ", res.progileObj);
    alert(`Logged in successfully welcome ${res.profileObj.name}`);
    logIn(`${res.profileObj.googleId}`);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("[Login failed] res: ", res);
    alert(`Failed to login.`);
  };

  return {
    onSuccess,
    onFailure,
  };
};

export { useGoogleLog };
