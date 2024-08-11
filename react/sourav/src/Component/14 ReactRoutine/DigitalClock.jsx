import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  let [state, setState] = useState({});
  useEffect(() => {
    setInterval(() => {
      let dateObj = new Date();

      setState({
        date: dateObj.toLocaleDateString(),
        time: dateObj.toLocaleTimeString(),
      });
    }, 1000);
  }, []);
  let { date, time } = state;
  return (
    <div className="digitalClock">
      <div className="header">Digital clock ⏱️</div>
      <h1>
        {date} <br />
      </h1>
      <h1>{time} </h1>
    </div>
  );
};

export default DigitalClock;
