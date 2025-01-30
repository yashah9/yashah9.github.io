import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

     
        <div className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          <p>
            Hi, I'm Yash Shah, a graduate MS in CS student at NJIT with knowledge in full-stack development,
            cloud computing, and scalable backend systems. I work on building high-performance applications
            using React, Node.js, Python, AWS, and distributed systems like Kafka.
          </p>
          <br />
          <p>
            With a background in computer science and hands-on experience in software development, 
            I enjoy designing efficient architectures and optimizing system performance.
          </p>
          <br />
          <p>
            I'm a quick learner and collaborate closely to create efficient, scalable, and user-friendly solutions that
            solve real-world problems. Let's work together! Check out my projects below and feel free to connect! 🚀
          </p>
        </div>   

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");