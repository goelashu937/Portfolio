import "./WorkCardStyles.css";
import React from 'react'
import { NavLink } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="Project1" />
    <h2 className="project-title">{props.title}</h2>
    <div className="project-details">
    <p>{props.text}</p>
    <div className="project-btns">
    <NavLink to={props.view} className="btn">View</NavLink>
    <NavLink to="url.com" className="btn">Source</NavLink>    
    </div>    
    </div>
</div>
  )
}

