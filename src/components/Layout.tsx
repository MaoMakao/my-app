import { Stack } from "@mui/material";
import React, {  FC } from "react";
import { Link } from "react-router-dom";

interface LayoutProps { 
    children: React.ReactNode;

}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="App-header">
      <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
>

        <Link to="/">Main</Link>
        <Link to="/news">News</Link>
        <Link to="/profile">Profile</Link>
</Stack>
      </header>
      {children}
    </div>
  );
};

export default Layout;
