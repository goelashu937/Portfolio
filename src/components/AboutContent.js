import React from 'react'
import "./AboutContentStyles.css"
import {Link} from 'react-router-dom';
import React1 from "../assests/project1.jpg"
import React2 from "../assests/project1.jpg"

export default function AboutContent() {
  return (
    <div className='about'>
      <div className="left">
        <h1>Who AM I? </h1>
        <p>I am a react frontend developer.</p>
      <Link to="/Contact">
      <button className="btn">Contact</button></Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top"><img className="img" src={React1} alt="img" /></div>
            <div className="img-stack bottom"><img className="img" src={React2} alt="img" /></div>
        
        </div>
      </div>
    </div>
  )
}
