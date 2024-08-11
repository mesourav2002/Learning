import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./Project2Component/LandingPage";
import AdminPortal from "./Project2Component/Admin/AdminPortal";
import UserPortal from "./Project2Component/Admin/UserPortal";
const App2 = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<AdminPortal />} path="/adminportal/*" />
          <Route element={<UserPortal />} path="/userportal/*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App2;
