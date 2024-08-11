import React, { useState } from "react";
import mcqData from "./data";
import ToggleQue from "./ToggleQue";
import "./mcq.css";

const QueAns = () => {
  return (
    <>
      <div className="mcq">
        <div className="header">Mcq Questions</div>
        <div>
          {mcqData.map((elem) => {
            let { id, que, ans } = elem;
            return (
              <>
                <ToggleQue id={id} que={que} ans={ans} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QueAns;
