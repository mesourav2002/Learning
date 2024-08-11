import React from "react";

const Admin = () => {
  return <h1>Admin Login</h1>;
};
const Users = () => {
  return <h1>Users Login</h1>;
};

const ConditionalRendering = () => {
  //! Conditional / Branching Statement
  //   if (true) {
  //     return <Admin />;
  //   } else {
  //     return <Users />;
  //   }
  //! Turnary
  //   let bool = true;
  //   return bool ? <Admin /> : <Users />;
  //!Logical(&&)
  let bool = true;
  return bool && <Admin />;
};

export default ConditionalRendering;
