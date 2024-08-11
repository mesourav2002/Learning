import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/"> AddUser</NavLink>
      <NavLink to="/view-user"> ViewUser</NavLink>
    </div>
  );
};

export default NavBar;
