import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import BCC from "@mui/icons-material/LabelImportant";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import avatar from "../assets/avatar.jpg";
import { Search } from "@mui/icons-material";
import { color } from "@mui/system";
import { grey } from "@mui/material/colors";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Searchbox = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  Padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "60%",
}));

const Icons = styled("div")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl]= React.useState(null)
  const open= Boolean(anchorEl)

  const handleClose= () => {
    setAnchorEl(null)
  }

  const handleOpen= (event) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h5"
          sx={{
            display: { xs: "none", sm: "inline" },
          }}
        >
          Curhat.in
        </Typography>

        <BCC
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />

        <Searchbox sx={{display: 'flex', color: 'grey', alignItems: 'center'}}>
          <Search sx={{ml: '5px'}} />
          <InputBase
            placeholder="Search"
            fullWidth
            sx={{
              px: "5px",
            }}
          />
        </Searchbox>

        <Icons>
          <Badge badgeContent={99} color="error">
            <EmailIcon />
          </Badge>
          <Badge badgeContent={10} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar src={avatar} onClick={handleOpen} />
        </Icons>
        <Userbox  onClick={handleOpen}>
          <Avatar src={avatar} />
          <Typography variant="span">Syafi</Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
