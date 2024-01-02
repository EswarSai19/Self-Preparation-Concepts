import React from "react";
import "./works.css";
import protfolio1 from "../../assets/portfolio-1.png";
import protfolio2 from "../../assets/portfolio-2.png";
import protfolio3 from "../../assets/portfolio-3.png";
import protfolio4 from "../../assets/portfolio-4.png";
import protfolio5 from "../../assets/portfolio-5.png";
import protfolio6 from "../../assets/portfolio-6.png";
function Works() {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in playing attention to the smallest details and making
        sure that my work pixel perfect. I am excited to bring my skills and
        experience to help business achieve their goals and create a strong
        online presense
      </span>
      <div className="worksImgs">
        <img src={protfolio1} alt="" className="worksImg" />
        <img src={protfolio2} alt="" className="worksImg" />
        <img src={protfolio3} alt="" className="worksImg" />
        <img src={protfolio4} alt="" className="worksImg" />
        <img src={protfolio5} alt="" className="worksImg" />
        <img src={protfolio6} alt="" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
}

export default Works;
