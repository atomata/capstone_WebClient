import {
  checkIfLoggedIn,
} from "../util/loginCookies";

jest.mock("universal-cookie");

describe("test checkinloggedin() with no login cookie", () => {

  it("cookies.get", () => {
    expect(checkIfLoggedIn()).toBe(false);
  });
});
