import React from 'react';
import Link from 'next/link';

const CTA: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50 border-b border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">Ready to Build the Future?</h2>
          <div className="w-16 h-1 mx-auto mb-6 bg-black"></div>
          <p className="text-lg md:text-xl text-gray-700 mb-10">
            Apply now to join the first Founder School x Crecimiento cohort and work with Crecimiento's Movement, 
            Protocol Labs, and various partners to pioneer the next generation of technology.
          </p>
          <Link 
            href="https://docs.google.com/forms/d/1tPyZAij_VM-hV67P4J5rw7LLSuXa2-rR2tYP77XiMGw/viewform?edit_requested=true"
            className="bg-blue text-white px-10 py-4 rounded-full text-lg font-semibold inline-block hover:bg-yellow hover:text-black transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA; 