"use client";
import React, { useContext } from "react";
import { DeploySteps, MobileProjectType } from "../../types/MobileModels";
import ProjectCard from "../../components/Builder/ProjectCard";
import GlobalContextLayout, {
  GlobalContext,
} from "../../context/GlobalContext";

const index = () => {
  const { projects } = useContext(GlobalContext);
  return (
    <div className="flex flex-wrap gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default index;
