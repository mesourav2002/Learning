import React from "react";
import "./intro.css";
import bg from ".././assetss/sourav.png";
import btnImg from ".././assetss/hireme.png";
import { Link } from "react-scroll";

export function Intro() {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello </span>
        <span className="introText">
          I'm{" "}
          <span className="introName">
            Sourav <br />
          </span>
          Website Designer
        </span>
        <p className="intropara">
          I am a skilled web designer creating <br />
          visually appealing and us friendly website.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" /> Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="ng" className="bg" />
    </section>
  );
}
