import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

import ContactsIcon from "@mui/icons-material/Contacts";
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

  const handleClickProd = () => {
    navigate("/products");
  };

  const handleClickCat = () => {
    navigate("/catalogue");
  };

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickAbout = () => {
    navigate("/about");
  };

  const handleClickContact = () => {
    navigate("/contact-us");
  };

  const handleClickChat = () => {
    navigate("/chat");
  };

  const [value, setValue] = useState();
  const navigate = useNavigate();
  return (
    <>
      <AppBar sx={{ background: "#e0dfe6" }} position="sticky">
        <Typography sx={{ margin: "auto", color: "black" }}>
          Oltiva Watch World
        </Typography>
      </AppBar>

      <AppBar position="relative" sx={{ background: "#00375F" }}>
        <Toolbar>
{       <img class="logo" src="\rsz_oltiva.png" alt="Oltiva Watch World" />
 }          

        <Tabs
            sx={{ margin: "auto" }}
            textColor="#fff"
            value={value}
            onChange={(e, value) => setValue(value)}
          >

            <Tab
              onClick={handleClickHome}
              icon={<HomeIcon />}
              label="Home"
            ></Tab>

            
          {/*  <Tab
              onClick={handleClickCat}
              icon={<LanguageIcon />}
              label="Catalogue"
            ></Tab>
            <Tab
              onClick={handleClickProd}
              icon={<LanguageIcon />}
              label="Products"
            ></Tab>*/}
            

            <Tab
              onClick={handleClickAbout}
              icon={<InfoIcon />}
              label="About Us"
            ></Tab>

            <Tab
              onClick={handleClickContact}
              icon={<ContactsIcon />}
              label="Contact Us"
            ></Tab>
            
            <Tab
              onClick={handleClickChat}
              icon={<ChatIcon />}
              label="Live Chat"
            ></Tab>
          </Tabs>

          
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MenuBar;
