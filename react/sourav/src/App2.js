import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Project-CSS/LandingPage.css";
import UserDetails from "./Project/UserDetails";
import UserLogin from "./Project/UserLogin";

const App2 = () => {
  return (
    <div className="App2">
      <BrowserRouter>
        <Routes>
        <Route element={<UserLogin />} path="/" />
        <Route element={< UserDetails/>} path="/userdetails/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App2;
