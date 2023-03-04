import { MenuItem, Select } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event: any) => {
    i18n.changeLanguage(event);
    console.log(event);
  };

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={i18n.language}
      label="LanguageSetctor"
      onChange={(e) => handleChangeLanguage(e.target.value)}
    >
      <MenuItem value={"en"}>en</MenuItem>
      <MenuItem value={"ua"}>ua</MenuItem>
    </Select>
  );
}

export default LanguageSelector;
