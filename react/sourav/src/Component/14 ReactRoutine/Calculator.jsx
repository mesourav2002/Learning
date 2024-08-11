import React from "react";
import "./calculator.css";

const Calculator = () => {
  let getValue = () => {};
  return (
    <>
      <div>
        <h1>Calculator</h1>
        <table border="1">
          <tr>
            <th colspan="4">
              <div className="input">
                <input type="text" placeholder="Calculate" />
              </div>
            </th>
          </tr>
          <tr>
            <th onclick="empty()" colspan="2">
              <div>CE</div>
            </th>
            <th onclick={getValue}>
              {" "}
              <div className="b">*</div>
            </th>
            <th onclick={getValue}>
              {" "}
              <div className="b">/</div>
            </th>
          </tr>
          <tr>
            <th onclick={getValue}>
              <div className="b">7</div>
            </th>
            <th onclick={getValue}>
              {" "}
              <div className="b">8</div>
            </th>
            <th onclick={getValue}>
              {" "}
              <div className="b">9</div>
            </th>
            <th onclick={getValue}>
              {" "}
              <div className="b">-</div>
            </th>
          </tr>
          <tr>
            <th onclick={getValue}>
              {" "}
              <div className="b">4</div>
            </th>
            <th onclick={getValue}>
              {" "}
              <div className="b">5</div>
            </th>
            <th onclick={getValue}>
              {" "}
              <div className="b">6</div>
            </th>
            <th onclick={getValue}>
              {" "}
              <div className="b">+</div>
            </th>
          </tr>
          <tr>
            <th onclick={getValue}>
              {" "}
              <div className="b">1</div>
            </th>
            <th onclick={getValue}>
              {" "}
              <div className="b">2</div>
            </th>
            <th onclick={getValue}>
              {" "}
              <div className="b">3</div>
            </th>
            <th onclick="result()" rowspan="2">
              <div>=</div>
            </th>
          </tr>
          <tr>
            <th onclick={getValue}>
              {" "}
              <div className="b">.</div>
            </th>
            <th onclick={getValue}>
              {" "}
              <div className="b">0</div>
            </th>
            <th onclick={getValue}>
              {" "}
              <div>%</div>
            </th>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Calculator;
