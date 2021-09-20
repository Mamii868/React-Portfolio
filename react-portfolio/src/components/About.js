import React from 'react'
import "./About.css"
import personalPicture from '../images/PersonalPic-modified.png'
function About() {
    return (
        <about classname="aboutDiv">
            <h2 className= "title">About</h2>
            <imagediv>
                <img src={personalPicture} alt="Myself" id="personalPicture"/>
            </imagediv>
            <div id="aboutInfo">
            <p>My name is Marc Moten, an entry level full-stack developer.
                While learning the basics of game design, I developed a love for coding and continue to learn as much as possible
            </p>
            <p>My hobbies include playing the French horn, enjoying pizza, and gaming with friends.</p>

            </div>
        </about>


    )
}

export default About;
