import "./HeroImage2Styles.css";
import ProjectBg from '../assests/project-bg.jpg'
import React from "react";

export default function HeroImage2(props) {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
