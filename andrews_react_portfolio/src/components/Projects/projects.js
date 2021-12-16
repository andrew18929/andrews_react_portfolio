import React from "react";

const Projects = (props) => {
  return (
    <div className={`tile image ${props.projectPic}`}>
      <div className="middle">
        <ul className="text">
          <li>
            <h5>
              <a href={props.projectURL}>{props.projectTitle}</a>
            </h5>
          </li>
          <li className="description-margin">{props.projectDescription}</li>
          <li className="description-margin">{props.projectTechnologies}</li>
          <li>
            <a href={props.projectRepo}>
              <span>
                <i className="fab fa-github fa-2x"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
