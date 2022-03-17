import { render } from "@testing-library/react";
import React from "react";

import TextPreview from "../components/Editor/TextPreview";

test("Text editor renders without crashing", () => {
  render(<TextPreview />);
});
