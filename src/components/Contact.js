import React from "react";
import './Contact.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faGithub, faLinkedin, faEnvelope, )

export default function Contact() {
    return(
        <div>
            <h2 className= "title">Contact Me</h2>
            <ul className="list">
                <li><a className="icon" href='https://github.com/Mamii868'> <FontAwesomeIcon icon= {faGithub}/> Mamii868</a></li>
                <li><a className="icon" href='https://linkedin.com/in/marcmotenii'> <FontAwesomeIcon icon= {faLinkedin}/> marcmotenii</a></li>
                <li><a className="icon" href='tel:972-971-3397'> <FontAwesomeIcon icon= {faPhone}/> 972-971-3397</a></li>
                <li><a className="icon" href='mailto:marcmotenii@gmail.com'> <FontAwesomeIcon icon= {faEnvelope}/> marcmotenii@gmail.com</a></li>
            </ul>
        </div>
    )
}
