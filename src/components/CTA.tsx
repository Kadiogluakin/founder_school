import React from 'react';
import Link from 'next/link';

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-title text-gray-800">Ready to Build the Future?</h2>
          <div className="w-16 h-1 mx-auto mb-6 bg-black"></div>
          <p className="text-lg md:text-xl text-gray-500 mb-8">
            Applications for Founder School Cohort 2 are open! Join world-class partners and mentors to pioneer the next generation of technology.
          </p>
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLScmefH0ISkSfCdQ-0JUnp35oaP4sVoqrDjylNGcFv0i8YtPYA/viewform"
            className="bg-blue text-white px-10 py-4 rounded-full text-lg font-semibold inline-block hover:bg-blue-dark transition duration-200 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply for Cohort 2
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA; 