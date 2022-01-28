import { render } from "@testing-library/react";
import React from "react";
import Navbar from "../components/Navbar";

test("Navbar renders without crashing", () => {
  render(
    <Navbar
      save={() => {
        console.log("test");
      }}
      toggle={() => {
        console.log("test");
      }}
    />
  );
});
