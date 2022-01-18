import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { changeSkybox, defaultCameraView } from "../util/unityContextActions";

const NavButton = styled(Button)`
  && {
    color: white;
    display: block-inline;
  }
`;
const Navbar = ({ save, toggle }) => {
  const [skybox, setSkybox] = useState(true);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <NavButton key="return">
              {" "}
              <Link
                href={{
                  pathname: "/selection",
                }}
              >
                Return
              </Link>
            </NavButton>
            <NavButton key="toggle" onClick={toggle}>
              Toggle Preview Mode
            </NavButton>
            <NavButton key="save" onClick={save}>
              Save
            </NavButton>
            <NavButton key="cam_view" onClick={() => defaultCameraView()}>
              Return Camera
            </NavButton>
            <NavButton
              key="skybox"
              onClick={() => {
                if (skybox) changeSkybox("space");
                else changeSkybox("space");
                setSkybox((val) => !val);
              }}
            >
              Change Skybox
            </NavButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
