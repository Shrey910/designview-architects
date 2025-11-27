'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const trailingRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
    };

    const animateCursor = () => {
      if (!cursor) return;
      
      // Apply easing to create smooth delayed effect
      trailingRef.current.x += (positionRef.current.x - trailingRef.current.x) / 10;
      trailingRef.current.y += (positionRef.current.y - trailingRef.current.y) / 10;
      
      cursor.style.transform = `translate3d(${trailingRef.current.x - 5}px, ${trailingRef.current.y - 5}px, 0)`;
      
      requestAnimationFrame(animateCursor);
    };

    // Initialize trailing position
    trailingRef.current.x = positionRef.current.x;
    trailingRef.current.y = positionRef.current.y;
    
    window.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white bg-opacity-100 pointer-events-none z-[100] mix-blend-difference transition-transform duration-100 ease-out"
      style={{ transform: 'translate3d(0, 0, 0)' }}
    />
  );
}