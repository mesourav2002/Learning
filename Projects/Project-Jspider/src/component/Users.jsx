import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Style/ab.css";
const Users = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    let fetchApi = () => {
      fetch("https://jsonplaceholder.org/users")
        .then((resp) => resp.json())
        .then((data) => {
          setUsers(data);
        });
    };
    fetchApi();
  }, [users]);

  let navigate = useNavigate();
  let handleClick = (id) => {
    navigate(`/adminportal/userLogin/${id}`);
  };
  return (
    <>
      <div className="users">
        <div className="container">
          {users.map((elem) => {
            let { firstname, lastname, id } = elem;
            return (
              <>
                <div className="username" onClick={() => handleClick(id)}>
                  {firstname} {lastname}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Users;
