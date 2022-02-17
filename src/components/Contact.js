import React from "react";
import "./Contact.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faGithub, faLinkedin, faEnvelope);

export default function Contact() {
  return (
    <div>
      <h2 className="title" id="Contact">Contact Me</h2>
      <ul className="list">
        <li>
          <a className="icon" id="github" href="https://github.com/Mamii868">
            {" "}
            <FontAwesomeIcon className="inIcon" icon={faGithub} />
            Mamii868{" "}
          </a>
        </li>
        <li>
          <a
            className="icon"
            id="linkedIm"
            href="https://linkedin.com/in/marcmotenii"
          >
            {" "}
            <FontAwesomeIcon className="inIcon" icon={faLinkedin} />
            marcmotenii{" "}
          </a>
        </li>
        <li>
          <a className="icon" id="phone" href="tel:972-971-3397">
            {" "}
            <FontAwesomeIcon className="inIcon" icon={faPhone} />
            972-971-3397{" "}
          </a>
        </li>
        <li>
          <a className="icon" id="email" href="mailto:marcmotenii@gmail.com">
            {" "}
            <FontAwesomeIcon className="inIcon" icon={faEnvelope} />
            marcmotenii@gmail.com{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}
