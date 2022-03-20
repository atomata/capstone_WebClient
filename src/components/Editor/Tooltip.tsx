import React from "react";
import { Tooltip as Tippy } from "react-tippy";
import "react-tippy/dist/tippy.css";

export default function Tooltip({ children, html }): JSX.Element {
  return (
    <Tippy
      trigger="mouseenter"
      position="right"
      size="small"
      html={html}
    >
      {children}
    </Tippy>
  );
}
