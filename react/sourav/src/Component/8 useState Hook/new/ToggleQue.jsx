import React, { useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const ToggleQue = (props) => {
  let [msg, setMsg] = useState(true);

  let Show = () => {
    setMsg(!msg);
  };

  let { id, que, ans } = props;
  return (
    <>
      <div>
        <button onClick={Show} className="btn btn-primary">
          <div>
            {id}.{que}
          </div>{" "}
          <div> {msg ? <ArrowCircleDownIcon /> : <ArrowCircleUpIcon />}</div>{" "}
          {msg ? setMsg : <p>{ans}</p>}
        </button>
      </div>
    </>
  );
};

export default ToggleQue;
