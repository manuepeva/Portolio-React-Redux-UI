import React, { useState } from "react";
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import { changeLanguage } from "i18next";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

const LanguageSelector = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    handleClose();
  };

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleClick}
        aria-label="select language"
        sx={{
          mb: 1,
          "&:hover": { color: "#1976d2" },
          transition: "color 0.2s ease",
        }}
      >
        <PublicIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
            <ListItemIcon sx={{ minWidth: "30px" }}>{lang.flag}</ListItemIcon>
            <ListItemText primary={lang.code.toUpperCase()} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelector;
