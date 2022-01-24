import { render } from "@testing-library/react";
import App from "../../pages";

jest.mock("next/router");

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});
