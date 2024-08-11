import React from "react";
import "./work.css";
import portfolio1 from ".././assetss/1.png";
import portfolio2 from ".././assetss/2.png";
import portfolio3 from ".././assetss/3.png";
import portfolio4 from ".././assetss/4.png";
import portfolio5 from ".././assetss/5.png";
import portfolio6 from ".././assetss/6.png";

export function Works() {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="workDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. i am excited to bring my skills and
        experience to help businesses achieve their goals and create a strong
        online presence.
      </span>
      <div className="worksImgs">
        <img src={portfolio2} alt="portfolio1" className="workImg" />
        <img src={portfolio2} alt="portfolio2" className="workImg" />
        <img src={portfolio2} alt="portfolio3" className="workImg" />
        <img src={portfolio2} alt="portfolio4" className="workImg" />
        <img src={portfolio2} alt="portfolio5" className="workImg" />
        <img src={portfolio2} alt="portfolio6" className="workImg" />
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
}
