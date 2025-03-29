import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 shadow-sm border-b border-gray-200 relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logos/crecimiento-black.png" 
            alt="Crecimiento Logo - Home" 
            width={240} 
            height={64}
            className="h-16 w-auto"
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/program" className="text-black hover:text-blue transition">
            Program
          </Link>
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLScmefH0ISkSfCdQ-0JUnp35oaP4sVoqrDjylNGcFv0i8YtPYA/viewform" 
            className="bg-blue text-white px-6 py-2 rounded-full hover:bg-yellow hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply for Cohort 2
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button 
            className="text-black focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-black hover:text-blue transition block px-2 py-1 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/program" className="text-black hover:text-blue transition block px-2 py-1 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Program
            </Link>
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLScmefH0ISkSfCdQ-0JUnp35oaP4sVoqrDjylNGcFv0i8YtPYA/viewform" 
              className="bg-blue text-white px-6 py-2 rounded-full hover:bg-yellow hover:text-black transition block text-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply for Cohort 2
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 