// src/UserDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import users from "./data";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    users.map((user) => {
      if (user.id === id) {
        setUser(user);
      }
      return user;
    });
  }, [id]);

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>AC Type: {user.accountType}</p>
      <p>Balance: {user.accountBalance}</p>
      <p>State: {user.state}</p>
      <p>Number: {user.number}</p>
      <p>
        <Link to="/">Login Page</Link>
      </p>
    </div>
  );
};

export default UserDetails;
