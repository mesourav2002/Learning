// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "./Project2/UserDetails";
import UserLogin from "./Project2/UserLogin";
import SignUp from "./Project2/SignUp";
const App3 = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/user-details/:id" element={<UserDetails />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App3;
