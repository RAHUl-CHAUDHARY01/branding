import { useState, useEffect } from 'react';
import AnimatedImageGallery from './LandingPage';
import StaggeredGallery from './StaggeredGallery';

export default function AnimatedCompanyEntrance() {
  const [animationState, setAnimationState] = useState('initial');

  // Handle entrance animation
  useEffect(() => {
    // Start with the black page visible
    setAnimationState('initial');

    // After a small delay, begin the animation
    const startTimer = setTimeout(() => {
      setAnimationState('animating');
    }, 500);

    // Complete the animation
    const endTimer = setTimeout(() => {
      setAnimationState('completed');
    }, 2000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">


      {/* Black overlay with sliding animation */}
      <div 
        className={`fixed inset-0 bg-black flex items-center justify-end transition-transform duration-1000 ease-in-out z-40 ${
          animationState === 'completed' ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transform: animationState === 'initial' 
            ? 'translateX(0)' 
            : 'translateX(-100%)',
          transitionProperty: 'transform, opacity',
        }}
      >
        <div className="text-white text-6xl font-[600] pr-16" style={{fontFamily:'Now'}}>
          OUR COMPANY SERVICE!
        </div>
      </div>

      {/* Main content that appears after animation */}
      <div className=" bg-white py-16 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Left side - Company title */}
          <div className="md:w-1/2 mb-8 md:mb-6">
            <h1 className="text-[60px] font-[400] leading-tight text-black" style={{fontFamily:'Now'}}>
              <span className="flex items-center">
                
                <span>Our Company</span>
              </span>
              <span className="block">Service!</span>
            </h1>
          </div>

          {/* Right side - Lorem Ipsum text */}
          <div className="md:w-1/2 md:pl-12">
            <p className="text-[20px] text-gray-800 leading-relaxed" style={{fontFamily:'Now'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
              Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
        <AnimatedImageGallery/>
        <StaggeredGallery/>
      </div>
    </div>
  );
}