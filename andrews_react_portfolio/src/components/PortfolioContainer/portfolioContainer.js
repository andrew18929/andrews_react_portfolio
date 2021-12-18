import React from "react";
import Projects from "../Projects/projects";
import Wrapper from "../Wrapper/wrapper";

import projectPics from "../../projectPics.json";

const PortfolioContainer = () => {
  return (
    <section className="my-5">
      <div>
        <h1>My Portfolio</h1>
        <p>My Recent Projects</p>
      </div>
      <Wrapper>
        {projectPics.map((project) => (
          <Projects
            id={project.id}
            key={project.id}
            name={project.projectTitle}
            description={project.projectDescription}
            url={project.projectURL}
            github={project.projectRepo}
            image={project.projectPics}
            technology={project.projectTechnologies}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default PortfolioContainer;
