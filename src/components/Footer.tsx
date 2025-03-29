import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 border-t border-gray-200">
      <div className="container mx-auto px-3 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          <div className="md:col-span-1 lg:col-span-2 mb-6 md:mb-0">
            <Link href="/">
              <Image 
                src="/images/logos/crecimiento-black.png" 
                alt="Crecimiento Logo - Home"
                width={200}
                height={50}
                className="h-12 w-auto mb-3"
              />
            </Link>
            <p className="text-gray-500 text-sm max-w-xs">
              Transforming Argentina into the Crypto Capital of the world.
            </p>
          </div>
          
          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Program</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/program" className="text-sm text-gray-600 hover:text-blue transition">
                    Overview
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Apply</h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScmefH0ISkSfCdQ-0JUnp35oaP4sVoqrDjylNGcFv0i8YtPYA/viewform" 
                    className="text-sm text-gray-600 hover:text-blue transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cohort 2 Application
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Connect</h4>
              <ul className="space-y-2">
                 <li>
                  <a 
                    href="https://twitter.com/crecimientoar" 
                    className="text-sm text-gray-600 hover:text-blue transition flex items-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                 </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Founder School by Crecimiento. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 