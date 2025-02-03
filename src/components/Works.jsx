

import React, { useState, useEffect, useMemo } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)} 
      className="w-full flex justify-center"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl w-full max-w-[380px] sm:max-w-[360px] lg:max-w-[340px] overflow-hidden"
      >
        {/* Image Container */}
        <div className="relative w-full h-[230px]">
          <img 
            src={image} 
            alt="project_image" 
            className="w-full h-full object-cover rounded-2xl max-w-full"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github} 
                alt="source code" 
                className="w-1/2 h-1/2 object-contain" 
              />
            </div>
          </div>
        </div>

        {/* Title & Description */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px] sm:text-[22px]">{name}</h3>

          {/* ✅ Render Bullet Points for Description */}
          <ul className="mt-2 text-secondary text-[14px] sm:text-[16px] list-disc pl-5 space-y-1">
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px] sm:text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [loadedProjects, setLoadedProjects] = useState(projects);

  // ✅ Ensure projects stay loaded on all screen sizes
  useEffect(() => {
    setLoadedProjects(projects);
  }, []);

  // ✅ Optimize Rendering with useMemo
  const memoizedProjects = useMemo(() => loadedProjects, [loadedProjects]);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center px-4">
      {/* ✅ Ensure section never disappears */}
      <motion.div 
        variants={textVariant()} 
        initial="visible" // ✅ Prevents disappearing on first render
        className="w-full text-center"
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      {/* Section Description */}
      <div className="w-full max-w-3xl text-center mt-3">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="visible" // ✅ Ensures this text stays on mobile screens
          className="text-secondary text-[16px] sm:text-[17px] leading-[30px]"
        >
          Here are some of the projects I've built, showcasing my skills in full-stack 
          development, cloud computing, and scalable system design. Each project is 
          briefly described with links to code repositories. It reflects my ability 
          to solve complex problems, work with different technologies, and manage 
          projects effectively.
        </motion.p>
      </div>

      {/* ✅ Responsive Grid Layout */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 w-full">
        {memoizedProjects.length > 0 ? (
          memoizedProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        ) : (
          <p className="text-center text-gray-400 mt-10">Loading projects...</p>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");