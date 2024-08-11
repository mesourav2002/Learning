import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">MyLogo</div>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Service">Service</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/Calculator">Calculator</NavLink>
            </li>
            <li>
              <NavLink to="/Form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/DN">DayNight</NavLink>
            </li>
            <li>
              <NavLink to="/DC">Clock</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
