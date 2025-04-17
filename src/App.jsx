import React, { useEffect, useState } from 'react'
import './assets/fonts/fonts.css';
import ResponsiveNavbar from './components/Navbar'
import AnimatedCompanyEntrance from './components/AnimatedEntrance'
import Footer from './components/Footer'
import ContactForm from './components/Contact'
import AboutUs from './components/AboutUs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllWorkPage from './components/AllWorkPage'
import ScrollToTop from './ScrollToTop';

function App() {

  
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
      <ResponsiveNavbar/>
     <Routes>
<Route path='/' element={<AnimatedCompanyEntrance/>}/>
<Route path='/about' element={<AboutUs/>}/>
<Route path='/contact' element={<ContactForm/>}/>
<Route path='/all-work' element={<AllWorkPage/>}/>
      {/* <AnimatedCompanyEntrance/> */}
      {/* <AnimatedImageGallery/> */}
      {/* <VisibleViewCursor/> */}
      {/* <ContactForm/> */}
      {/* <AboutUs/> */}
     </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
