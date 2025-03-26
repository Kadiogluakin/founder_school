import React from 'react';

const Program: React.FC = () => {
  return (
    <section id="program" className="py-16 md:py-24 bg-gray-50 border-b border-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">The Program</h2>
          <div className="w-16 h-1 mx-auto mb-6 bg-black"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Founder School is a 2-month intensive program designed to accelerate your entrepreneurial journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue/50">
            <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Equity-Free</h3>
            <p className="text-gray-600">
              Participants do not give up equity in their startups. We're here to help you grow without taking a piece of your company.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-yellow/50">
            <div className="w-12 h-12 bg-yellow/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">2-Month Duration</h3>
            <p className="text-gray-600">
              An intensive program designed to help you move quickly from idea to execution with structured learning and mentorship.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue/50">
            <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Cohort-Based</h3>
            <p className="text-gray-600">
              Learn alongside a community of like-minded founders, sharing insights and building valuable connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program; 