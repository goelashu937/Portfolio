import "./HeroImageStyles.css";
import React from "react";
import Introbg from "../assests/intro-bg.jpg";
import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function HeroImage() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-bg" src={Introbg} alt="intro-bg" />
      </div>
      <div className="content">
        <p>Welcome to my Portfolio</p>
        <h1>Hi! I am <span style={{color:"#23D18B"}}>Ashu Goel</span></h1>
        <h4>Fun Fact : "I love trying out new recipes and experimenting in the kitchen"</h4>
        
        <Link to="/Project" className="btn">
          Projects
        </Link>
        <Link to="/Contact" className="btn btn-light">
          Say Hello   <FaLocationArrow />
        </Link>
      </div>
    </div>
  );
}
