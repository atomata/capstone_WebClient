import * as React from "react";
import {
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  changeSkybox,
  defaultCameraView,
} from "../../util/unityContextActions";

function SkyBoxInfo(): JSX.Element {
  const ITEM_HEIGHT = 48;
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
    <>
      <button
        type="button"
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        Change Sky Box
        <MoreVertIcon />
      </button>
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
          >;
            {skybox}
          </MenuItem>
        ))}
      </Menu>
      <button type="button" key="cam_view" onClick={() => defaultCameraView()}>
        Default View
      </button>
    </>
  );
}

export default SkyBoxInfo;
