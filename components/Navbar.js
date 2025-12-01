'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

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
          <div className="relative h-10 w-10">
            <Image 
              src="/dwlogo.png" 
              alt="Designview Logo" 
              fill
              className="object-contain"
            />
          </div>
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
      </div>
    </nav>
  );
}