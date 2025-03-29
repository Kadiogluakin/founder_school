import React, { useState } from 'react';

const modules = [
  {
    title: 'How to Start a Startup and What It Means to Be a Founder',
    description: 'Fundamentals of launching a startup, focusing on mindset, motivations, and responsibilities. Learn startup differences, success pillars, and entrepreneurship pros/cons.',
  },
  {
    title: 'Value Prop, Pricing & Market Size Validation',
    description: 'Define a clear value proposition, understand target customers, and validate market size. Craft a pricing strategy reflecting value and supporting a scalable model.',
  },
  {
    title: 'Building a Strong MVP (Minimum Viable Product)',
    description: 'Create an MVP to test and validate your idea. Prioritize features, gather user feedback, and iterate based on insights to solve real problems.',
  },
  {
    title: 'Go-to-Market & Product Market Fit',
    description: 'Craft a go-to-market strategy and achieve product-market fit. Position your product, define customer journey, and measure metrics for iteration.',
  },
  {
    title: 'Initial Growth-flywheel & Team',
    description: 'Build a sustainable growth flywheel while reducing friction. Emphasizes hiring the right team and cultivating a supportive culture for rapid growth.',
  },
  {
    title: 'Practical Understanding of Legal',
    description: 'Basics of building a strong legal foundation while focusing on team dynamics. Identify key roles, develop leadership, and foster collaborative culture.',
  },
  {
    title: 'Fundraising Essentials',
    description: 'Master fundraising: investor needs, compelling pitch decks, and relationship building. Treat fundraising as a structured sales process to secure capital.',
  },
];

// Accordion Item Component
interface AccordionItemProps {
  module: { title: string; description: string };
  index: number;
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ module, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;
  const moduleNumber = String(index + 1).padStart(2, '0');
  const isBlue = index % 2 === 0; // Alternate color for visual cue
  const headerBg = isOpen ? (isBlue ? 'bg-blue/10' : 'bg-yellow/10') : 'bg-white';
  const numberColor = isBlue ? 'text-blue' : 'text-yellow-dark';

  const toggleOpen = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      {/* Header */}
      <button
        onClick={toggleOpen}
        className={`w-full flex justify-between items-center text-left p-4 md:p-6 transition-colors duration-200 ${headerBg} hover:bg-gray-50`}
      >
        <div className="flex items-center gap-4">
          <span className={`text-xl font-semibold ${numberColor}`}>{moduleNumber}</span>
          <h3 className="text-md md:text-lg font-semibold text-gray-800">{module.title}</h3>
        </div>
        {/* Chevron Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Content Panel */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-4 md:p-6 pt-0 text-gray-600 text-sm">
          {module.description}
        </div>
      </div>
    </div>
  );
};

// Main ProgramDetails Component
const ProgramDetails: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Start with the first item open

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-200"> {/* Section bg changed to white */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-title text-gray-800">Program Structure</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Our 2-month program is structured around key modules. Click to expand and learn more about each one.
          </p>
        </div>
        
        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          {modules.map((module, index) => (
            <AccordionItem 
              key={index} 
              module={module} 
              index={index} 
              openIndex={openIndex} 
              setOpenIndex={setOpenIndex} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails; 