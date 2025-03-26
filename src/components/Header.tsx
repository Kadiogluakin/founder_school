import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 shadow-sm border-b border-black">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/images/logos/crecimiento-black.png" 
            alt="Crecimiento Logo" 
            width={240} 
            height={64}
            className="h-16 w-auto"
            priority
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#program" className="text-black hover:text-blue transition">
            Program
          </Link>
          <Link href="#benefits" className="text-black hover:text-blue transition">
            Benefits
          </Link>
          <Link href="#focus" className="text-black hover:text-blue transition">
            Focus Areas
          </Link>
          <Link 
            href="https://docs.google.com/forms/d/1tPyZAij_VM-hV67P4J5rw7LLSuXa2-rR2tYP77XiMGw/viewform?edit_requested=true" 
            className="bg-blue text-white px-6 py-2 rounded-full hover:bg-yellow hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button className="text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 