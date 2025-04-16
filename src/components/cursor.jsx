import React, { useEffect, useState } from 'react';
import AnimatedCompanyEntrance from './AnimatedEntrance';

function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Handle cursor tracking and hover detection
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if the element or its parent has cursor-pointer style
      const el = e.target;
      const hasPointer = window.getComputedStyle(el).cursor === 'pointer' || 
                         el.closest('[style*="cursor: pointer"]') || 
                         el.closest('a, button') || 
                         el.closest('.cursor-pointer');
      
      setIsHovering(hasPointer);
    };
    
    // Create a style element to hide cursor on all elements
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleElement);
    
    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div>
      {/* Custom cursor - changes based on hover state */}
      {isHovering ? (
        // Dot in circle cursor for clickable elements
        <div 
          className="fixed flex items-center justify-center rounded-full border-2 border-black pointer-events-none z-50 w-6 h-6"
          style={{
            transform: `translate(${cursorPosition.x - 24}px, ${cursorPosition.y - 24}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="bg-black w-1 h-1 rounded-full"></div>
        </div>
      ) : (
        // VIEW text in grey background for default cursor
        <div 
          className="fixed flex items-center justify-center rounded-full bg-gray-300 text-black font-medium text-sm pointer-events-none z-50 w-20 h-20"
          style={{
            transform: `translate(${cursorPosition.x - 40}px, ${cursorPosition.y - 40}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          VIEW
        </div>
      )}
      <AnimatedCompanyEntrance/>
    </div>
  );
}

export default Cursor;