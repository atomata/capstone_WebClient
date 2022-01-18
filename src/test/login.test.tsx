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

describe("test useLoginSubmit", () => {
  it("empty name and password fields", () => {
    const { result } = renderHook(useLoginSubmit);
    const { getByText } = render(
        <form className="loginForm" autoComplete="off" onSubmit={result.current.handleSubmit}>
          <TextField
            id="username-input"
            value=""
          />
          <TextField
            id="password-input"
            type="password"
            value=""
          />
          <Button type="submit" variant="contained">Log In</Button>
        </form>
    );
    const node = getByText("Log In");
    fireEvent.click(node);

    expect(result.current.nameErr).toBe("Name field cannot be empty");
    expect(result.current.passErr).toBe("Password field cannot be empty");
  });

  it("name field is too small", () => {
    const { result } = renderHook(useLoginSubmit);
    const { getByText } = render(
        <form className="loginForm" autoComplete="off" onSubmit={result.current.handleSubmit}>
          <TextField
            id="username-input"
            value="ab"
          />
          <TextField
            id="password-input"
            type="password"
            value="cd"
          />
          <Button type="submit" variant="contained">Log In</Button>
        </form>
    );
    const node = getByText("Log In");
    fireEvent.click(node);

    expect(result.current.nameErr).toBe("Name field cannot be under 3 characters long");
  });

  it("name and password fields are invalid", () => {
    const { result } = renderHook(useLoginSubmit);
    const { getByText } = render(
        <form className="loginForm" autoComplete="off" onSubmit={result.current.handleSubmit}>
          <TextField
            id="username-input"
            value=" ahd!jdka//"
          />
          <TextField
            id="password-input"
            type="password"
            value="           "
          />
          <Button type="submit" variant="contained">Log In</Button>
        </form>
    );
    const node = getByText("Log In");
    fireEvent.click(node);

    expect(result.current.nameErr).toBe("Name field cannot contain special characters");
    expect(result.current.passErr).toBe("Password field cannot contain blank spaces");
  });

  it("name and password are perfect", () => {
    const { result } = renderHook(useLoginSubmit);
    const { getByText } = render(
        <form className="loginForm" autoComplete="off" onSubmit={result.current.handleSubmit}>
          <TextField
            id="username-input"
            value="its"
          />
          <TextField
            id="password-input"
            type="password"
            value="me"
          />
          <Button type="submit" variant="contained">Log In</Button>
        </form>
    );
    const node = getByText("Log In");
    fireEvent.click(node);

    expect(result.current.nameErr).toBe("");
    expect(result.current.passErr).toBe("");
  });
});


