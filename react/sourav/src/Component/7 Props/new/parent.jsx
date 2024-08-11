import React from "react";
import Child from "./Child";


const Parent = () => {
  let num = 100;
  let place ="Goa"
  return (
    <div>
      <Child count={num}  data={place}/>
    </div>
  );
};

export default Parent;
