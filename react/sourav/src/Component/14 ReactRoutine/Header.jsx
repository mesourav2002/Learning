import React from "react";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Calculator from "./Calculator";
import Form from "./Form";
import Daynight from "./Daynight";
import DigitalClock from "./DigitalClock";
const Header = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/About" />
          <Route element={<Service />} path="/Service" />
          <Route element={<Contact />} path="/Contact" />
          <Route element={<Calculator />} path="/Calculator" />
          <Route element={<Form />} path="/Form" />
          <Route element={<Daynight />} path="/DN" />
          <Route element={<DigitalClock />} path="/DC" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Header;
