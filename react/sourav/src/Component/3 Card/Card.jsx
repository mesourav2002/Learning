import React from "react";
import Data from "./Data";
import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="cards">
        <div className="header">Animal</div>
        <div className="card-container">
          {Data.map((elem) => {
            let { id, title, desc, imgUrl } = elem;
            return (
              <>
                <div className="card">
                  <div className="image">
                    <img src={imgUrl} alt="" />
                  </div>
                  <div className="title">{title}</div>
                  <div className="desc">{desc}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
