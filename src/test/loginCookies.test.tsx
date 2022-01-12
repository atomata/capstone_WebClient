import {
  checkIfLoggedIn,
} from "../util/loginCookies";

jest.mock("universal-cookie");

describe("test checkinloggedin() with no login cookie", () => {

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
