import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Main from "./components/Main";
import News from "./components/News";
import Profile from "./components/Profile";
import Layout from "./components/Layout";
import Authorization from "./components/Authorization";
import RequireAuth from "./components/ReguireAuth";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./redux/userSlice";

function App() {
  const { token } = useSelector((store: { user: any }) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      localStorage.setItem("user", token);
    } else if (localStorage.getItem("user")) {
      dispatch(setUser({ login: "admin", password: "12345" }));
    }
  }, [token]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<News />} />
          <Route path="/authorization" element={<Authorization />} />

          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
