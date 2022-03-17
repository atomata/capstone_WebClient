import { render } from "@testing-library/react";
import React from "react";
import ActionSequenceItem from "../components/Editor/ActionSequence/ActionSequenceItem";

test("Text editor renders without crashing", () => {
  render(<ActionSequenceItem selectAction={()=>undefined}  removeAction={()=>undefined} name="test" id="test"/>);
});
