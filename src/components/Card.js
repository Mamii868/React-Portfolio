import React from 'react'
import Button from './Button'
import Defi101 from '../images/Defi101.PNG'
import colSS from '../images/ColSS.PNG'
import me from '../images/me.jpg'
import './Card.css'

function Card() {
    return (
      <div className="container-fluid">
        <div className= "row">
            <div className="card  col-md-4 col-xs-4">
  <img src= {Defi101} className="card-img-top" alt="DeFi101 homepage"/>
  <div className="card-body">
    <h5 className="card-title">DeFi101</h5>
    <p className="card-text">Check cryptocurrency prices with multiple currencies as well as see recent news reguarding that currency.</p>
    <Button>Go Somewhere</Button>
  </div>
</div>
<div className="card  col-md-4 col-xs-4">
  <img src={colSS} className="card-img-top" alt="Collection Social Share homepage"/>
  <div className="card-body">
    <h5 className="card-title">Collection Social Share</h5>
    <p className="card-text">Social media website to upload collections of items and show off to the world!</p>
   <a href="/">
    <Button>Go Somewhere</Button>
</a>
  </div>
</div>
<div className="card  col-md-4 col-xs-4">
  <img src={me} className="card-img-top" alt="placeholder"/>
  <div className="card-body">
    <h5 className="card-title">Placeholder</h5>
    <p className="card-text">Coming Soon</p>
    <Button>Go Somewhere</Button>
  </div>
</div>
        </div>
        </div>
    )
}

export default Card
