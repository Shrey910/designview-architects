import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-[#303F57] py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-4">
              <img src="/dwlogo.png" alt="Designview Logo" className="h-12 w-auto mr-3" />
              <h3 className="text-xl font-serif font-bold">DESIGNVIEW ARCHITECTS</h3>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="mailto:designview73@yahoo.com" className="hover:text-accent-300 transition-colors flex items-center gap-2 text-[#303F57]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                              </svg>
                              designview73@yahoo.com</Link></li>
              <li><Link href="tel:+919825254324" className="hover:text-accent-300 transition-colors flex items-center gap-2 text-[#303F57]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>
                              +91 9825254324</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Follow</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-accent-300 transition-colors text-[#303F57] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#303F57]/20 mt-12 pt-8 text-center text-[#303F57]/60 text-sm">
          <p>© {new Date().getFullYear()} Designview Architects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}