import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import {
  AppBar,
  Typography,
  Toolbar,
  Tab,
  Tabs,
  Menu,
  MenuItem,
} from "@mui/material";

const MenuBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = useState();
  return (
    <>
      <AppBar sx={{ background: "#e0dfe6" }} position="sticky">
        <Typography sx={{ margin: "auto", color: "black" }}>
          OLTIVA PRODUCTS
        </Typography>
      </AppBar>

      <AppBar position="relative" sx={{ background: "#2c228d" }}>
        <Toolbar>
          <Typography>Oltiva</Typography>
          <Tabs
            sx={{ margin: "auto" }}
            textColor="#fff"
            value={value}
            onChange={(e, value) => setValue(value)}
          >
            <Tab icon={<HomeIcon />} label="Home"></Tab>
            <Tab icon={<LanguageIcon />} label="Products"></Tab>
            <Tab icon={<CloudQueueIcon />} label="Cloud"></Tab>
            <Tab icon={<SettingsIcon />} label="Settings"></Tab>
            <Tab icon={<GroupIcon />} label="MyAccount"></Tab>
            <Tab icon={<ChatIcon />} label="LiveChat"></Tab>
          </Tabs>

          <div>
            <MenuIcon
              size="large"
              onClick={handleMenu}
              color="inherit"
            ></MenuIcon>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>HOME</MenuItem>
              <MenuItem onClick={handleClose}>PRODUCTS</MenuItem>
              <MenuItem onClick={handleClose}>ABOUT US</MenuItem>
              <MenuItem onClick={handleClose}>HELP</MenuItem>
              <MenuItem onClick={handleClose}>LOG IN</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MenuBar;
