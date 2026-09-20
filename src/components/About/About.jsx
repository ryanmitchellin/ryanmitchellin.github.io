import React from "react";
import "./About.css";
import profile_img from "../../assets/profile.png";
import resume from "../../assets/resume.pdf";
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
              <p><b>Programming:</b> Python | C++ | Java | JavaScript | TypeScript</p>
            </div>

            <div className="about-skill">
              <p><b>Web Development:</b> ReactJS | Angular | HTML | CSS</p>
            </div>

            <div className="about-skill">
              <p><b>Data & AI:</b> SQL | Data Analysis | Machine Learning</p>
            </div>

            <div className="about-skill">
              <p><b>Quantitative:</b> Statistics | Financial Math | Risk Modeling</p>
            </div>
            <div className="about-skill-note">
                <a href={resume} target="_blank" rel="noopener noreferrer">
                More details...
                </a>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello, I'm Ryan, a recent Computing Science graduate from Simon Fraser University 
              with a Mathematics minor. I have developed a strong foundation in programming, 
              data analysis, probability, financial mathematics, and machine learning through 
              coursework and hands-on projects.
            </p>
            <p>
              Beyond academics, I served as a Peer Education Manager at SFU's FIC, where I led 
              a team of 30 tutors and mentors supporting approximately 300 students each semester. 
              I organized workshops, participated in interviews and leadership training, and worked 
              with students and faculty to support academic and personal development.
            </p>
            <p>
              I enjoy applying analytical and technical skills to practical problems and collaborating 
              with others to develop effective solutions. I am open to opportunities across technology, 
              data, quantitative analysis, actuarial science, and related fields where I can continue 
              learning and contribute to meaningful work.
            </p>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>30+</h1>
          <p>TEAM MEMBERS LED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2</h1>
          <p>SOA EXAMS PASSED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
