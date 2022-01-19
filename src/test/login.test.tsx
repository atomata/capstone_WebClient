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

function renderForm(name, pass, result) {
  return (<form className="loginForm" autoComplete="off" onSubmit={result.current.handleSubmit}>
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

  it("empty name and password fields", () => {   
    const { result } = renderHook(useLoginSubmit);
    const { getByTestId } = render(renderForm('', '', result));
    const buttonNode = getByTestId("login-button");
    fireEvent.click(buttonNode);

    expect(result.current.nameErr).toBe("Name field cannot be empty");
    expect(result.current.passErr).toBe("Password field cannot be empty");
  });

  it("name field is too small", () => {
    const { result } = renderHook(useLoginSubmit);
    const { getByTestId } = render(renderForm('ab', '', result));
    const buttonNode = getByTestId("login-button");
    fireEvent.click(buttonNode);

    expect(result.current.nameErr).toBe("Name field cannot be under 3 characters long");
  });

  it("name and password fields are invalid", () => {
    const { result } = renderHook(useLoginSubmit);
    const { getByTestId } = render(renderForm(" ahd!jdka//", "           ", result));
    const buttonNode = getByTestId("login-button");
    fireEvent.click(buttonNode);

    expect(result.current.nameErr).toBe("Name field cannot contain special characters");
    expect(result.current.passErr).toBe("Password field cannot contain blank spaces");
  });

  it("name and password are perfect", () => {
    const { result } = renderHook(useLoginSubmit);
    const { getByTestId } = render(renderForm("its", "me", result));
    const buttonNode = getByTestId("login-button");
    fireEvent.click(buttonNode);

    expect(result.current.nameErr).toBe("");
    expect(result.current.passErr).toBe("");
  });
});


