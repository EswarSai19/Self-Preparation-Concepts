import React from "react";
import "./skills.css";
import uiDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import appDesign from "../../assets/app-design.png";

function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passinate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, and JavaScript, React, NodeJs, ExpressJs, MongoDB as well as
        in Data Strutes & Algorithms
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={uiDesign} alt="uiDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX design</h2>
            <p>
              This is the demo text, where you can write your own content here.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="webDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website design</h2>
            <p>
              This is the demo text, where you can write your own content here
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={appDesign} alt="appDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App design</h2>
            <p>
              This is the demo text, where you can write your own content here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
