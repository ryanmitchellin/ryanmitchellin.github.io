import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <img src={footer_logo} alt="" />
      <p>© Copyright 2024 Ryan Mitchellin.</p>
      <p>All rights reserved.</p>
      <p>
        Powered by{" "}
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
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
  );
}

export default Footer;
