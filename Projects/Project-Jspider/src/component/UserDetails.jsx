import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const UserDetails = () => {
  let params = useParams();
  let userId = params.id;

  let [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.org/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [userData]);

  return (
    <div className="container">
      <h1>
        Name : {userData.firstname} {userData.lastname}
      </h1>
      <h1> Email : {userData.email}</h1>
      <h1> DOB : {userData.birthDate}</h1>
      <h1> Phone : {userData.phone}</h1>
      <h1> Website : {userData.website}</h1>
    </div>
  );
};

export default UserDetails;
