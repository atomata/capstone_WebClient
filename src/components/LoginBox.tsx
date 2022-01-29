import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { useLoginSubmit } from "../util/customHooks/loginBoxfunc";
import { urlFor } from "../util/utils";
import { makeStyles } from "@mui/styles";

const LoginRoot = styled.div`
  position: relative;
  width: inherit;
  display: flex;
  background-color: #A5A4EA;
`;

const LoginContainer = styled.div`
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background: #3F3D56;
  width: 50%;
  margin-left: 50%;
`;

const LoginFields = styled.div`
  margin: 15px;
`;

const LoginButton = styled(Button)`
  && {
    background-color: #FFFFFF;
    display: block-inline;
    color: #1710A1;
    margin-top: 30px;
    padding: 15px;
    padding-left: 85px;
    padding-right: 85px;
    font-weight: bold;
  }
`;

const ImgIllustration = styled.img.attrs({
  alt: "Image Placeholder",
})
  `
  @media only screen and (max-width: 1130px) {
    width: 52%;
  }

  @media only screen and (max-width: 700px) {
    width: 48%;
  }

  width: 62%;
  position: absolute;
  display:block;
  height: 600px;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left:50px;
  `
;

const ImgLogo = styled.img.attrs({
  alt: "Image Placeholder",
})
  `
  display:block;
  height: 30%;
  margin-left: auto;
  margin-right: auto;
  `
;

const useStyles = makeStyles((theme) => ({
  textField: {
    color: "#FFFFFF"
  },
}));


function LoginBox(): JSX.Element {
  const {
    nameErr,
    passErr,
    handleSubmit
  } = useLoginSubmit();

  const classes = useStyles();

  // https://mui.com/components/text-fields/
  return (
    <LoginRoot>
      <LoginContainer>
      <ImgLogo src={urlFor("assets/epistaLogo.png")} />
        <form className="loginForm" autoComplete="off" onSubmit={handleSubmit}>
          <LoginFields>
            <TextField
              required
              error={nameErr !== ''}
              id="username-input"
              label="Username"
              helperText={nameErr}
              variant="outlined" 
              InputProps={{
                className: classes.textField
              }}
              InputLabelProps={{
                className: classes.textField
              }}
            />
            <br />
            <br />
            <TextField
              required
              error={passErr !== ''}
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              helperText={passErr}
              variant="outlined" 
              InputProps={{
                className: classes.textField
              }}
              InputLabelProps={{
                className: classes.textField
              }}
            />
            <br />
            <LoginButton type="submit" variant="contained">LOG IN</LoginButton>
          </LoginFields>
        </form>
      </LoginContainer>
      <ImgIllustration src={urlFor("assets/loginillustration.svg")} />
    </LoginRoot>
  );
}

export default LoginBox;
