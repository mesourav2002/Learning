import React, { useEffect, useState } from "react";
import "./store.css";
const FetchApi = () => {
  let [store, setStore] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setStore(data));
  }, []);
  return (
    <>
      <div className="main">
        {store.forEach((elem) => {
          let { id, title, price, description, image } = elem;
          return (
            <>
              <div className="card ">
                <div className="name ">Id - {id}</div>
                <div className="image">
                  <img src={image} alt="Image is Not Yet" />
                </div>
                <div className="year">Prics - {price}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FetchApi;
