import React from "react";
import { useState, useEffect } from "react";
import "./Style/Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let location = useLocation();
  let path = location.pathname;
  let bool = path.startsWith("/adminportal");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let [user, setUser] = useState([]);
  let [cart, setcart] = useState(0);
  useEffect(() => {
    fetch("http://localhost:4000/cart")
      .then((data) => data.json())
      .then((elem) => setUser(elem)); 
       setcart(user.length);
  });




  return (
    <nav className="navbar">
      <div className="nav-logo">
        <i className="fa fa-user"></i> MyLogo
      </div>

      {bool ? (
        <>
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <NavLink to="/adminportal/">HOME</NavLink>
            <NavLink to="/adminportal/book">BOOKS</NavLink>
            <NavLink to="/adminportal/addbook">ADD BOOKS</NavLink>
            <NavLink to="/adminportal/users">USERS</NavLink>
            <NavLink to="/adminportal/addusers">ADD-USERS</NavLink>
            {/* <NavLink to="/adminportal/viewuser">VIEW-USERS</NavLink> */}
            <NavLink to="/">LOGOUT</NavLink>{" "}
          </div>
          <div className="nav-toggle" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </div>
        </>
      ) : (
        <>
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <NavLink to="/userportal/">HOME</NavLink>
            <NavLink to="/userportal/book">BOOKS</NavLink>
            <NavLink to="/userportal/users">USERS</NavLink>
            <NavLink to="/userportal/cart">CART {cart} </NavLink>
            {/* <NavLink to="/adminportal/viewuser">VIEW-USERS</NavLink> */}
            <NavLink to="/">LOGOUT</NavLink>{" "}
          </div>
          <div className="nav-toggle" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
