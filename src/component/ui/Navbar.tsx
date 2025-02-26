"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const navLinks = ["Home", "About", "Feature", "Contact"];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "transparent",
          maxWidth: "1240px",
          margin: "0 auto",
          color: "white",
          boxShadow: "none",
          marginTop:{xs:'-15px', sm:'0'},
          paddingTop:{xs:'20px', sm:'0'}
        }}
      >
        <Toolbar>
          {/* Left Side: Logo */}
          <Box  sx={{ flexGrow: { xs: 1, md: 0 } }}>
            <Image src="/logo.png" alt="logo" height={35} width={150} />
          </Box>

          {/* Center: Navlinks (Hidden on small screens) */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {navLinks.map((link) => (
              <Typography key={link} sx={{ mx: 2, cursor: "pointer" }}>
                {link}
              </Typography>
            ))}
          </Box>

          {/* Right Side: Facebook Icon */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Small Screens */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <IconButton
            sx={{ ml: "auto", display: "block" }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon />
          </IconButton>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link} disablePadding>
                <ListItemButton onClick={toggleDrawer(false)}>
                  <ListItemText primary={link} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
