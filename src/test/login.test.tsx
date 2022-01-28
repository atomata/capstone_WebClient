import { Button, TextField } from "@mui/material";
import { render, fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import {
  checkIfLoggedIn,
} from "../util/loginCookies";
import { useLoginSubmit } from "../util/customHooks/loginBoxfunc";

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
  let count = 0;
  const errInputs = [["", ""],["ab","abb"],[" ahd!jdka//", "           "],["its", "me"]];

  beforeEach(() => {
    const { result } = renderHook(useLoginSubmit);
    r = result;

    const { getByTestId } = render(renderForm(errInputs[count][0], errInputs[count][1], r));
    const buttonNode = getByTestId("login-button");
    fireEvent.click(buttonNode);

    count += 1;
  });

  it("empty name and password fields", () => {   
    expect(r.current.nameErr).toBe("Name field cannot be empty");
    expect(r.current.passErr).toBe("Password field cannot be empty");
  });

  it("name field is too small", () => {
    expect(r.current.nameErr).toBe("Name field cannot be under 3 characters long");
  });

  it("name and password fields are invalid", () => {
    expect(r.current.nameErr).toBe("Name field cannot contain special characters");
    expect(r.current.passErr).toBe("Password field cannot contain blank spaces");
  });

  it("name and password are perfect", () => {
    expect(r.current.nameErr).toBe("");
    expect(r.current.passErr).toBe("");
  });
});


