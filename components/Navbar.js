'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-30 backdrop-blur-sm py-6 shadow-sm">
      <div className="container mx-auto px-6 md:px-12 flex justify-center items-center space-x-10">
        <div className="hidden md:flex space-x-10">
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
        
        <Link href="/" className="flex items-center space-x-3 mx-8">
          <img src="/dwlogo.png" alt="Designview Logo" className="h-10 w-auto" />
          <span className="text-xl font-serif font-bold text-white">DESIGNVIEW ARCHITECTS</span>
        </Link>
        
        <div className="hidden md:flex space-x-10">
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
        
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}