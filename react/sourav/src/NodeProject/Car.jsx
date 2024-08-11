import React, { useEffect, useState } from "react";

const Car = () => {
  const [car, setCar] = useState([]);

  let hii = () => {
    fetch(`http://localhost:4000/cars`)
      .then((res) => res.json())
      .then((elem) => setCar(elem));
  };

  useEffect(() => {
    hii();
  }, []);
  return (
    <div>
      {car.map((elem) => {
        return (
          <>
            <div>{elem.id}</div>
            <img src={elem.img} alt="" />
          </>
        );
      })}
    </div>
  );
};

export default Car;
