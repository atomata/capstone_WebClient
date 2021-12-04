import Cookies from 'universal-cookie';
import { useEffect } from "react";
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
    cookies.set('user', username, {domain: 'localhost', path: '/', secure: true, sameSite: 'none'});
    redirectToIndex();
}

// Logs user out by removing their cookie
function logOut(){
    cookies.remove('user', {domain: 'localhost', path: '/', secure: true, sameSite: 'none'});
    console.log(getUserName());
    redirectToLogIn();
}

// After user logs in
function redirectToIndex(){
    Router.push('/');
}

// After user logs out
function redirectToLogIn(){
    console.log("to login");
    Router.push('/login');
}


export {checkIfLoggedIn, logIn, logOut, verifyLogIn, verifyNotLogIn}