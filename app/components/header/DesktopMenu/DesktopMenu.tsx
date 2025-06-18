import React from "react";
import styles from "../header.module.css";
import { Box, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Link from "next/link";

interface MenuItem {
  label: string;
  icon: React.ReactNode;
}

interface DesktopMenuProps {
  menu: MenuItem[];
  onMenuClick: (label: string) => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menu, onMenuClick }) => {
  return (
    <Box sx={{ pt: 5, display: { xs: "none", md: "flex" }, gap: 2, p: 3, height: 90 }}>
      <Link href="/cart" passHref legacyBehavior>
      <IconButton disableFocusRipple disableRipple>
        <ShoppingCartOutlinedIcon sx={{ fontSize: 45, color: "black", p: 1, '&:hover': {color: "gray"} }} />
      </IconButton>
      </Link>

      {menu.map((item, i) => {
        const isHome = item.label === "Home";

        return isHome ? (
          <Link key={i} href="/" className={styles.menuLink}>
            {item.label}
          </Link>
        ) : (
          <Link
            key={i}
            href="/"
            className={styles.menuLink}
            onClick={(e) => {
              e.preventDefault();
              onMenuClick(item.label);
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </Box>
  );
};

export default DesktopMenu;
