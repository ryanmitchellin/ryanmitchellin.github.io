import React from "react";
import "./About.css";
import profile_img from "../../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <FontAwesomeIcon
          icon={faAnglesRight}
          style={{ color: "orange" }}
          className="arrow-icon"
        />
        <h1>About me</h1>
        <FontAwesomeIcon
          icon={faAnglesLeft}
          style={{ color: "orange" }}
          className="arrow-icon"
        />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
          <div className="about-skills">
            <div className="about-skill">
              <p>C++ / Python</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>
                Tensorflow /<br />
                Pytorch
              </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>
                ReactJS /<br />
                Angular
              </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>
                Javascript /<br />
                TypeScript
              </p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello, I'm Ryan, a passionate Computing Science student at Simon
              Fraser University with a strong desire to innovate within the tech
              industry, particularly in enhancing the field of artificial
              intelligence. My journey in computing science has been defined by
              a solid academic foundation, extensive practical project
              experience, and active involvement in volunteering.
            </p>
            <p>
              As a manager of the FIC Peer Education community, I have led
              numerous workshops on self-improvement for students, conducted new
              member interviews, and represented FIC in formal meetings with
              MLAs, FIC stakeholders, and SFU faculty departments. My primary
              responsibility involves managing and organizing my team to assist
              fellow students facing challenges not only academically but also
              to support students with interpersonal skills.
            </p>
            <p>
              I bring to the table a diverse skill set, a value for leadership,
              communication skills, and a strong work ethic. I am always open to
              discussing any tech-related problems and opportunities to
              contribute to meaningful projects. Let's connect and explore how
              we can collaborate to drive innovation and positive change in the
              tech industry.
            </p>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>ACADEMIC AWARDS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
