import { useState, useRef, useEffect } from 'react';
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
import img2 from '../assets/img2.jpg';
import { ArrowRight, CircleDot, CirclePause } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function DualViewGallery() {
  const [activeView, setActiveView] = useState('explore');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const navigate= useNavigate();
  // Sample image data
  const images = [
    {
      src: branding,
      alt: "Gallery image 1",
      explorePosition: { top: "330px", left: "30px",width:'380px',height:'400px' },
    },
    {
      src: paia,
      alt: "Gallery image 2",
      explorePosition: { top: "250px", left: "380px",width:'280px',height:'400px' },
    },
    {
      src:img2,
      alt: "Gallery image 3",
      explorePosition: { top: "80px", left: "680px",width:'250px',height:'240px' },
    },
    {
      src: d3,
      alt: "Gallery image 4",
      explorePosition: { top: "420px", left: "800px",  width:'240px',height:'300px' },
    },
    {
      src: cho,
      alt: "Gallery image 5",
      explorePosition: { top: "230px", left: "1050px",width:'280px',height:'300px' },
    },
    {
      src: img2,
      alt: "Gallery image 6",
      explorePosition: { top: "370px", left: "1370px",width:'300px',height:'400px' },
    },
    {
      src: branding,
      alt: "Gallery image 7",
      explorePosition: { top: "170px", left: "1680px",width:'280px',height:'350px' },
    }
  ];

  // Toggle between views with animation
  const toggleView = (view) => {
    if (view === activeView) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveView(view);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  // Mouse event handlers for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Add mouse leave event to prevent sticking
  useEffect(() => {
    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Text block positioned at top-left */}
      <div
        className="absolute z-20"
        style={{
          top: "30px",
          left: "30px",
          fontSize: "40px",
          fontFamily: "Now",
        }}
      >
        <p className="font-semibold">Mattered</p>
        <span className="text-2xl font-light">A 3D ANIMATION & UIUX, DEVELOP AND BRANDING</span>
      </div>
  
      {/* Main gallery container aligned next to the text */}
      <div className="relative">
      <div
  className={`w-full overflow-hidden ${
    isTransitioning ? 'opacity-0' : 'opacity-100'
  } transition-opacity duration-300`}
  style={{
    height: activeView === 'explore' ? '700px' : '600px'
  }}
>

          {/* Explore View */}
          {activeView === 'explore' && (
            <div
              ref={scrollRef}
              className=" h-full overflow-x-auto cursor-grab overflow-y-hidden hide-scrollbar"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="relative w-[2000px] hide-scrollbar scrollbar-none" style={{ height: "100%" }}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="absolute transition-all duration-300 transform hover:scale-110 hover:z-10"
                    style={{
                      top: image.explorePosition.top,
                      left: image.explorePosition.left,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className=" shadow-lg transition-all duration-300 hover:shadow-xl"
                      style={{
                        width: image.explorePosition.width,
                        height: image.explorePosition.height,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-14 left-0 right-0 flex justify-center">
                <div className="text-sm text-gray-500 bg-white bg-opacity-70 px-3 rounded-full">
                  ← Drag to scroll →
                </div>
              </div>
            </div>
          )}
  
          {/* Gallery View */}
          {activeView === 'gallery' && (
            <div
              ref={scrollRef}
              className="w-full h-full overflow-x-auto overflow-y-hidden flex items-center mt-14"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="flex gap-4 px-4 min-w-max">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      style={{ width: "300px", height: "400px", objectFit: "cover" }}
                      className=" shadow-lg transition-all duration-300 hover:shadow-xl"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-14 left-0 right-0 flex justify-center">
                <div className="text-sm text-gray-500 bg-white bg-opacity-70 px-3  rounded-full">
                  ← Drag to scroll →
                </div>
              </div>
            </div>
          )}
        </div>
  
        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => toggleView('explore')}
            className={`justify-center items-center gap-2 flex px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              activeView === 'explore'
                ? 'bg-gray-200'
                : 'hover:bg-gray-300'
            }`}
          >
            <CircleDot size={18}/>
            Explore
          </button>
          <button
            onClick={() => toggleView('gallery')}
            className={`justify-center items-center gap-2 flex px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeView === 'gallery'
                ? 'bg-gray-200'
                : 'hover:bg-gray-300'
            }`}
          >
            <CirclePause size={18}/>
            Gallery
          </button>
        </div>

        <div className='ml-4 mt-6 flex justify-center items-center gap-2 flex px-4 py-2 rounded-full' onClick={()=> navigate('/all-work')}>
          <button className='flex justify-center items-center gap-2 flex px-4 py-2  bg-black rounded-full text-white' style={{fontFamily: "Now"}} >
            All Work 
            <ArrowRight size={18}/>
          </button>
        </div>
      </div>
    </div>
  );
  
}