import React from 'react';
import Resume from "/docs/Atul_Resume.pdf";
import Atul from "/Atul.png";
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../style';


const Profile = () => {
    return (
        <motion.div variants={fadeIn("up","spring",0.5, 0.75)} className='flex gap-14 xl:flex-row flex-col overflow-hidden'>
            <Tilt options={{max:45, scale:1, speed:450}} className=' bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
                <div className='relative w-full h-[380px]'>
                    <img src={Atul} alt="Atul Profile" className='w-full h-full object-cover rounded-2xl' />
                </div>
            </Tilt>
            <Tilt options={{max:45, scale:1, speed:450}} className=' bg-tertiary p-5 rounded-2xl'>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>Hey I'm &nbsp;</p>
                    <h2 className={styles.sectionHeadText}> Atul Mishra</h2>
                </motion.div>
                <div className='w-full flex'>
                    <motion.p variants={fadeIn("","",0.1,1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                        I am a fresh Graduate with <b>Bachelor of Technology</b> from <b>Dr. A.P.J. Abdul Kalam Technical University</b>, Lucknow, Uttar Pradesh in year 2023. Basically I belongs from Sarnath, Varansi, Uttar Pradesh. 
                        <br /><b>Languages:</b>&nbsp;Hindi, English,<br /><b>Hobbies:</b>&nbsp;Reading Books, Exercise, Cooking, Travelling. <br /><br />
                    </motion.p>
                </div>
                <a href={Resume} target='_blank' className=' bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'><button>Resume</button></a>
            </Tilt>
        </motion.div>
    )
}

export default SectionWrapper(Profile, "profile");