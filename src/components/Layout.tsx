import { Stack } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { token } = useSelector((store: { user: any }) => store.user);
  const { t } = useTranslation();

  return (
    <div>
      <header className="App-header">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Link to="/">{t("main")}</Link>
          <Link to="/news">{t("news")}</Link>
          {token ? (
            <Link to="/profile">{t("profile")}</Link>
          ) : (
            <Link to="/authorization">{t("login")}</Link>
          )}
          <LanguageSelector />
        </Stack>
      </header>
      {children}
    </div>
  );
};

export default Layout;
