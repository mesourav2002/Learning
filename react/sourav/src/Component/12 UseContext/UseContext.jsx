import React from "react";
import Component_A from "./Component_A";
import { createContext } from "react";

export let fname = createContext();
export let lname = createContext();

const UseContext = () => {
  return (
    <div>
      <fname.Provider value={"DINGA"}>
        <lname.Provider value={"RAJA"}>
          <Component_A />
        </lname.Provider>
      </fname.Provider>
    </div>
  );
};

export default UseContext;
