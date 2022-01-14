import Cookies from 'universal-cookie';
import Router from "next/router";

const cookies = new Cookies();

// Verify that the user is not logged in
// If so and on the Login Page, redirect to Index page
function verifyNotLogIn(){
    if(cookies.get('user') !== undefined)
        redirectToIndex();
}

// Verify that the user is logged in
// If not and on anything but the Login Page, redirect to Login page
function verifyLogIn(){
    if(cookies.get('user') === undefined)
        redirectToLogIn();      
}

// Checks cookies to see if user is logged in
function checkIfLoggedIn(){
    return cookies.get('user') !== undefined;
}

function getUserName(){
    return cookies.get('user');
}

// Logs user in with given param username
function logIn(username){
    // We're testing on localhost
    if(document.location.host === "localhost:3000")
        cookies.set('user', username, {domain: window.location.hostname, path: '/', secure: true, sameSite: 'none'});
    else
        cookies.set('user', username, {domain: window.location.hostname, path: '/', secure: true, sameSite: 'none'});

    console.log(document.location.host);
    console.log(window.location.hostname);
    console.log(document.location);
    console.log(process.env);
    console.log(process.env.NODE_ENV);

    redirectToIndex();
}

// Logs user out by removing their cookie
function logOut(){
    // We're testing on localhost
    if(document.location.host === "localhost:3000")
        cookies.remove('user', {domain: 'localhost', path: '/', secure: true, sameSite: 'none'});
    else
        cookies.remove('user', {domain: 'azurestaticapps.net', path: '/', secure: true, sameSite: 'none'});
        
    redirectToLogIn();
}

// After user logs in
function redirectToIndex(){
    Router.push('/');
}

// After user logs out
function redirectToLogIn(){
    Router.push('/login');
}


export {checkIfLoggedIn, logIn, logOut, verifyLogIn, verifyNotLogIn, getUserName}