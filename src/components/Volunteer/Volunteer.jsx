import React from "react";
import "./Volunteer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

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
        <div className="volunteer-sect">
          <h2>Manager</h2>
          <h3>Peer Education, FIC</h3>
          <p>
            As a manager at FIC, I managed a team of 30 top-performing students
            to assist approximately 300 peers per semester in understanding
            their coursework. Among my tasks were hosting workshops to promote
            Peer Education facilities and volunteer opportunities, conducting
            new member interviews, and organizing student leadership training to
            prepare them as tutors and mentors. Additionally, I represented FIC
            in formal meetings with Members of the Legislative Assembly (MLA),
            Navitas (FIC) stakeholders, and the SFU faculty department.
          </p>
        </div>
        <div className="volunteer-sect">
          <h2>Tutor & Mentor</h2>
          <h3>Peer Education, FIC</h3>
          <p>
            As a tutor and mentor at FIC, I supported fellow students through
            one-on-one academic assistance and mentorship. Among my tasks were
            providing help with various courses, breaking down complex concepts,
            and offering advice on navigating student life. I conducted drop-in
            sessions and participated in the Peer Education Mentorship Program,
            focusing on time management, study skills, and communication.
            Committing to a two-hour weekly shift, I engaged in team projects,
            attended training sessions, and collaborated with diverse teams.
            This role enhanced my communication skills, provided professional
            experience, and offered opportunities for future leadership
            positions within the program.
          </p>
        </div>
        <div className="volunteer-sect">
          <h2>IT Support Technician</h2>
          <h3>IT Squad, FIC</h3>
          <p>
            As an IT support technician at FIC, I collaborate with other
            students and alumni to provide comprehensive technical support
            across the FIC community. My tasks included maintaining computers,
            printers, projectors, and photocopiers and offering online support
            for issues like activating Computing IDs and troubleshooting Zoom
            problems. By resolving daily technical issues for staff and
            students, the IT support technician reduced stress and improved the
            FIC environment. I also engaged in project collaborations, attended
            training sessions, and contributed ideas to enhance technical
            support, committing to two shifts per week for two consecutive
            semesters.
          </p>
        </div>
        <div className="volunteer-sect">
          <h2>Orientation Coordinator</h2>
          <h3>Orientation Leader, FIC</h3>
          <p>
            As an orientation coordinator at FIC, I welcomed new students and
            supported them in building relationships within the FIC community.
            Among my tasks were leading icebreakers, hosting events during Weeks
            of Welcome, and running community connection sessions. I introduced
            students to their academic environment, important resources, and
            peers, helping to ease their worries and make them feel welcome.
            This role required energy, enthusiasm, and responsibility, involving
            collaboration with other leaders and professional staff. The
            experience provided professional development, enhanced my leadership
            skills, and fostered a fun, inclusive community for new students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
