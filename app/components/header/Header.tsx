"use client";

import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import About from "./About/About";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Weather from "./Weather/Weather";
import LightModeIcon from "@mui/icons-material/LightMode";

const menu = [
  { label: "Home", icon: <HomeIcon sx={{ fontSize: 50, p: 1 }} /> },
  { label: "Weather", icon: <LightModeIcon sx={{ fontSize: 50, p: 1 }} /> },
  { label: "Contact", icon: <ContactMailIcon sx={{ fontSize: 50, p: 1 }} /> },
  { label: "About", icon: <InfoIcon sx={{ fontSize: 50, p: 1 }} /> },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [weatherOpen, setWeatherOpen] = useState(false);


  const handleMenuClick = (label: string) => {
    if (label === "About") {
      setAboutOpen(true);
    } else if (label === "Weather") {
      setWeatherOpen(true);
    } else if (label === "Contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Box className={styles.header}>
      {/* Logo and Mobile Title */}
      <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
        <LocalFloristIcon
          sx={{ fontSize: 60, p: 1, display: { xs: "none", md: "block" } }}
        />
        <Link href="/" passHref legacyBehavior>
          <Box sx={{ display: { md: "none" }, p: 1 }}>
            <a
              style={{
                userSelect: "none",
                WebkitTapHighlightColor: "transparent",
                textDecoration: "none",
                color: "black",
                fontSize: "1.5rem",
                padding: 8,
                display: "inline-block",
              }}
            >
              NK&apos;s Flowers
            </a>
          </Box>
        </Link>
      </Box>

      {/* Center Title on Desktop */}
      <Box
        sx={{
          pt: 3,
          flexGrow: 1,
          textAlign: "center",
          display: { xs: "none", md: "block" },
        }}
      >
        <Link href="/">
          <Box
            component="span"
            letterSpacing={3}
            sx={{ fontFamily: "cursive", fontSize: "2rem" }}
          >
            NK&apos;s Flowers
          </Box>
        </Link>
      </Box>

      {/* Desktop Menu */}
      <DesktopMenu menu={menu} onMenuClick={handleMenuClick} />

      {/* Mobile Menu Icon */}
      <Box sx={{ display: "flex", pt: 3 }}>
        <Link href="/cart" passHref legacyBehavior>
          <IconButton
            disableFocusRipple
            disableRipple
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <ShoppingCartOutlinedIcon
              sx={{ fontSize: 40, color: "black", p: 1 }}
            />
          </IconButton>
        </Link>
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon sx={{ fontSize: 45, color: "black", p: 1 }} />
        </IconButton>
      </Box>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {menu.map((item, index) => {
              if (item.label === "Home") {
                return (
                  <ListItem key={index} onClick={() => setDrawerOpen(false)} >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText sx={{p: 1}} >
                      <Link
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                        onClick={() => setDrawerOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </ListItemText>
                  </ListItem>
                );
              } else {
                return (
                  <ListItem
                    sx={{ cursor: "pointer" }}
                    key={index}
                    onClick={() => {
                      setDrawerOpen(false);
                      handleMenuClick(item.label);
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} sx={{ p: 1 }} />
                  </ListItem>
                );
              }
            })}
          </List>
        </Box>
      </Drawer>

      {/* About */}
      <About open={aboutOpen} onClose={() => setAboutOpen(false)} />
      <Weather open={weatherOpen} onClose={() => setWeatherOpen(false)} />
    </Box>
  );
};

export default Header;
