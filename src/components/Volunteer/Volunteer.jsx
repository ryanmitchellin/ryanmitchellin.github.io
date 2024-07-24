import React from "react";
import "./Volunteer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import Volunteer_Data from "../../assets/vol_data";

const Volunteer = () => {
  return (
    <div id="volunteer" className="volunteer">
      <div className="volunteer-title">
        <FontAwesomeIcon
          icon={faAnglesRight}
          style={{ color: "orange" }}
          className="arrow-icon"
        />
        <h1>Volunteers</h1>
        <FontAwesomeIcon
          icon={faAnglesLeft}
          style={{ color: "orange" }}
          className="arrow-icon"
        />
      </div>
      <div className="volunteer-sections">
        {Volunteer_Data.map((vol, index) => {
          return (
            <div key={index} className="volunteer-sect">
              <h2>{vol.v_position}</h2>
              <h3>{vol.v_title}</h3>
              <p>{vol.v_detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Volunteer;
