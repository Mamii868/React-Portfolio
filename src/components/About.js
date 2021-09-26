import React from 'react'
import "./About.css"
import personalPicture from '../images/PersonalPic-modified.png'
function About() {
    return (
        <about classname="AboutDiv" id="About">
            <h2 className= "title">About</h2>
            <imagediv>
                <img src={personalPicture} alt="Myself" id="personalPicture"/>
            </imagediv>
            <div id="aboutInfo">
            <p>My name is Marc Moten, an entry level full-stack developer. Born in 2002 and graduating from highschool in 2020,
                the need for more accessible and user-friendly programs pulled me in to the world of web development.
            </p>
            <p>My hobbies include playing the French horn, enjoying pizza, and gaming with friends.</p>
            </div>
        </about>


    )
}

export default About;
