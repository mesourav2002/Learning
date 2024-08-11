import React, { useRef, useState } from "react";

const FirstUseRef = () => {
  let msg = useRef();

  let changeMsg = () => {
    msg.current.innerText = "ReactJs";
    msg.current.style.cssText = "color:red";
  };

  let gen = useRef();
  let [bool, setBool] = useState(true);

  let changeName = () => {
    setBool(!bool);
    // gen.current.innerText = "GIRL";
    gen.current.style.cssText = "color:green";
    let g = gen.current;

    g.innerText === "Boy" ? (g.innerText = "Girl") : (g.innerText = "Boy");
  };
  return (
    <>
      <div className="useref text-center">
        <div className="header ">Change Content</div>
        <h1 ref={msg}>Java Script</h1>
        <button onClick={changeMsg} className="btn btn-primary">
          Click Here
        </button>
      </div>
      <div className="text-center">
        <div className="header text-center">Change Content</div>
        <h1 ref={gen}>Boy</h1>
        <button onClick={changeName} className="btn btn-primary">
          {bool ? "Male" : "Female"}
        </button>
      </div>
    </>
  );
};

export default FirstUseRef;
