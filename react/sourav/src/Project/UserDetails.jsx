import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Project-CSS/LandingPage.css";
const UserDetails = () => {
  let params = useParams();
  let id = params.id;
  console.log(id);
  let [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/users/${id}`
        );
        const userDatas = await response.json();
        setUserData(userDatas);
      } catch (error) {
        console.error("error details", error);
      }
    };
    fetchUserDetails();
  }, [id]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>User Details</h1>
      <h1>Name : {userData.name}</h1>
      <h1> Email : {userData.email}</h1>
      <h1> DOB : {userData.role}</h1>
      <img src={userData.avatar} alt="" width={300} />
    </div>
  );
};

export default UserDetails;
