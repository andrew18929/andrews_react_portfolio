import React from "react";
import Projects from "../Projects/projects";
import Wrapper from "../Wrapper/wrapper";

import projectPics from "../../projectPics";

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
            id={projectPics.id}
            key={projectPics.id}
            name={projectPics.projectTitle}
            description={projectPics.projectDescription}
            url={projectPics.projectURL}
            github={projectPics.projectRepo}
            image={projectPics.projectPics}
            technology={projectPics.projectTechnologies}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default PortfolioContainer;
