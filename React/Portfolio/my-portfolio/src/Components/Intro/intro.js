import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Eswar</span>
          <br />
          <span>Web Developer</span>
        </span>
        <p className="introPara">
          I am a skilled web developer with experience <br />
          in creating various things which are new.
        </p>
        <Link>
          <button className="btn">
            <img className="btnImg" src={btnImg} alt="" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
