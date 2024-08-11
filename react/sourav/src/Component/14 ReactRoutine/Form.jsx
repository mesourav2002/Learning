import React, { useRef, useState } from "react";
import "./Form.css";
const Form = () => {
  let inputColor = useRef();
  let inputRange = useRef();
  let showNumber = useRef();
  let [count, setCount] = useState(0);
  let showw = useRef();

  let changeColor = () => {
    console.log(inputColor.current.value);
    document.body.style.background = inputColor.current.value;
    console.log(inputRange.current.value);
  };
  let changeRange = () => {
    // console.log(inputRange.current.value);
    showNumber.current.innerText = inputRange.current.value;
  };
  let changeValue = () => {
    setCount(showw.current.value);
  };
  return (
    <>
      <div className="forms">
        <div className="header">Color Change</div>
        <input type="color" ref={inputColor} onChange={changeColor} />
        <input type="range" ref={inputRange} onChange={changeRange} />
        <div className="text-center display-1" ref={showNumber}>
          0
        </div>
        <div className="value">
          <div>
            <input
              type="range"
              value={count}
              ref={showw}
              onChange={changeValue}
            />
            <div className="text-center display-1"> {count}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
