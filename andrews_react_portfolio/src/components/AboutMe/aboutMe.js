import React from "react";
import PortfolioPic from "../../assets/images/Me.JPG";

const AboutMe = () => {
  return (
    <section
      className="my-5 about"
      name="container"
      style={{ textAlign: "center" }}
    >
      <div className="">
        <img className="portfolio-pic" alt="Andrew" src={PortfolioPic} />
      </div>

      <h1 id="about">About Me</h1>
      <p className="text-background" id="aboutText">
        Hi there, my name is Andrew Martinez, and I am a designer and developer
        based out of San Antonio, Texas. I am currently enrolled in a full-stack
        development Coding Bootcamp Program and The University of Texas at San
        Antonio, where I am learning as many coding languages as I can.
        <br />
        I am a graduate of The University of Texas at San Antonio, where I
        gained my passion for design and development. If I am travelling for
        work, I am sitting in front of a computer gathering as much knowledge as
        possible for this new adventure of mine.
        <br />
        My goal is to start as a Front End Web Developer, until my skill set is
        further improved, as I work my way to becoming a Full Stack Developer.
        You can view some of my work in the Portfolio section!
      </p>
    </section>
  );
};

export default AboutMe;
