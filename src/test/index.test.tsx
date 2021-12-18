import { render } from "@testing-library/react";
import App from "../../pages";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});
