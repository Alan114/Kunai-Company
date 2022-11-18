import React from "react";
import "./ProjectList.css";

function ProjectList({ projects }) {
  return (
    <div>
      <h2>Projects</h2>
      {projects.length === 0 && <p>There are no projects yet!</p>}
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}

export default ProjectList;
