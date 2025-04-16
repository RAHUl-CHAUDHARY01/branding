import React from 'react';
import { ArrowRight, Instagram, Twitter, Github } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate= useNavigate();
  return (
    <div className="w-full">
      {/* Upper Section */}
      <div className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Left Side */}
          <div className="mb-10 md:mb-0">
            <h3 className="text-gray-600 font-medium text-sm mb-3">HIRE US</h3>
            <h2 className="text-5xl font-bold mb-6">GET IN TOUCH</h2>
            <button className="bg-black text-white rounded-full p-4 hover:bg-gray-800 transition-colors" onClick={()=>navigate('/contact  ')}>
              <ArrowRight size={20} />
            </button>
          </div>
          
          {/* Right Side */}
          <div className="flex flex-col">
            <Link to="mailto:HEY@MATTERED.COM" className="text-xl font-medium mb-6">
              HEY@MATTERED.COM
            </Link>
            <div className="flex flex-col">
              <p className="text-gray-600 mb-4">Follow</p>
              <div className="flex space-x-4">
                <Link to="#" className="hover:text-gray-600 transition-colors">
                  <Instagram size={20} />
                </Link>
                <Link to="#" className="hover:text-gray-600 transition-colors">
                  <Twitter size={20} />
                </Link>
                <Link to="#" className="hover:text-gray-600 transition-colors">
                  <Github size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Black Section */}
      <div className="w-full bg-black text-white py-6 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Links */}
          <div className="flex space-x-6 mb-4 md:mb-0 text-sm">
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">
              Contact us
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          
          {/* Right Copyright */}
          <div className="text-sm text-gray-400">
            Mattered is a registered trademark © All rights reserved 2021
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;