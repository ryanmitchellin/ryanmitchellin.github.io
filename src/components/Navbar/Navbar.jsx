import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" className="nav-logo" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? (
            <>
              <FontAwesomeIcon
                icon={faAnglesUp}
                style={{ color: "orange" }}
                className="arrow-up"
              />
              <FontAwesomeIcon
                icon={faAnglesLeft}
                style={{ color: "orange" }}
                className="arrow-left"
              />
            </>
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
          {menu === "about" ? (
            <>
              <FontAwesomeIcon
                icon={faAnglesUp}
                style={{ color: "orange" }}
                className="arrow-up"
              />
              <FontAwesomeIcon
                icon={faAnglesLeft}
                style={{ color: "orange" }}
                className="arrow-left"
              />
            </>
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setMenu("projects")}>Projects</p>
          </AnchorLink>
          {menu === "projects" ? (
            <>
              <FontAwesomeIcon
                icon={faAnglesUp}
                style={{ color: "orange" }}
                className="arrow-up"
              />
              <FontAwesomeIcon
                icon={faAnglesLeft}
                style={{ color: "orange" }}
                className="arrow-left"
              />
            </>
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#volunteer">
            <p onClick={() => setMenu("volunteer")}>Volunteers</p>
          </AnchorLink>
          {menu === "volunteer" ? (
            <>
              <FontAwesomeIcon
                icon={faAnglesUp}
                style={{ color: "orange" }}
                className="arrow-up"
              />
              <FontAwesomeIcon
                icon={faAnglesLeft}
                style={{ color: "orange" }}
                className="arrow-left"
              />
            </>
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
