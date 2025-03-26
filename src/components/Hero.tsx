import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="bg-white text-black py-20 md:py-32 relative border-b border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-title">
            <span className="text-black">From <span className="text-blue/80">Idea</span> to <span className="text-yellow/90">Execution</span></span>
          </h1>
          <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-3xl mx-auto">
            A 2-month equity-free program designed to help early-stage founders and aspiring entrepreneurs 
            launch innovative solutions leveraging cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="https://docs.google.com/forms/d/1tPyZAij_VM-hV67P4J5rw7LLSuXa2-rR2tYP77XiMGw/viewform?edit_requested=true"
              className="bg-blue text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow hover:text-black transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </Link>
            <Link 
              href="#program"
              className="bg-transparent border border-gray-300 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 