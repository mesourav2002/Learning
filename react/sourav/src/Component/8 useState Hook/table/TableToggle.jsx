import React from "react";
import { useState } from "react";
import "./csss.css";

const TableToggle = () => {
  //   !===========================
  let persons = [
    { id: 1, fname: "Abhi", lname: "Ram", age: 50 },
    { id: 2, fname: "Darshan", lname: "JS", age: 45 },
    { id: 3, fname: "Abhijeet", lname: "Singh", age: 69 },
  ];

  let [users, setUsers] = useState(persons);
  // console.log(users)

  let viewUser = (lname, age) => {
    alert(`${lname} is ${age}`);
  };

  let deleteUser = (id, lname) => {
    // let x=users.filter((elem)=>{
    //     return elem.id !== id
    // })
    // setUsers([...x])

    let bool = window.confirm(`Do you want to delete  data...?`);

    if (bool) {
      setUsers([...users.filter((elem) => elem.id !== id)]);
      // alert(`${lname} is deleted`);
    } else {
      // alert(`${lname} data is not deleted`);
    }
  };
  let deleteAllUser = () => {
    let bool = window.confirm(`Do you want to delete all users`);
    bool ? setUsers([]) : alert("Data is not deletd");
  };

  let addUsers = () => {
    let fnmm = prompt("Enter First Name");
    let lnmm = prompt("Enter Last Name");
    let agem = prompt("Enter Age");

    if ((fnmm !== null) & (lnmm !== null) & (agem !== null)) {
      let newUser = {
        id: users.length + 1,
        fname: fnmm,
        lname: lnmm,
        age: agem,
      };
      setUsers([...users, newUser]);
    } else {
      alert("fill the all data");
    }
  };

  let dupli = (fname, lname, age) => {
    let newUser = {
      id: users.length + 1,
      fname: fname,
      lname: lname,
      age: age,
    };
    let bool = window.confirm("Do you want duplicate data");
    if (bool) {
      setUsers([...users, newUser]);
    } else {
      alert("Duplicate data not added");
    }
  };
  return (
    <>
      <div className="arrayObject">
        <div className="header">Users Details</div>
        <table border={1}>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>View</th>
              <th>Delete</th>
              <th>Duplicate User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((elem, index) => {
              let { id, fname, lname, age } = elem;

              return (
                <tr>
                  <th>{index + 1}</th>
                  <th>{fname}</th>
                  <th>{lname}</th>
                  <th>{age}</th>
                  <th>
                    <button
                      style={{ width: "10vh", margin: "10px" }}
                      onClick={() => viewUser(lname, age)}
                    >
                      View
                    </button>
                  </th>
                  <th>
                    <button
                      style={{ width: "10vh", margin: "10px" }}
                      onClick={() => deleteUser(id, lname)}
                    >
                      Delete
                    </button>
                  </th>
                  <th>
                    <button
                      style={{ width: "13vh", margin: "10px" }}
                      onClick={() => dupli(fname, lname, age)}
                    >
                      Dupli User
                    </button>
                  </th>
                </tr>
              );
            })}

            {users.length !== 0 ? (
              <tr>
                <th colSpan={7}>
                  <button
                    style={{ width: "60vh", margin: "10px" }}
                    onClick={() => deleteAllUser()}
                  >
                    Delete All
                  </button>
                </th>
              </tr>
            ) : (
              <tr>
                <th colSpan={7}>
                  <marquee> No Users Found </marquee>
                </th>
              </tr>
            )}
            <tr>
              <th colSpan={7}>
                <button
                  style={{ width: "60vh", margin: "10px" }}
                  onClick={() => addUsers()}
                >
                  Add User{" "}
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableToggle;
