import React from "react";
import "./Home.css";
import profile_img from "../../assets/profile.png";
import resume from "../../assets/resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="home" className="home">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Ryan Mitchellin,</span>
        <br /> a Computing Science and Mathematics graduate.
      </h1>
      <p>
        I am a recent graduate from Simon Fraser University, combining computing, quantitative, 
        and analytical skills across technology, data, and actuarial applications.
      </p>
      <div className="home-action">
        <div className="home-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="home-resume"
        >
          My resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
