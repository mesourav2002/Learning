import React from "react";
import Data from "./AllDeatils";

const Hello = () => {
  return (
    <>
      <div className="display-1 text-danger text-center"> User Details </div>
      <div className="">
        {Data.map((elem) => {
          let { name, pan, balance, ac } = elem;
          return (
            <>
              <ul>
                <li>{name}</li>
                <li>{pan}</li>
                <li>{balance}</li>
                <li>{ac}</li>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Hello;
