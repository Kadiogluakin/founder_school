import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <Image 
              src="/images/logos/crecimiento-black.png" 
              alt="Crecimiento Logo" 
              width={300} 
              height={75}
              className="h-20 w-auto"
            />
            <p className="text-gray-600 mt-3 text-sm max-w-xs">
              Transforming Argentina into the Crypto Capital of the world.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <h4 className="text-black font-semibold mb-4">Program</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#program" className="text-gray-600 hover:text-blue transition">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="#benefits" className="text-gray-600 hover:text-blue transition">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="#focus" className="text-gray-600 hover:text-blue transition">
                    Focus Areas
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-black font-semibold mb-4">Apply</h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="https://docs.google.com/forms/d/1tPyZAij_VM-hV67P4J5rw7LLSuXa2-rR2tYP77XiMGw/viewform?edit_requested=true" 
                    className="text-gray-600 hover:text-yellow transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Application Form
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-black font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="https://www.crecimiento.build" 
                    className="text-gray-600 hover:text-blue transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Crecimiento
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-black font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com/crecimientoar" 
                  className="text-gray-600 hover:text-blue transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Founder School by Crecimiento. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 