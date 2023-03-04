import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/userSlice";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      onClick={logout}
    >
      {t("logout")}
    </Button>
  );
};

export default Profile;
