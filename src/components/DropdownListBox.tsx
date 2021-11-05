import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu({buttonName,buttonOption}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //spliting the strings
  const stringLabel = buttonName.split('/');
  const option1 = buttonOption[4].split(':');
  const option2 = buttonOption[5].split(':');
  const option3 = buttonOption[6].split(':');

  return (
    <div>
      <Button
        id="basic-button"
        variant="contained" 
        color="primary"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {stringLabel[2]}
      </Button>

      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>{option1[2]}</MenuItem>
        <MenuItem onClick={handleClose}>{option2[2]}</MenuItem>
        <MenuItem onClick={handleClose}>{option3[2]}</MenuItem>
      </Menu>
    </div>
  );
}