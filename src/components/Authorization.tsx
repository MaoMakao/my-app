import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";
import { Navigate } from "react-router-dom";
import { Box } from "@mui/system";

const Authorization = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { err } = useSelector((store: { user: any }) => store.user);
  const { token } = useSelector((store: { user: any }) => store.user);

  const onSubmit = () => {
    if (!login || !password) return;
    dispatch(setUser({ login, password }));
  };
  if (token) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <form
        >
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            margin="normal"
            required
            onChange={(e) => setLogin(e.target.value)}
            value={login}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={onSubmit}
          >
            LogIn
          </Button>

          {err && <div>{err}</div>}
        </form>
  );
};

export default Authorization;
