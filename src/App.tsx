import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import Main from "./components/Main";
import News from "./components/News";
import Profile from "./components/Profile";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>

      <div>
        <h1>chsito nadpis</h1>
      </div>
    </div>
  );
}

export default App;
