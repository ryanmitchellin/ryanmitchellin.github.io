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
        <br /> a Computing Science student based in Canada.
      </h1>
      <p>
        I am currently seeking for co-op / internship opportunities to further
        develop my skills and gain more hands-on experience.
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
