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
        <NavLink to="/adminportal/">HOME</NavLink>
        <NavLink to="/adminportal/users">USER</NavLink>
        <NavLink to="/adminportal/about">ABOUT</NavLink>
        <NavLink to="/">LOGOUT</NavLink>
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
