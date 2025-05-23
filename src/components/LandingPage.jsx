import { useState, useEffect } from 'react';
import rndom from '../assets/rndom.jpg';
import r2 from '../assets/r2.jpg';
import r3 from '../assets/r3.jpg';
import r4 from '../assets/r4.jpg';
import r5 from '../assets/r5.webp';
import r6 from '../assets/r6.jpg';
import r7 from '../assets/r7.jpg';
import r8 from '../assets/r8.jpg';
import r9 from '../assets/r9.png';
import r10 from '../assets/r10.png';
import branding from '../assets/branding.jpg';
import paia from '../assets/paia.png';
import packaging from '../assets/packaging.png';
import d3 from '../assets/3d.avif';
import cho from '../assets/cho.jpg';
export default function AnimatedImageGallery() {
  const [loaded, setLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Array of image data with captions
  const images = [
    { src: branding, caption: "Branding",color:'black' },
    { src: paia, caption: "UI/UX",color:'black' },
    { src:packaging, caption: "Packaging",color:'black' },
    { src: d3, caption: "3D Design" },
    { src:cho, caption: "Illustration" }
  ];

  // Set loaded to true after component mounts to trigger initial animations
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 w-full">
      {images.map((image, index) => (
        <div 
          key={index}
          className="relative w-full px-2 my-0.5 overflow-hidden transition-all duration-500 ease-in-out"
          style={{ 
            height: hoveredIndex === index ? '350px' : '200px',
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={image.src}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover brightness-90"
          />
          <div 
            className={`absolute transition-all duration-3000 bg-opacity-40 text-white font-sans text-[40px] p-4 ${
              loaded ? 'left-0' : 'left-full'
            } ${
              hoveredIndex === index 
                ? 'bottom-0 transform translate-y-0' 
                : 'bottom-0 transform translate-y-0'
            }`}
            style={{
              transitionProperty: 'left, transform',
              transform: `translateY(${hoveredIndex === index ? '0' : '0'})`,
            }}
          >
            <h3 className={`text-[60px] font-semibold`}>{image.caption}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}