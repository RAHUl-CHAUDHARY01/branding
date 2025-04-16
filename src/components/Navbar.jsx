import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate=useNavigate();
  return (


    <nav className="w-full bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={()=> navigate('/')}>
          <h1 className="text-2xl font-bold">mattered<span className="text-blue-600">•</span></h1>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation
        <ul className="hidden md:flex space-x-8">
          <li><Link to="#design" className="text-gray-700 hover:text-black">Design</Link></li>
          <li><Link to="#branding" className="text-gray-700 hover:text-black">Branding</Link></li>
          <li><Link to="#development" className="text-gray-700 hover:text-black">Development</Link></li>
          <li><Link to="#about" className="text-gray-700 hover:text-black">About</Link></li>
          <li><Link to="#blog" className="text-gray-700 hover:text-black">Blog</Link></li>
          <li><Link to="#contact" className="text-gray-700 hover:text-black">Contact</Link></li>
        </ul> */}

        {/* Hire US! button */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Hire US!
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* {isMenuOpen && (
        <div className="md:hidden mt-4 px-2">
          <ul className="flex flex-col space-y-4">
            <li><Link to="#design" className="text-gray-700 hover:text-black block py-2">Design</Link></li>
            <li><Link to="#branding" className="text-gray-700 hover:text-black block py-2">Branding</Link></li>
            <li><Link to="#development" className="text-gray-700 hover:text-black block py-2">Development</Link></li>
            <li><Link to="#about" className="text-gray-700 hover:text-black block py-2">About</Link></li>
            <li><Link to="#blog" className="text-gray-700 hover:text-black block py-2">Blog</Link></li>
            <li><Link to="#contact" className="text-gray-700 hover:text-black block py-2">Contact</Link></li>
            <li>
              <Link 
                to="#hire" 
                className="bg-black text-white px-6 py-2 rounded-full font-medium inline-block hover:bg-gray-800 transition-colors"
              >
                Hire US!
              </Link>
            </li>
          </ul>
        </div> */}
      {/* )} */}
    </nav>
  );
}