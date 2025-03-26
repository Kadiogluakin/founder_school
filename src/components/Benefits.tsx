import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white border-b border-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">Program Benefits</h2>
          <div className="w-16 h-1 mx-auto mb-6 bg-black"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Join Founder School and accelerate your startup journey with these exclusive benefits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue/50">
            <h3 className="text-xl font-bold mb-4 text-black border-b border-blue/20 pb-2">Cohort-Based Programming</h3>
            <p className="text-gray-600">
              Structured group learning with education on product MVP development, go-to-market strategy, 
              legal considerations, and fundraising tailored to help you build and monetize your products.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-yellow/50">
            <h3 className="text-xl font-bold mb-4 text-black border-b border-yellow/20 pb-2">Live Sessions with Experts</h3>
            <p className="text-gray-600">
              Participate in live spaces with seasoned founders and investors sharing their experiences
              to reduce your learning curve and get answers to your most pressing questions.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue/50">
            <h3 className="text-xl font-bold mb-4 text-black border-b border-blue/20 pb-2">Networking Perks</h3>
            <p className="text-gray-600">
              Access valuable networking opportunities and connections within the Crecimiento Movement,
              helping you build relationships that can take your startup to the next level.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-yellow/50">
            <h3 className="text-xl font-bold mb-4 text-black border-b border-yellow/20 pb-2">No Cost, No Commitment</h3>
            <p className="text-gray-600">
              There is no cost to participate and no investment commitment at the end of Founder School.
              We're focused on helping you succeed on your own terms.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue/50">
            <h3 className="text-xl font-bold mb-4 text-black border-b border-blue/20 pb-2">Partner Network</h3>
            <p className="text-gray-600">
              Work with Crecimiento's Movement, Protocol Labs, and various partners to create significant
              financial prosperity through pioneering new technologies.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-yellow/50">
            <h3 className="text-xl font-bold mb-4 text-black border-b border-yellow/20 pb-2">Community Support</h3>
            <p className="text-gray-600">
              Join a community of like-minded founders who are also building innovative solutions,
              providing you with support, feedback, and collaboration opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 