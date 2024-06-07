import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import Footer from './components/Footer';
import Profile from './components/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Profile/>
        <Tech/>
        <Works/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App