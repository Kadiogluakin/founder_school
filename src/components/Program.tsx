import React from 'react';
import Link from 'next/link';

const Program: React.FC = () => {
  return (
    <section id="program" className="py-16 md:py-24 bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 font-title text-black">The Program</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            An intensive, equity-free 2-month program to accelerate your entrepreneurial journey from idea to execution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue/10 text-blue rounded-lg flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Equity-Free</h3>
            <p className="text-gray-500">
              Focus on building your vision. We support your growth without taking any equity in your company.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
             <div className="w-12 h-12 bg-yellow/10 text-yellow rounded-lg flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">2-Month Intensive</h3>
            <p className="text-gray-500">
              Fast-paced curriculum and hands-on mentorship designed to rapidly advance your startup.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue/10 text-blue rounded-lg flex items-center justify-center mb-5">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Cohort Community</h3>
            <p className="text-gray-500">
              Learn and grow alongside a curated group of ambitious founders, building valuable connections.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/program"
            className="inline-block bg-transparent border border-blue text-blue px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue hover:text-white transition duration-200 ease-in-out"
          >
            Explore Full Program Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Program; 