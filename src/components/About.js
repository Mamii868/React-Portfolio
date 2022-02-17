import React from "react";
import "./About.css";
import personalPicture from "../images/PersonalPicture.jpeg";
function About() {
  return (
    <div id="About">
      <h2 className="title">About</h2>
      <div className="AboutDiv">
        <img src={personalPicture} alt="Myself" id="personalPicture" />
        <div id="aboutInfo">
          <p>
            {" "}
            I am a full stack developer prepared to learn and develop my skills
            through experience. I have recently received a certificate in full
            stack development from Southern Methodist University, acquiring
            skills in web design, CSS, Javascript, React.js, and MySQL. I have
            especially learned how to work as a team to build different programs
            in this course, giving me vital experience of working on projects.
            Coming from a background in music, I have been able to use my
            ability to adapt to what I am working on to quickly learn and
            accomplish tasks as well as work with different people. As I explore
            the world of coding I aim to constantly hone my skills as well as
            gear apps I work on to provide the best user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
