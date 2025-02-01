import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image} 
            alt="project_image" 
            className="w-full h-full object-cover rounded-2xl"
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

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>

          {/* ✅ Render Bullet Points for Descriptions */}
          <ul className="mt-2 text-secondary text-[14px] list-disc pl-5 space-y-1">
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};


const Works = () => {
  const [loadedProjects, setLoadedProjects] = useState([]);

  // ✅ Fix: Load projects immediately to prevent flickering
  useEffect(() => {
    setLoadedProjects(projects);
  }, []);

  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      {/* Description */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the projects I've built, showcasing my skills in full-stack 
          development, cloud computing, and scalable system design. Each project is 
          briefly described with links to code repositories. It reflects my ability 
          to solve complex problems, work with different technologies, and manage 
          projects effectively.
        </motion.p>
      </div>

      {/* ✅ Fix: Prevent disappearing projects */}
      {loadedProjects.length > 0 ? (
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {loadedProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-10">Loading projects...</p>
      )}
    </>
  );
};

export default SectionWrapper(Works, "work");