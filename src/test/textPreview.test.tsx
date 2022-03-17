import { render } from "@testing-library/react";
import React from "react";

import TextPreview from "../components/Editor/TextPreview";

test("Text preview renders without crashing", () => {
  render(<TextPreview />);
});
