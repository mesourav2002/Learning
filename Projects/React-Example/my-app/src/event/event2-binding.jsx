import { useState } from "react";

export function MouseDemoo() {
  const [styleObject, setStyleObject] = useState({
    position: "",
    top: "",
    left: "",
  });

  function GetPosition(e) {
    setStyleObject({
      position: "fixed",
      top: e.clientY + "px",
      left: e.clientX + "px",
    });
  }

  return (
    <div className="container-fluid" onMouseMove={GetPosition}>
      <div style={{ height: "1000px" }}>
        <p>Move your mouse pointer to test</p>
      </div>
      <img style={styleObject} src="indian_flag.gif" width="50" height="50" />
    </div>
  );
}
