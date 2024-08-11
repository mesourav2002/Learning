import React from "react";
import Navbar from "../Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Books from "./Books";
import Users from "./Users";
import ReadBooks from "./ReadBooks";
import ViewUsers from "./ViewUsers";
import AddToCart from "./AddToCart";
const UserPortal = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Books />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/readbooks/:id" element={<ReadBooks />} />
      </Routes>
    </>
  );
};

export default UserPortal;
