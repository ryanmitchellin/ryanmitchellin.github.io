import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <FontAwesomeIcon icon={faAnglesRight} style={{ color: "orange" }} />
        <h1>Get in Touch</h1>
        <FontAwesomeIcon icon={faAnglesLeft} style={{ color: "orange" }} />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>My Contact</h1>
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
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
