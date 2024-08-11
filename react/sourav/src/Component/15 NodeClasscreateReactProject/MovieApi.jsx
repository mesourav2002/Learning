import React, { useEffect, useRef, useState } from "react";
import "./movies.css";
const MovieApi = () => {
  let searchField = useRef();
  // !============================================================
  //   useEffect(() => {
  //     fetch("http://www.omdbapi.com/?s=animal&apikey=273b18f0")
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);
  // !============================================================
  let [movie, setMovie] = useState([]);

  let handleSubmit = (e) => {
    e.preventDefault();
    let inputData = searchField.current.value;

    let fetchApi = async () => {
      await fetch(`http://www.omdbapi.com/?s=${inputData}&apikey=273b18f0`)
        .then((data) => data.json())
        .then((elem) => setMovie(elem.Search));
    };
    fetchApi();
  };

  return (
    <>
      <div className="movieapi">
        <div className="header">Search Movies</div>

        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="container w-25 form-control mt-2 "
              type="text"
              placeholder="Enter Your Movies Name"
              ref={searchField}
            />
            <button className="btn btn-primary helo">Submit</button>

            <div className="main">
              {movie.map((data) => {
                let { Title, Poster, Year } = data;
                return (
                  <>
                    <div className="card ">
                      <div className="name ">Movies - {Title}</div>
                      <div className="image">
                        <img src={Poster} alt="Image is Not Yet" />
                      </div>
                      <div className="year">{Year}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MovieApi;
