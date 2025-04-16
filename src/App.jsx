import React, { useEffect, useState } from 'react'
// import Microsoft.ProjectPage from './components/LandingPage'
import ImageHoverExpand from './components/LandingPage'
import AnimatedImageGallery from './components/LandingPage'
import CustomViewCursor from './components/cursor'
import VisibleViewCursor from './components/cursor'
import AnimatedEntrance from './components/AnimatedEntrance'
import ResponsiveNavbar from './components/Navbar'
import AnimatedCompanyEntrance from './components/AnimatedEntrance'
import Footer from './components/Footer'
import ContactForm from './components/Contact'
import AboutUs from './components/AboutUs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cursor from './components/cursor'
import AllWorkPage from './components/AllWorkPage'

function App() {

  
  return (
    <div>
      <BrowserRouter>
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
