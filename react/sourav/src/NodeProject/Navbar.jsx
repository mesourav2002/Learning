import React from "react";
import { useState } from "react";
import "./Style/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <i className="fa fa-user"></i> MyLogo
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/abouts">ABOUT</NavLink>
        <NavLink to="/cars">CARS</NavLink>
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
