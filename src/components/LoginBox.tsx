import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import { useLoginSubmit } from "../util/loginfunc/loginBoxFunc";

const LoginRoot = styled.div`
  margin-bottom: 2rem;
  margin-top: 4rem;
  justify-content: center;
  flex-direction: column;
  justify-items: center;
`;

const LoginContainer = styled.div`
  height: 500px;
  width: 500px;
  text-align: center;
  padding: 15px;
  background-color: grey;
`;

const LoginFields = styled.div`
  margin-top: 65px;
  padding: 15px;
`;

const LoginButton = styled(Button)`
  && {
    background-color: #5dc0cb;
    display: block-inline;
    margin-top: 45px;
  }
`;

function LoginBox(): JSX.Element {
  const {
    nameErr,
    passErr,
    handleSubmit
  } = useLoginSubmit();

  // https://mui.com/components/text-fields/
  return (
    <LoginRoot>
      <LoginContainer>
        <form className="loginForm" autoComplete="off" onSubmit={handleSubmit}>
          <h1>LOG IN</h1>
          <LoginFields>
            <TextField
              required
              error={nameErr !== ''}
              id="username-input"
              label="Username"
              helperText={nameErr}
            />
            <br />
            <TextField
              required
              error={passErr !== ''}
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              helperText={passErr}
            />
            <br />
            <LoginButton type="submit" variant="contained">Log In</LoginButton>
          </LoginFields>
        </form>
      </LoginContainer>
    </LoginRoot>
  );
}

export default LoginBox;
