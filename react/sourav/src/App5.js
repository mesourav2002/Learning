// src/App.js
import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Navbar from "./NodeProject/Navbar";
import Home from "./NodeProject/Home";
import Car from "./NodeProject/Car";
import About from "./NodeProject/About";

const App5 = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Car />} />
        <Route path="/abouts" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App5;
