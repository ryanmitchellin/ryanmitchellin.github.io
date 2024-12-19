import React, { useEffect } from "react";
import "./ProjectsAll.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Projects_Data from "../../assets/projects_data";
import menu_close from "../../assets/menu_close.svg";

const ProjectsAll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-all">
      <div className="title">
        <div className="projects-all-title">
          <FontAwesomeIcon
            icon={faAnglesRight}
            style={{ color: "orange" }}
            className="arrow-icon"
          />
          <h1>My Projects</h1>
          <FontAwesomeIcon
            icon={faAnglesLeft}
            style={{ color: "orange" }}
            className="arrow-icon"
          />
        </div>
        <div className="menu-close">
          <Link to={"/"}>
            <img src={menu_close} alt="" />
          </Link>
        </div>
      </div>
      <div className="projects-all-container">
        {Projects_Data.map((project, index) => {
          return (
            <div key={index} className="projects-all-format">
              <h2>{project.p_name}</h2>
              <div className="projects-all-content">
                <div className="projects-all-content-left">
                  {project.p_name === "DermaVision AI" ? (
                    <video key={index} src={project.p_img} autoPlay loop />
                  ) : (
                    <img key={index} src={project.p_img} alt="" />
                  )}
                  <p>{project.p_lang}</p>
                  <a
                    href={project.p_website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    Github
                  </a>
                </div>
                <div className="projects-all-content-right">
                  <p>{project.p_det1}</p>
                  <p>{project.p_det2}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsAll;
