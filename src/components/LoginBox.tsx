import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import GoogleLogin from "react-google-login";
import { useState } from "react";
import { useLoginSubmit } from "../util/customHooks/loginBoxfunc";

const LoginRoot = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background-color: #a5a4ea;
  height: 100vh;
`;

const LoginContainer = styled.div`
  text-align: center;
  padding-top: 5em;
  padding-bottom: 5em;
  background: #3f3d56;
  width: 50%;
  margin-left: 50%;
`;

const LoginFields = styled.div`
  margin: 2em;
`;

const LoginButton = styled(Button)`
  && {
    background-color: #ffffff;
    display: block-inline;
    color: #1710a1;
    margin-top: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 6.1em;
    padding-right: 6.1em;
    font-weight: bold;
  }
`;

const ImgIllustration = styled.img.attrs({
  alt: "Image Placeholder",
})`
  @media only screen and (max-width: 1130px) {
    width: 52%;
  }

  @media only screen and (max-width: 700px) {
    width: 48%;
  }

  width: 65%;
  position: absolute;
  display: block;
  height: 75%;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 3em;
`;
const ImgLogo = styled.img.attrs({
  alt: "Image Placeholder",
})`
  display: block;
  height: 30%;
  margin-left: auto;
  margin-right: auto;
`;
const useStyles = makeStyles((theme) => ({
  textField: {
    color: "#FFFFFF",
  },
}));

function LoginBox(): JSX.Element {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const { nameErr, passErr, handleSubmit } = useLoginSubmit();

  const classes = useStyles();

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch ('/api/google-login',{
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers:{
        'Content-Type' : 'application/json',
      },
    })

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };

  const handleLogout = () =>{
    localStorage.removeItem('loginData');
    setLoginData(null)
  }
  // https://mui.com/components/text-fields/
  // '@Url.Content("~/images/1.jpg")'
  // '@Url.Content("~assets/epistaLogo.png")'
  return (
    <LoginRoot>
      <LoginContainer>
        <ImgLogo src="/assets/epistaLogo.png" />
        <form className="loginForm" autoComplete="off" onSubmit={handleSubmit}>
          <LoginFields>
            <TextField
              required
              error={nameErr !== ""}
              id="username-input"
              label="Username"
              helperText={nameErr}
              variant="outlined"
              InputProps={{
                className: classes.textField,
              }}
              InputLabelProps={{
                className: classes.textField,
              }}
            />
            <br />
            <br />
            <TextField
              required
              error={passErr !== ""}
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              helperText={passErr}
              variant="outlined"
              InputProps={{
                className: classes.textField,
              }}
              InputLabelProps={{
                className: classes.textField,
              }}
            />
            <br />
            <LoginButton type="submit" variant="contained">
              LOG IN
            </LoginButton>
            <div>
              {loginData ? (
                <div>
                  <h3>You logged in as {loginData.email}</h3>
                  <button type="button" onClick={handleLogout}>Log Out</button>
                </div>
              ):(              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Log In with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy="single_host_origin"
              />)}

            </div>
          </LoginFields>
        </form>
      </LoginContainer>
      <ImgIllustration src="assets/loginillustration.svg" />
    </LoginRoot>
  );
}

export default LoginBox;
