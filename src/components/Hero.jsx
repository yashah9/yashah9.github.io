import { motion } from "framer-motion";
import { useMemo } from "react";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const MemoizedComputersCanvas = useMemo(() => <ComputersCanvas />, []);

  return (
    <section className={`relative w-full min-h-screen flex flex-col justify-between mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-center sm:items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center sm:mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="text-center sm:text-left">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Yash</span>
          </h1>
          <p className="mt-3 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            I develop <span className="text-[#915EFF] text-2xl sm:text-3xl md:text-4xl font-bold">Web Applications</span> 
          </p>
          <p className="text-white text-base sm:text-lg md:text-xl mt-1">
            in Python and Javascript
          </p>
        </div>
      </div>

      {/* ✅ Ensures Image Does Not Overlap on Large Screens */}
      <div className="relative w-full flex justify-center items-end mt-10 lg:mt-20">
        {MemoizedComputersCanvas}
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;