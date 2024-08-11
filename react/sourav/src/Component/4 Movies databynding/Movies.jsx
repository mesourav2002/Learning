import React from "react";
import MoviesData from "./MoviesData";
import "./Movies.css";

const Movies = () => {
  return (
    <>
      <div className="header">
        <marquee behavior="alternate" scrollamount="15px">
          Movies Gallary
        </marquee>{" "}
      </div>
      <div className="d-flex flex-wrap justify-content-center mt-5 ">
        {MoviesData.map((elem) => (
          <div className="card  m-2 " style={{ width: "32vh", height: "72vh" }}>
            <div className="name p-2 d-flex justify-content-center text-danger">
              Movies - {elem.name}
            </div>
            <div className="image">
              <img src={elem.imgUrl} alt="" />
            </div>
            <hr />
            <div className="d-flex justify-content-center text-uppercase all text-info">
              Released - {elem.Released}
            </div>
            <div className="d-flex justify-content-center text-uppercase all text-primary">
              Language - {elem.Language}
            </div>
            <div className="d-flex justify-content-center text-uppercase all text-secondary">
              Hero - {elem.Hero}
            </div>
            <div className="d-flex justify-content-center text-uppercase all text-warning">
              budget - {elem.budget}
            </div>
            <hr />
            <div className="d-flex justify-content-center ">
              <button className="btn btn-success w-50 d-flex justify-content-center ">
                {" "}
                Watch
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
