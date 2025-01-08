"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap:12">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            githubLink={project.githubLink}
            previewLink={project.previewLink}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
