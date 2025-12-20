'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px threshold
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 bg-black bg-opacity-30 backdrop-blur-sm py-5 shadow-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 md:px-10 flex justify-between items-center">
        {/* Left navigation items - hidden on mobile */}
        <div className="hidden md:flex md:flex-1 md:justify-end md:space-x-12">
          <Link 
            href="/projects" 
            className={`text-base uppercase tracking-wider text-white ${pathname === '/projects' ? 'font-medium text-[#CA6B32]' : 'font-light hover:text-[#CA6B32]'}`}
          >
            Projects
          </Link>
          <Link 
            href="/services" 
            className={`text-base uppercase tracking-wider text-white ${pathname === '/services' ? 'font-medium text-[#CA6B32]' : 'font-light hover:text-[#CA6B32]'}`}
          >
            Services
          </Link>
        </div>
        
        {/* Logo - centered at top level */}
        <Link href="/" className="flex items-center space-x-3 mx-6">
          <img src="/dwlogo.png" alt="Designview Logo" className="h-10 w-auto" />
          <span className="text-xl font-serif font-bold text-white hidden md:block">DESIGNVIEW ARCHITECTS</span>
        </Link>
        
        {/* Right navigation items - hidden on mobile */}
        <div className="hidden md:flex md:flex-1 md:justify-start md:space-x-12">
          <Link 
            href="/about" 
            className={`text-base uppercase tracking-wider text-white ${pathname === '/about' ? 'font-medium text-[#CA6B32]' : 'font-light hover:text-[#CA6B32]'}`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`text-base uppercase tracking-wider text-white ${pathname === '/contact' ? 'font-medium text-[#CA6B32]' : 'font-light hover:text-[#CA6B32]'}`}
          >
            Contact
          </Link>
        </div>
        
        {/* Mobile hamburger menu */}
        <button 
          className="md:hidden hamburger-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mobile-menu bg-white backdrop-blur-sm py-6 px-8 absolute top-full left-0 right-0 shadow-lg">
          <div className="flex flex-col space-y-5">
            <Link 
              href="/projects" 
              className={`text-base uppercase tracking-wider py-3 ${pathname === '/projects' ? 'font-medium text-[#CA6B32]' : 'font-light text-gray-800 hover:text-[#CA6B32]'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/services" 
              className={`text-base uppercase tracking-wider py-3 ${pathname === '/services' ? 'font-medium text-[#CA6B32]' : 'font-light text-gray-800 hover:text-[#CA6B32]'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={`text-base uppercase tracking-wider py-3 ${pathname === '/about' ? 'font-medium text-[#CA6B32]' : 'font-light text-gray-800 hover:text-[#CA6B32]'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`text-base uppercase tracking-wider py-3 ${pathname === '/contact' ? 'font-medium text-[#CA6B32]' : 'font-light text-gray-800 hover:text-[#CA6B32]'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}