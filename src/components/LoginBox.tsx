import styled from "styled-components";
import Unity from "react-unity-webgl";
import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Label } from "@material-ui/icons";
import Cookies from 'universal-cookie';
import { logIn } from "../util/loginCookies";
import { ErrorSharp } from "@mui/icons-material";

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

function LoginBox(): JSX.Element {
    const cookies = new Cookies();
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [passErr, setPassErr] = useState('');

    function ValidateLogin(){
        let loginError = false;

        // Check if name and pass are not empty
        if(name === ''){
            setNameErr("Name field cannot be empty");
            loginError = true;
        }
        else
            setNameErr("");
        
        if(pass === ''){
            setPassErr("Password field cannot be empty");
            loginError = true;
        }
        else
            setPassErr("");

        // No errors, go and log in
        if(!loginError)
            logIn(name);
    }

    // https://mui.com/components/text-fields/
    return (
        <LoginRoot> 
            <LoginContainer>
                <form className="loginForm" noValidate autoComplete="off">
                    <h1>LOG IN</h1>
                    <TextField
                        required
                        error={nameErr !== ''}
                        id="username-input"
                        label="Username"
                        helperText={nameErr}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        required
                        error={passErr !== ''}
                        id="password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        helperText={passErr}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <Button onClick={() => ValidateLogin()}>Log In</Button>
                </form>
            </LoginContainer>                   
        </LoginRoot>
    );
}

export default LoginBox;