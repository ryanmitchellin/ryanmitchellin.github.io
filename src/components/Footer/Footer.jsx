import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="box">
      <hr />
      <div className="container">
        <div className="contact-details">
          <div className="contact-detail">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:ryanvincent999@gmail.com">
              ryanvincent999@gmail.com
            </a>
          </div>
          <div className="contact-detail">
            <FontAwesomeIcon icon={faLinkedin} />
            <a
              href="https://www.linkedin.com/in/ryanmitchellin"
              target="_blank"
              rel="noopener noreferrer"
            >
              ryanmitchellin
            </a>
          </div>
          <div className="contact-detail">
            <FontAwesomeIcon icon={faGithub} />
            <a
              href="https://github.com/ryanmitchellin"
              target="_blank"
              rel="noopener noreferrer"
            >
              ryanmitchellin
            </a>
          </div>
        </div>
        <div className="footer">
          <img src={footer_logo} alt="" />
          <p>© Copyright 2024 Ryan Mitchellin.</p>
          <p>All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://vitejs.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite
            </a>{" "}
            and{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            .
          </p>
          <p>
            Developed with inspiration from{" "}
            <a
              href="https://www.youtube.com/@GreatStackDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GreatStack
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
