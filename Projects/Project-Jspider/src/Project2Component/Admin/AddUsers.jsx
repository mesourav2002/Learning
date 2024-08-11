import React, { useState } from "react";
import { useRef, useEffect } from "react";

const AddUsers = () => {
  let date = new Date();
  let fnm = useRef();
  let lnm = useRef();
  let email = useRef();
  let place = useRef();
  let dob = useRef();
  let num = useRef();

  let [users, setUsers] = useState([]);
  let [id, setId] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [users]);

  useEffect(() => {
    users.map((elem) => setId(elem.id));
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      id: String(Number(id) + 1),
      FirstName: fnm.current.value,
      LastName: lnm.current.value,
      Email: email.current.value,
      State: place.current.value,
      Number: num.current.value,
      DOB: dob.current.value,
      Time: date,
    };

    fetch(`http://localhost:4000/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    setTimeout(() => {
      fnm.current.value = "";
      lnm.current.value = "";
      email.current.value = "";
      place.current.value = "";
      num.current.value = "";
      dob.current.value = "";
    }, 500);
  };
  return (
    <div className="addBooks">
      <form onSubmit={handleSubmit}>
        <input ref={fnm} type="text" placeholder="Enter First Name" />
        <input ref={lnm} type="text" placeholder="Enter Last Name" />
        <input ref={email} type="email" placeholder="Enter email Address" />
        <input ref={place} type="text" placeholder="Enter Place" />
        <input ref={num} type="number" placeholder="Enter Number" />
        <input ref={dob} type="date" placeholder="Date of Birth" />
        <button>Add Users</button>
      </form>
    </div>
  );
};

export default AddUsers;
