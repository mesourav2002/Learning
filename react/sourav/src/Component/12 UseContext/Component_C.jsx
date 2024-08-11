import React, { useContext } from "react";
import { fname } from "./UseContext";
import { lname } from "./UseContext";

const Component_C = () => {
  let fnm = useContext(fname);
  let lnm = useContext(lname);
  return (
    <div>
      <div>
        My Name Is {fnm} {lnm}
      </div>
    </div>
  );
};

export default Component_C;
