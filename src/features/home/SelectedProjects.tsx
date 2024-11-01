"use client";
import { useEffect, useState } from "react";
import SelectedProjectCard from "./SelectedProjectCard";
import { ProjectProps } from "../../utils/helper";

function SelectedProjects() {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((response) => response.json())
      .then((data: ProjectProps[]) => setProjects(data));
  }, []);

  return (
    <>
      {projects
        .filter((project) => project.selected)
        .map((project) => (
          <SelectedProjectCard project={project} key={project.id} />
        ))}
    </>
  );
}

export default SelectedProjects;
