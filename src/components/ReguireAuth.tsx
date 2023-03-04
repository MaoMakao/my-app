import React, { FC, ReactElement } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth: FC<{ children: ReactElement }> = ({ children }) => {
  const { token } = useSelector((store: { user: any }) => store.user);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/authorization" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
