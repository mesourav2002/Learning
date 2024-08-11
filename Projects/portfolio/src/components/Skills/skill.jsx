import React from "react";
import "./skill.css";
import UIDesigner from "./../assetss/ui-design.png";
import WebDesign from "./../assetss/web-design.png";
import AppDesign from "./../assetss/app-design.png";

export function Skills() {
  return (
    <div>
      <section id="skills">
        <span className="skillTittle">What I do</span>
        <span className="skillDesc">
          I am a skilled and passionate web designer creating visually appealing
          and user-friendly websites. I have a strong understanding of design
          and a keen eye for details. i am proficient in HTML,CSS,JAVASCRIPT and
          BOOTSTRAP, as well as freamwork like ReactJs.{" "}
        </span>
        <span className="skillBars">
          <div className="skillBar">
            <img src={UIDesigner} alt="UIDesigner" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI/UX design</h2>
              <p>This is demo text this is demo text this s demo text</p>
            </div>
          </div>{" "}
          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Website design</h2>
              <p>This is demo text this is demo text this s demo text</p>
            </div>
          </div>{" "}
          <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>App design</h2>
              <p>This is demo text this is demo text this s demo text</p>
            </div>
          </div>
        </span>
      </section>
    </div>
  );
}
