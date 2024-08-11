import React from "react";
import PropsMoviesData from "./PropsData";
import PropsCard from "./PropsCard";
import "./PropsMovies.css";

const PropsMovies = () => {
  console.log(PropsMoviesData);
  return (
    <>
      <div className="moviesCard">
        <div className="header">Movie Cards</div>
        <div className="d-flex flex-wrap justify-content-center mt-5">
          {PropsMoviesData.map((elem) => {
            let { name, imgUrl, Released, Language, Hero, budget } = elem;
            return (
              <>
                <PropsCard
                  name={name}
                  img={imgUrl}
                  rel={Released}
                  lang={Language}
                  hero={Hero}
                  budget={budget}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PropsMovies;
