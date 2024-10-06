import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#8c56ff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
            <h1 className="lg:text-6xl text-4xl max-sm:text-4xl md:text-6xl font-bold">Hi, I'm&nbsp;
              <TypeAnimation
                  sequence={["Atul Mishra", 1000, "A MERN Stack Devloper", 1000]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                  className=" lg:text-6xl text-4xl max-sm:text-4xl md:text-6xl text-[#8c56ff] font-bold"
                />
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop attractive user <br className=' sm:block hidden'/> interfaces and web applications.</p>
        </div>
      </div>
      <ComputersCanvas/>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div animate={{y:[0,24,0]}} transition={{duration:1.5, repeat:Infinity, repeatType:'loop'}} className='w-3 h-3 rounded-full bg-secondary mb-1' />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
