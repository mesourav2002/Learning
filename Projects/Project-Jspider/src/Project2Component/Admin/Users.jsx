import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Style/User.css";
const Users = () => {
  let [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((data) => data.json())
      .then((elem) => setUser(elem));
  });

  let deleteBook = (id) => {
    console.log(id);
    fetch(`http://localhost:4000/users/${id}`, { method: "DELETE" });
  };
  let navigate = useNavigate();
  let viewDetails = (id) => {
    navigate(`/adminportal/viewuser/${id}`);
  };

  let location = useLocation();
  let path = location.pathname.startsWith("/adminportal");

  return (
    <div>
      <h3>User Details</h3>

      {path ? (
        <>
          {user.length === 0 ? (
            <div>
              <p>No User Found </p>
              <Link to="/adminportal/addusers">
                <button>Add User</button>
              </Link>
            </div>
          ) : (
            <div>
              <table>
                <tr>
                  <th>Id</th>
                  <th>No</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>State</th>
                  <th>Number</th>
                  <th>DOB</th>
                  <th>View</th>
                  <th>Password</th>
                  <th>Delete</th>
                </tr>
                {user.map((elem, index) => {
                  let { id, FirstName, LastName, Email, State, Number, DOB } =
                    elem;
                  return (
                    <tr>
                      <td>{id}</td>
                      <td>{index + 1}</td>
                      <td>{FirstName}</td>
                      <td>{LastName}</td>
                      <td>{Email}</td>
                      <td>{State}</td>
                      <td>{Number}</td>
                      <td>{DOB}</td>
                      <td>
                        <button onClick={() => viewDetails(id)}>View</button>
                      </td>
                      <td>sourav</td>
                      <td>
                        <button onClick={() => deleteBook(id)}>Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          )}
        </>
      ) : (
        <>
         {user.length === 0 ? (
        <div>
          <p>No User Found </p>
          <Link to="/adminportal/addusers">
            <button>Add User</button>
          </Link>
        </div>
      ) : (
        <div>
          <table>
            <tr>
              <th>Id</th>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>State</th>
              <th>Number</th>
              <th>DOB</th>
              {/* <th>View</th>
              <th>Password</th>
              <th>Delete</th> */}
            </tr>
            {user.map((elem, index) => {
              let { id, FirstName, LastName, Email, State, Number, DOB } = elem;
              return (
                <tr>
                  <td>{id}</td>
                  <td>{index + 1}</td>
                  <td>{FirstName}</td>
                  <td>{LastName}</td>
                  <td>{Email}</td>
                  <td>{State}</td>
                  <td>{Number}</td>
                  <td>{DOB}</td>
                  {/* <td>
                    <button onClick={() => viewDetails(id)}>View</button>
                  </td>
                  <td>sourav</td>
                  <td>
                    <button onClick={() => deleteBook(id)}>Delete</button>
                  </td> */}
                </tr>
              );
            })}
          </table>
        </div>
      )}
        
        </>
      )}
    </div>
  );
};

export default Users;
