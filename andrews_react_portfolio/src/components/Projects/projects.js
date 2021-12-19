import React from "react";

const Projects = (props) => {
  return (
    <div className={`tile image ${props.image}`}>
      <div className="middle">
        <ul className="text">
          <li>
            <h5>
              <a href={props.projectURL}>{props.name}</a>
            </h5>
          </li>
          <li className="description-margin">{props.description}</li>
          <li className="description-margin">{props.technology}</li>
          <li>
            <a href={props.github}>
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
