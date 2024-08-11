// src/App.js
import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import AddUser from "./component/AddUser";
import ViewUser from "./component/ViewUser";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/view-user" element={<ViewUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
