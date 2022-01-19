import { Button, TextField } from "@material-ui/core";
import { render, fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import {
  checkIfLoggedIn,
} from "../util/loginCookies";
import { useLoginSubmit } from "../util/loginfunc/loginBoxFunc";

jest.mock("universal-cookie");
jest.mock("next/router");

describe("test checkinloggedin() with no login cookie", () => {

  it("cookies.get", () => {
    expect(checkIfLoggedIn()).toBe(false);
  });
});

function renderForm(name, pass, r) {
  return (<form className="loginForm" autoComplete="off" onSubmit={r.current.handleSubmit}>
          <TextField
            id="username-input"
            inputProps={{ "data-testid": "username-input" }}
            value={name}
          />
          <TextField
            id="password-input"
            inputProps={{ "data-testid": "password-input" }}
            type="password"
            value={pass}
          />
          <Button type="submit" data-testid="login-button">Log In</Button>
        </form>
  );
}

describe("test useLoginSubmit", () => {
  let r;

  beforeEach(() => {
    const { result } = renderHook(useLoginSubmit);
    r = result;
  });

  it("empty name and password fields", () => {   
    const { getByTestId } = render(renderForm('', '', r));
    const buttonNode = getByTestId("login-button");
    fireEvent.click(buttonNode);

    expect(r.current.nameErr).toBe("Name field cannot be empty");
    expect(r.current.passErr).toBe("Password field cannot be empty");
  });

  it("name field is too small", () => {
    const { getByTestId } = render(renderForm('ab', '', r));
    const buttonNode = getByTestId("login-button");
    fireEvent.click(buttonNode);

    expect(r.current.nameErr).toBe("Name field cannot be under 3 characters long");
  });

  it("name and password fields are invalid", () => {
    const { getByTestId } = render(renderForm(" ahd!jdka//", "           ", r));
    const buttonNode = getByTestId("login-button");
    fireEvent.click(buttonNode);

    expect(r.current.nameErr).toBe("Name field cannot contain special characters");
    expect(r.current.passErr).toBe("Password field cannot contain blank spaces");
  });

  it("name and password are perfect", () => {
    const { getByTestId } = render(renderForm("its", "me", r));
    const buttonNode = getByTestId("login-button");
    fireEvent.click(buttonNode);

    expect(r.current.nameErr).toBe("");
    expect(r.current.passErr).toBe("");
  });
});


