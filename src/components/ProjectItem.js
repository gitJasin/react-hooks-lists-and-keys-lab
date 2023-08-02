import React from "react";

function ProjectItem({ name, about, technologies }) {

  const technologiesList = technologies.map((technology) => <span key={technology}>{technology}</span> )
  console.log(technologies)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesList}
      </div>
    </div>
  );
}

export default ProjectItem;

// [X] - The `ProjectItem` component should get a prop of `technologies` passed down from
// `ProjectList`. For each element in this array of technologies, create a `<span>`
// tag that displays the name of the technology.