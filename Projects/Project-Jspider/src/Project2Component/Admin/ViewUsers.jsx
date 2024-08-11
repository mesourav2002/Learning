import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ViewUsers = () => {
  let params = useParams();
  let id = params.id;

  let [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [userData]);

  let { FirstName } = userData;
  return (
    <div>
      <h1>{FirstName}</h1>
    </div>
  );
};

export default ViewUsers;
