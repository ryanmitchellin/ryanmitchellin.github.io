import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import Projects_Data from "../../assets/projects_data";

function Services() {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <FontAwesomeIcon icon={faAnglesRight} style={{ color: "orange" }} />
        <h1>My Projects</h1>
        <FontAwesomeIcon icon={faAnglesLeft} style={{ color: "orange" }} />
      </div>
      <div className="projects-container">
        {Projects_Data.map((project, index) => {
          return (
            <Link to={"/ProjectsAll"} key={index} className="projects-format">
              <h2>{project.p_name}</h2>
              <img key={index} src={project.p_img} alt="" />
              <p>{project.p_lang}</p>
              <div className="projects-bottom-right">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          );
        })}
      </div>
      <Link to={"/ProjectsAll"} className="projects-showmore">
        <p>Show More</p>
      </Link>
    </div>
  );
}

export default Services;
