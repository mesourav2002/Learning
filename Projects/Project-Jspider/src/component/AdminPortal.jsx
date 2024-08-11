import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import UserLogin from "./UserLogin";
import UserDetails from "./UserDetails";

const AdminPortal = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Users />} path="/users" />
        <Route element={<UserLogin />} path="/userLogin/:id" />
        <Route element={<UserDetails />} path="/userdetails/:id" />
      </Routes>
    </div>
  );
};

export default AdminPortal;
