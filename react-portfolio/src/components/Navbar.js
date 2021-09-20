import React from "react";
import "./Navbar.css"
function Navbar() {


    return (
    <nav className="navbar navbar-expand navbar-dark bg-dark" id="navbar">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Marc Moten</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link" href="#About">About Me</a>
          <a className="nav-link" href="#Projects">Resume/Projects</a>
          <a className="nav-link" href="https://github.com/Mamii868">Github</a>
        </div>
      </div>
    </div>
  </nav>
    )
}

export default Navbar;