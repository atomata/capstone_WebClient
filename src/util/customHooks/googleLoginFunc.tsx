import { useState } from "react";
import { refreshTokenSetup } from "../../components/GoogleLog/refreshTokenSetup";
import { logIn } from "../loginCookies";

const useGoogleLog = () => {
    const [name, setName] = useState<string>();
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser: ", res.progileObj);
    alert(`Logged in successfully welcome ${res.profileObj.googleId}`);
    console.log(`${res.profileObj.googleId}`);
    setName(`${res.profileObj.googleId}`);
    console.log("this name:" , name);
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

function removeSpace(x: string){
    const name = x.replace(/\s+/g, '');
    const lowerName = name.toLowerCase();
    return lowerName;
}
export { useGoogleLog };
