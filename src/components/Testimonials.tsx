import React from 'react';

const testimonials = [
  {
    quote: 'As founders, we have many talents but also many gaps. Founder School helped us to bring our project down to earth. Having personalized and modular feedback was super valuable to us',
    name: 'Tomas Cordero',
    title: 'Co-founder of Bu Finance',
  },
  {
    quote: 'Everything I\'ve done as a founder has been self-taught, so this is the first time I\'m seeing all this content, and it\'s helping me form new and important ideas for entrepreneurship.',
    name: 'Federico Filippello',
    title: 'Serial founder and co-founder of bAIbysitter',
  },
  {
    quote: 'We are particularly impressed by the high level of quality and depth of discussion in our Friday sessions. The meetings with other founders and their stories are very inspiring to us,',
    name: 'Mariano Lerner',
    title: 'Co-founder of memewizard',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-title text-gray-800">Founder Feedback</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Hear directly from founders who have gone through the program.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col">
              <svg className="w-10 h-10 text-blue mb-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.68.865-.32V3q-.867.113-1.7.274t-1.6.389q-.78.233-1.35.554t-.98.748q-.45.49-.704.997t-.354 1.107-.118 1.222q0 .78.036 1.446.037.666.09 1.197h1.376A1 1 0 0 0 12 12m-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992t.559-.68.865-.32V3q-.867.113-1.7.274t-1.6.389q-.78.233-1.35.554t-.98.748q-.45.49-.704.997t-.354 1.107-.118 1.222q0 .78.035 1.446.037.666.09 1.197h1.376A1 1 0 0 0 6 12"/>
              </svg>
              <blockquote className="text-gray-600 mb-5 flex-grow text-base italic">
                {testimonial.quote}
              </blockquote>
              <div className="mt-auto border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 