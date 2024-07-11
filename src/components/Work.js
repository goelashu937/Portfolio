import "./WorkCardStyles.css";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./WorkCardData";

export default function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((val, ind) => {
          return (
            <ProjectCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
}
