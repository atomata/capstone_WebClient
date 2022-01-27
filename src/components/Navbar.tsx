import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Link from "next/link";
import { IconButton } from "@material-ui/core";
import { Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { changeSkybox, defaultCameraView } from "../util/unityContextActions";

const NavButton = styled(Button)`
  && {
    color: white;
    display: block-inline;
  }
`;

const ITEM_HEIGHT = 48;
const Navbar = ({ save, toggle }) => {
  const skyboxList = [
    "space",
    "ocean",
    "default",
    "dark-storm",
    "earth-satellite",
    "megasun",
    "mars",
    "ambience",
  ];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <NavButton key="return">
              {" "}
              <Link
                href={{
                  pathname: "/",
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
              Default View
            </NavButton>
            <NavButton key="skybox">
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                {skyboxList.map((skybox) => (
                  <MenuItem
                    key={skybox}
                    onClick={() => {
                      handleClose();
                      changeSkybox(skybox);
                    }}
                  >
                    {skybox}
                  </MenuItem>
                ))}
              </Menu>
            </NavButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
