import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpeg";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayVideo}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayVideo(true)}} />
      </div>
      <div className="about-right">
        <h2>ABOUT COLLEGE</h2>
        <h3>Know About Doranda College</h3>
        <p>
          Doranda College provides rigorous and challenging academic programs,
          incredible support systems and finest faculty to ensure good education
          and creation of an environment with the aim of offering balanced and
          quality education, and using education to act as a tool to fight the
          growing inequality in India by providing access to quality education
          to all, particularly the weaker sections of society Doranda College
          has its own three storied building for arts and commerce faculty with
          an independent newly built science block funded by Ministry of HRD,
          Govt. of Jharkhand.
        </p>

        <p>
          The experienced faculty members utilize their experience and wisdom to
          create a warm dynamic academic environment. The Teaching effort
          combines the best of tradition and innovation, providing our students
          with a solid foundation in every field.”
        </p>
      </div>
    </div>
  );
};

export default About;
