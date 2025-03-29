import React from 'react';

// Removed Placeholder Icon definition

const Benefits: React.FC = () => {
  const benefitsList = [
    {
      title: 'Cohort-Based Programming',
      description: 'Structured group learning covering MVP development, go-to-market, legal, and fundraising.',
      color: 'blue'
    },
    {
      title: 'Live Sessions with Experts',
      description: 'Engage with seasoned founders and investors to shorten your learning curve.',
      color: 'yellow'
    },
    {
      title: 'Networking Perks',
      description: 'Access valuable connections within the Crecimiento Movement ecosystem.',
      color: 'blue'
    },
    {
      title: 'No Cost, No Equity',
      description: 'Participate for free without giving up equity. We focus on your success.',
      color: 'yellow'
    },
    {
      title: 'Partner Network',
      description: 'Collaborate with Crecimiento, Protocol Labs, and other partners in cutting-edge tech.',
      color: 'blue'
    },
    {
      title: 'Community Support',
      description: 'Join a supportive community of innovative founders for feedback and collaboration.',
      color: 'yellow'
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-24 bg-white border-t border-b border-gray-200"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-title text-gray-800">Program Benefits</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Accelerate your startup journey with these exclusive advantages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsList.map((benefit, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300 flex flex-col ${benefit.color === 'blue' ? 'border-t-4 border-blue' : 'border-t-4 border-yellow'}`}
            >
              {/* Removed Icon container */}
              <h3 className="text-lg font-semibold mb-2 pt-2 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 