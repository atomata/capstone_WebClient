import styled from "styled-components";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useLoginSubmit } from "../util/customHooks/loginBoxfunc";

const LoginRoot = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background-color: #a5a4ea;
  height: 100vh;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #3f3d56;
  width: 50%;
  margin-left: 50%;
  overflow: hidden;
`;

const LoginFields = styled.div`
  margin: 2em;
`;

const LoginButton = styled.button`
  background-color: #ffffff;
  font-family: Trebuchet MS;
  font-size: 14px;
  border-radius: 8px;
  display: block-inline;
  color: #1710a1;
  margin-top: 2em;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  padding-left: 6.2em;
  padding-right: 6.2em;
  font-weight: bold;
  cursor: pointer;
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
  margin-top: 5%;
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
  const { nameErr, passErr, handleSubmit } = useLoginSubmit();

  const classes = useStyles();
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
            <LoginButton type="submit">LOG IN</LoginButton>
          </LoginFields>
        </form>
      </LoginContainer>
      <ImgIllustration src="assets/loginillustration.svg" />
    </LoginRoot>
  );
}

export default LoginBox;
