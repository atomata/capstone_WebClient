import styled from "styled-components";
import { useState, FormEvent } from "react";
import { Button, TextField } from "@material-ui/core";
import { logIn } from "../util/loginCookies";

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
    const [nameErr, setNameErr] = useState('');
    const [passErr, setPassErr] = useState('');

    const userFormat = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const passFormat = /\s/;

    function ValidateLogin(name: string, pass: string){
        let loginError = false;

        // Check if name and pass are not empty
        if(name === ''){
            setNameErr("Name field cannot be empty");
            loginError = true;
        }
        else if (name.length < 3){
            setNameErr("Name field cannot be under 3 characters long");
            loginError = true;
        }
        else if (userFormat.test(name)){
            setNameErr("Name field cannot contain special characters");
            loginError = true;
        }
        else
            setNameErr("");
        
        if(pass === ''){
            setPassErr("Password field cannot be empty");
            loginError = true;
        }
        else if (passFormat.test(pass)){
            setPassErr("Password field cannot contain blank spaces");
            loginError = true;
        }
        else
            setPassErr("");

        // No errors, go and log in
        if(!loginError)
            logIn(name);
    }

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Retreive the name and password manually
        // Normally we could just use states and update user/pass on change, but that doesn't work with autofill
        ValidateLogin(event.target.elements["username-input"]._valueTracker.getValue(), event.target.elements["password-input"]._valueTracker.getValue());
      };

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
                        <br/>
                        <TextField
                            required
                            error={passErr !== ''}
                            id="password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            helperText={passErr}
                        />
                        <br/>
                        <LoginButton type="submit" variant="contained">Log In</LoginButton>
                    </LoginFields> 
                </form>
            </LoginContainer>                   
        </LoginRoot>
    );
}

export default LoginBox;