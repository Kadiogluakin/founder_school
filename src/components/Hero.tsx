import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="bg-white text-black py-16 md:py-24 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <Image 
              src="/images/logos/FounderSchoolLogo.png" 
              alt="Founder School Logo" 
              width={450}
              height={281}
              priority
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-title">
            <span className="text-black">From <span className="text-blue">Idea</span> to <span className="text-yellow">Execution</span></span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-800 max-w-3xl mx-auto">
            Join our next cohort! A 2-month equity-free program for early-stage founders launching innovative solutions with cutting-edge tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLScmefH0ISkSfCdQ-0JUnp35oaP4sVoqrDjylNGcFv0i8YtPYA/viewform"
              className="bg-blue text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-dark transition duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply for Cohort 2
            </Link>
            <Link 
              href="/program"
              className="bg-transparent border border-blue text-blue px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue/10 transition duration-200 ease-in-out"
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