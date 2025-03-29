import React from 'react';

// Define the Icon components directly for clarity
const EmergingTechIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);
const BlockchainIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);
const CryptoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const AIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const FocusAreas: React.FC = () => {
  const areas = [
    {
      title: 'Emerging Technologies',
      description: 'Exploring innovations like ZK, DePIN, and decentralized social media to transform industries.',
      Icon: EmergingTechIcon,
      color: 'yellow',
    },
    {
      title: 'Blockchain Infrastructure',
      description: 'Building the foundational layers for decentralized applications and systems.',
      Icon: BlockchainIcon,
      color: 'blue',
    },
    {
      title: 'Crypto & Tokenization',
      description: 'Developing new economic models and financial instruments using digital assets.',
      Icon: CryptoIcon,
      color: 'yellow',
    },
    {
      title: 'Applied Artificial Intelligence',
      description: 'Harnessing AI to build smarter products, automate processes, and create value.',
      Icon: AIIcon,
      color: 'blue',
    },
  ];

  return (
    <section id="focus" className="py-16 md:py-24 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-title text-gray-800">Focus Areas</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            We help founders build innovative solutions leveraging these cutting-edge technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className={`bg-gray-100 p-6 rounded-lg border hover:shadow-md transition-shadow duration-300 flex flex-col ${area.color === 'blue' ? 'border-blue/20' : 'border-yellow/30'}`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${area.color === 'blue' ? 'bg-blue/10 text-blue' : 'bg-yellow/10 text-yellow-dark'}`}>
                <area.Icon />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{area.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas; 