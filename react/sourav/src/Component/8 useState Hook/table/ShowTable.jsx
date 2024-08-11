import React from "react";
import { useState } from "react";
import TableToggle from "./TableToggle";

const ShowTable = () => {
  const [msg, showMsg] = useState(true);
  let ShowMsg = () => {
    showMsg(!msg);
  };
  return (
    <>
      <div>
        <button className="btn btn-primary text-warning  " onClick={ShowMsg}>
          {msg ? "Show Table" : "Hide Table"}
        </button>
        <div>{msg ? showMsg : <TableToggle />}</div>
      </div>
    </>
  );
};

export default ShowTable;
