import styled from "styled-components";
import Unity from "react-unity-webgl";
import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Label } from "@material-ui/icons";
import Cookies from 'universal-cookie';
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

function LoginBox(): JSX.Element {
    const cookies = new Cookies();
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    function ValidateLogin(){
        // TO DO:
        // Check if username and password exist AND match
        // If so, add cookies to indicate that the user is logged in and go to index
        // Ensure that no other page can be accessed unless logged in using cookies
        // Logging out will remove cookies
        // cry
        console.log(name)
        logIn(name);
        console.log(cookies.get('user'));
    }

    // https://mui.com/components/text-fields/
    return (
        <LoginRoot> 
            <LoginContainer>
                <form className="loginForm" noValidate autoComplete="off">
                    <h1>LOG IN</h1>
                    <TextField
                        required
                        id="username-input"
                        label="Username"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        required
                        id="password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <Button onClick={() => ValidateLogin()}>Log In</Button>
                </form>
            </LoginContainer>                   
        </LoginRoot>
    );
}

export default LoginBox;