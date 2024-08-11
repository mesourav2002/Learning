import React, { useState } from "react";

const Daynight = () => {
  let [bool, setBool] = useState(true);

  let changeMode = () => {
    setBool(!bool);
    document.body.style.cssText = `background:${
      bool ? "black" : "white"
    };color: ${!bool ? "black" : "white"}`;
  };

  return (
    <div className="dayNight">
      <div className="header">Day & Night</div>
      <div className="container">
        <button onClick={changeMode}>{bool ? "Night" : "Day"}</button>
      </div>
    </div>
  );
};

export default Daynight;
