// import Cookies from "universal-cookie";
import { act } from "react-test-renderer";
import {
  checkIfLoggedIn,
  logIn,
  logOut,
  verifyLogIn,
  verifyNotLogIn,
  getUserName,
} from "../util/loginCookies";

jest.mock("universal-cookie");

describe("test checkinloggedin() with no login cookie", () => {
  //   jest.mock("universal-cookie", () => ({
  //     __esModule: true,
  //     default() {
  //       this.get = jest.fn(() => undefined);
  //     },
  //   }));

  it("cookies.get", () => {
    expect(checkIfLoggedIn()).toBe(false);
  });
});

describe("test checkinloggedin() with cookie set", () => {
  //   jest.mock("universal-cookie", () => ({
  //     __esModule: true,
  //     default: function() {
  //       this.get = jest.fn(() => "string");
  //     },
  //   }));
  it("cookies.get", () => {
    expect(checkIfLoggedIn()).toBe(true);
  });
});
