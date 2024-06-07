import React from 'react';
import facebook from '/facebook.png';
import linkedin from '/linkedin.png';
import github from '/github.png';
import instagram from '/instagram.png';

const Footer = () => {
    return (
        <div className='w-full h-20 flex items-center justify-between xl:flex-row flex-col gap-10 overflow-hidden'>
            <div className='flex gap-8 ms-10'>
                <a href="https://www.facebook.com/profile.php?id=100091441811251" target='_blank'><img src={facebook} alt="Facebook Logo" className='w-8 h-8' /></a>
                <a href="https://www.linkedin.com/in/atulmishra1997/" target='_blank'><img src={linkedin} alt="Facebook Logo" className='w-8 h-8' /></a>
                <a href="https://www.github.com/atulmishra1997/" target='_blank'><img src={github} alt="Facebook Logo" className='w-8 h-8' /></a>
                <a href="https://www.instagram.com/atul_mishra1997/" target='_blank'><img src={instagram} alt="Facebook Logo" className='w-8 h-8' /></a>
            </div>
            <div className='text-secondary me-8 max-[640px]:hidden'>&copy; All Rights Reserved. <span>ATUL MISHRA</span></div>
        </div>
    )
}

export default Footer