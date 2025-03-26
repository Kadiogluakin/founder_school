import React from 'react';

const FocusAreas: React.FC = () => {
  const areas = [
    {
      title: 'Emerging Technologies',
      description: 'Explore the latest innovations and how they can transform industries and create new opportunities.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'yellow',
    },
    {
      title: 'Blockchain',
      description: 'Learn how distributed ledger technology can create new business models and solve complex problems.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'blue',
    },
    {
      title: 'Crypto',
      description: 'Discover how cryptocurrency and tokenization are reshaping finance and creating new economic models.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'yellow',
    },
    {
      title: 'Artificial Intelligence',
      description: 'Harness the power of AI to build smarter products, automate processes, and create transformative user experiences.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'blue',
    },
  ];

  return (
    <section id="focus" className="py-16 md:py-24 bg-gray-50 border-b border-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">Focus Areas</h2>
          <div className="w-16 h-1 mx-auto mb-6 bg-black"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Founder School helps you build innovative solutions leveraging cutting-edge technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border"
              style={{
                borderColor: area.color === 'blue' ? 'rgba(20, 208, 234, 0.5)' : 'rgba(255, 218, 62, 0.5)'
              }}
            >
              <div className="flex items-center mb-6">
                {area.icon}
                <h3 
                  className="text-2xl font-bold ml-4 text-black pb-2 border-b"
                  style={{ borderColor: area.color === 'blue' ? 'rgba(20, 208, 234, 0.2)' : 'rgba(255, 218, 62, 0.2)' }}
                >
                  {area.title}
                </h3>
              </div>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas; 