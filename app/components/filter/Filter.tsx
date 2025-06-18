"use client";

import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Fade,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type Props = {
  language: "en" | "ka";
  setLanguage: (lang: "en" | "ka") => void;
  currency: "USD" | "GEL";
  setCurrency: (cur: "USD" | "GEL") => void;
};

const Filter = ({ language, setLanguage, currency, setCurrency }: Props) => {
  const [anchorElCurrency, setAnchorElCurrency] = useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null);

  const openCurrency = Boolean(anchorElCurrency);
  const openLang = Boolean(anchorElLang);

  const handleCurrencyClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCurrency(event.currentTarget);
  };

  const handleLangClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCurrencyClose = (value?: string) => {
    if (value === "USD" || value === "GEL") setCurrency(value);
    setAnchorElCurrency(null);
  };

  const handleLangClose = (lang?: "en" | "ka") => {
    if (lang) setLanguage(lang);
    setAnchorElLang(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: 60,
        pt: 6,
        gap: 2,
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {/* Promotions */}
      <Box sx={{ display: "inline-flex", alignItems: "center" }}>
        <Typography variant="body1" fontWeight="bold" sx={{ color: "#d81b60", p: 0 }}>
          Promotions:
        </Typography>
        <Typography variant="body1" sx={{ color: "gray", p: 1 }}>
          None available!
        </Typography>
      </Box>

      {/* Selector */}
      <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
        <IconButton
          onClick={handleCurrencyClick}
          sx={{
            height: 40,
            borderRadius: 2,
            backgroundColor: "#fce4ec",
            "&:hover": { backgroundColor: "#fce4ec1" },
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#d81b60",
              fontSize: 15,
              width: 35,
              pl: 2,
              p: 1,
            }}
          >
            {currency}
          </Typography>
          <ArrowDropDownIcon sx={{ color: "#d81b60", fontSize: 40, p: 1 }} />
        </IconButton>

        <Menu
          anchorEl={anchorElCurrency}
          open={openCurrency}
          onClose={() => handleCurrencyClose()}
          TransitionComponent={Fade}
          disableScrollLock
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: 2,
              boxShadow: 3,
              minWidth: 90,
              maxHeight: 200,
              px: 1,
            },
          }}
        >
          {["USD", "GEL"]
            .filter((val) => val !== currency)
            .map((option) => (
              <MenuItem key={option} onClick={() => handleCurrencyClose(option)}>
                {option}
              </MenuItem>
            ))}
        </Menu>

        {/* Flags */}
        <IconButton
          onClick={handleLangClick}
          sx={{
            height: 40,
            borderRadius: 2,
            pt: 3,
            backgroundColor: "#fce4ec",
            "&:hover": { backgroundColor: "#fce4ec1" },
          }}
        >
          <Avatar
            src={
              language === "en"
                ? "https://flagcdn.com/us.svg"
                : "https://flagcdn.com/ge.svg"
            }
            sx={{ width: 48, height: 58, p: 1, ml: 1 }}
          />
          <ArrowDropDownIcon sx={{ color: "#d81b60", fontSize: 50, width: 25 }} />
        </IconButton>

        <Menu
          anchorEl={anchorElLang}
          open={openLang}
          onClose={() => handleLangClose()}
          TransitionComponent={Fade}
          disableScrollLock
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: 2,
              boxShadow: 3,
              minWidth: 100,
              maxHeight: 200,
              px: 1,
            },
          }}
        >
          <MenuItem onClick={() => handleLangClose("en")}>
            <Typography>English</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleLangClose("ka")}>
            <Typography>ქართული</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Filter;
