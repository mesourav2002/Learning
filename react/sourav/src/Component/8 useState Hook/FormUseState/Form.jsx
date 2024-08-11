import React from "react";
import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [fname, setFname] = useState("");
  const [fnm, setFnm] = useState("");
  const [lname, setLname] = useState("");
  const [lnm, setlnm] = useState("");

  let handleFirstName = (e) => {
    setFname(e.target.value);
  };

  let handleLastName = (e) => {
    setLname(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setFnm(fname);
    setlnm(lname);
    setFname("");
    setLname("");
  };

  return (
    <div>
      <div className="usestate-fomr">
        <div className="header">Print Input Data</div>
        <div className="formcontrol">
          <form action="" onSubmit={handleSubmit}>
            <input
              value={fname}
              type="text"
              placeholder="Enter First Name"
              onChange={handleFirstName}
            />
            <input
              value={lname}
              type="text"
              placeholder="Enter Last Name"
              onChange={handleLastName}
            />
            <button> Submit</button>
          </form>
          <h1>
            {fnm} {lnm}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Form;
