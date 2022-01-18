import { useState } from "react";
import { logIn } from "../loginCookies";

const useLoginSubmit = () => {
    const [nameErr, setNameErr] = useState('');
    const [passErr, setPassErr] = useState('');

    const userFormat = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const passFormat = /\s/;

    const handleSubmit = (event) => {
        event.preventDefault();
        // Retreive the name and password manually
        // Normally we could just use states and update user/pass on change, but that doesn't work with autofill
        const name = event.target.elements["username-input"]._valueTracker.getValue();
        const pass = event.target.elements["password-input"]._valueTracker.getValue();

        let loginError = false;

        // Check if name and pass are not empty
        if (name === '') {
            setNameErr("Name field cannot be empty");
            loginError = true;
        }
        else if (name.length < 3) {
            setNameErr("Name field cannot be under 3 characters long");
            loginError = true;
        }
        else if (userFormat.test(name)) {
            setNameErr("Name field cannot contain special characters");
            loginError = true;
        }
        else
            setNameErr("");

        if (pass === '') {
            setPassErr("Password field cannot be empty");
            loginError = true;
        }
        else if (passFormat.test(pass)) {
            setPassErr("Password field cannot contain blank spaces");
            loginError = true;
        }
        else
            setPassErr("");

        if (pass === "") {
            setPassErr("Password field cannot be empty");
            loginError = true;
        } else setPassErr("");

        // No errors, go and log in
        if (!loginError) logIn(name);
    };

    return { handleSubmit, nameErr, passErr };
};

export { useLoginSubmit };