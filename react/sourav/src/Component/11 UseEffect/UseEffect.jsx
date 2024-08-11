import React, { useEffect, useState } from "react";

const UseEffect = () => {
  let [count, setNum] = useState(0);
  let [name, setName] = useState("");

  const print = () => {
    setName(!name);
  };
  const Incrise = () => {
    setNum(count + 1);
  };
  const Decrese = () => {
    setNum(count - 1);
  };

  useEffect(() => {
    // alert(name ? "React" : "Java Script");
    // document.title = count;
  }, []);
  return (
    <div className="container ">
      <div className="header text-center display-6  text-bg-dark">
        Effect Example
      </div>
      <h1 className="ms-4">{count}</h1>
      <button className="btn btn-success  m-1" onClick={Incrise}>
        ➕
      </button>
      <button className=" m-1 btn btn-danger " onClick={Decrese}>
        ➖
      </button>
      <h1>{name ? "React" : "Java Script"}</h1>
      <button onClick={print}>Print Name</button>
    </div>
  );
};

export default UseEffect;
