import React from "react";
import { useState } from "react";

const Event = () => {
  const [userName, setUserName] = useState("John");

  function handleNameChange(event) {
    setUserName(event.target.value);
  }

  const printName = () => {
    let fname = "Dinga";
    let lname = "raja";
    alert(`My name is ${fname} ${lname}`);
  };

  const print = (msg) => {
    alert(msg);
  };

  let generateOtp = () => {
    let root = document.getElementById("hello");
    let a = Math.floor(Math.random() * 9000 + 1000);
    // alert(`OTP is ${a}`);
    root.innerHTML = a;
  };
  let personData = [
    { fname: "Dinga", lname: "Raja", age: "22" },
    { fname: "Dingu", lname: "Ragu", age: "22" },
    { fname: "Dingi", lname: "Rani", age: "22" },
  ];
  let displayMsg = (a, b) => {
    alert(`${a} age is ${b}`)
  };
  return (
    <>
      <div className="Events">
        <div className="header ">
          <div className="container-fluid">
            <button
              onClick={() => alert("Welcome")}
              className="btn btn-primary  m-5 col-5"
            >
              {" "}
              Click Here
            </button>
            <button onClick={printName} className="btn btn-primary  m-5 col-5">
              {" "}
              Print Name
            </button>
            <button
              onClick={() => print("Good evening")}
              className="btn btn-primary  m-5 col-5"
            >
              {" "}
              Good Evening
            </button>
            <button
              onClick={generateOtp}
              className="btn btn-primary  m-5 col-5"
            >
              {" "}
              Generate OTP
            </button>
            <div id="hello" className=" h1 m-5 mt-0 col-5"></div>
            <div>
              {personData.map((elem) => (
                <div className="d-flex">
                  <h3 className="h1 m-5 mt-0 mb-0 col-2">{elem.fname}</h3>
                  <h3 className="h1 m-5 mt-0 mb-0 col-2">{elem.lname}</h3>
                  <h3 className="h1 m-5 mt-0 mb-0 col-2">{elem.age}</h3>
                  <button
                    onClick={() => displayMsg(elem.fname , elem.age)}
                    className="btn btn-primary mb-1"
                  >Print Name</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" m-5 ">
        <dl>
          <dt>User Name</dt>
          <dd>
            <input type="text" value={userName} onChange={handleNameChange} />
          </dd>
        </dl>
        <p>Hello ! {userName} </p>
      </div>
    </>
  );
};

export default Event;
