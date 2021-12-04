import Cookies from 'universal-cookie';

const cookies = new Cookies();

function checkIfLoggedIn(){
    return cookies.get('user') !== undefined;
}

function logIn(username){
    cookies.set('user', username, {domain: 'localhost', path: '/', secure: true, sameSite: 'none'});
}

function logOut(){
    cookies.remove('user');
}

export {checkIfLoggedIn, logIn, logOut}