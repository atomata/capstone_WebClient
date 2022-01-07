import Cookie from 'js-cookie'
import {checkIfLoggedIn, logIn, logOut, verifyLogIn, verifyNotLogIn, getUserName} from '../util/loginCookies'



beforeEach(() => {
    jest.mock('js-cookie', () => jest.fn())
    Cookie.setMockImplementation(()=>({get: () => 'fr'}))
})

test('verify not login in', () => {
    const spy = jest.spyOn(verifyLogIn,)
    verifyLogIn()
})