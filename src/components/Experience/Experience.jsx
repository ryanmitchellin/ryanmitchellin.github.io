import React from "react";
import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import Experience_Data from "../../assets/exp_data";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="experience-title">
        <FontAwesomeIcon
          icon={faAnglesRight}
          style={{ color: "orange" }}
          className="arrow-icon"
        />
        <h1>Experiences</h1>
        <FontAwesomeIcon
          icon={faAnglesLeft}
          style={{ color: "orange" }}
          className="arrow-icon"
        />
      </div>
      <div className="experience-sections">
        {Experience_Data.map((vol, index) => {
          return (
            <div key={index} className="experience-sect">
              <h2>{vol.e_position}</h2>
              <h3>{vol.e_title}</h3>
              <p>{vol.e_detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
