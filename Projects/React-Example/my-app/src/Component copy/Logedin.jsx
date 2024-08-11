import React from "react";
import "./login.css";
import { useState } from "react";
import Home from "./Home";

const Logedin = () => {
  const [msg, setMsg] = useState("");
  const [pass, passerr] = useState("");

  function NameBlur(e) {
    if (e.target.value === "") {
      setMsg("User Name Required");
    } else {
      setMsg("");
    }
  }
  function PassBlur(e) {
    if (e.target.value === "") {
      passerr("User Password Required");
    } else {
      passerr("");
    }
  }

  let loginPage = (e) => {
    e.preventDefault();

    let user = e.target[0];
    let pswd = e.target[1];

    if (user.value === "Sourav Kumar Dash" && pswd.value === "2002") {
      window.location = "Hello";
    } else if (user.value === "" && pswd.value === "") {
      alert("Fill the Form");
    } else if (user.value === "" && pswd.value === "2002") {
      alert("Enter User Name");
    } else if (user.value === "Sourav Kumar Dash" && pswd.value === "") {
      alert("Enter Password");
    } else if (user.value !== "Sourav Kumar Dash" && pswd.value === "2002") {
      alert("Incorrect ID");
    } else if (user.value === "Sourav Kumar Dash" && pswd.value !== "2002") {
      alert("incorrect Password");
    } else {
      let err = "border: 2px solid red";
      user.style.cssText = err;
      pswd.style.cssText = err;
      alert("Incorrect ID & Password");
    }
  };

  return (
    <div className="container" onSubmit={loginPage}>
      <form>
        <h2>User Login</h2>
        <dl>
          <dt>Customer Id</dt>
          <dd>
            <input onBlur={NameBlur} type="text" placeholder="User ID" />
            <dd className="text-danger">{msg}</dd>
          </dd>
          <dt>Password</dt>
          <dd>
            <input onBlur={PassBlur} type="password" placeholder="Password" />
            <dd className="text-danger">{pass}</dd>
          </dd>
        </dl>
        <button className="btn btn-danger login">Login</button>
      </form>
    </div>
  );
};

export default Logedin;
