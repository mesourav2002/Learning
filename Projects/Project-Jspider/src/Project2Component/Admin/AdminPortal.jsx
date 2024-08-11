import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "./Home";
import Books from "./Books";
import AddBooks from "./AddBooks";
import Users from "./Users";
import AddUsers from "./AddUsers";
import ReadBooks from "./ReadBooks";
import ViewUsers from "./ViewUsers";

const AdminPortal = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Books />} />
        <Route path="/addbook" element={<AddBooks />} />
        <Route path="/users" element={<Users />} />
        <Route path="/addusers" element={<AddUsers />} />
        <Route path="/readbooks/:id" element={<ReadBooks />} />
        <Route path="/viewuser/:id" element={<ViewUsers />} />
      </Routes>
    </div>
  );
};

export default AdminPortal;
