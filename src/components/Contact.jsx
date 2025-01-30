import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import gmailLogo from "../assets/gg.png"; 
import gitLogo from "../assets/gittthub.png"; 
import linkLogo from "../assets/link.png"; 


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // template_kss4von
    // service_z90b745
    // 9wcWUBcZFNl59QnQ0

    emailjs.send(
      'service_z90b745', 
      'template_kss4von', 
      {
        from_name: form.name,
        to_name: 'Yash',
        from_email: form.email,
        to_email: 'yashshah0910@gmail.com',
        message: form.message,
      },
        '9wcWUBcZFNl59QnQ0'
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='w-full bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Lets get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <div className="flex flex-col gap-3">
        {/* Gmail */}
        <div className="flex items-center gap-1">
          <img 
            src={gmailLogo} 
            alt="Gmail Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="text-white text-lg font-medium">yashshah0910@gmail.com</span>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-1">
          <img 
            src={linkLogo} 
            alt="LinkedIn Logo" 
            className="w-10 h-10 object-contain"
          />
          <a 
            href="https://www.linkedin.com/in/yashshah0910/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-400 text-lg font-medium hover:underline"
          >
            LinkedIn
          </a>
        </div>
        {/* Github */}
        <div className="flex items-center gap-1">
          <img 
            src={gitLogo} 
            alt="Github Logo" 
            className="w-10 h-10 object-contain"
          />
          <a 
            href="https://github.com/dashboard" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 text-lg font-medium hover:underline"
          >
            Github
          </a>
        </div>
      </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>

          
        </form>
      </motion.div>
      
    
    </div>
  );
};

export default SectionWrapper(Contact, "contact");