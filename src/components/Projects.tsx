"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constants";
import ProjectsTag from "./ProjectsTag";

const Projects = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChance = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = PROJECTS.filter((Projects) =>
    Projects.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
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
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectsTag
          onClick={() => handleTagChance("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectsTag
          onClick={() => handleTagChance("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectsTag
          onClick={() => handleTagChance("Mobile")}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap:12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              githubLink={project.githubLink}
              previewLink={project.previewLink}
              technologies={project.technologies}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
