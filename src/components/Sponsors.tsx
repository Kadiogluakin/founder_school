import React from 'react';
import Image from 'next/image';

const sponsors = [
  { id: 1, name: 'Filecoin Foundation', logo: '/images/logos/sponsors/sponsor-1.jpeg' },
  { id: 2, name: 'Protocol Labs', logo: '/images/logos/sponsors/sponsor-2.jpeg' },
  { id: 3, name: 'Crecimiento', logo: '/images/logos/sponsors/sponsor-3.jpeg' }, // Assuming Crecimiento is also a key partner/sponsor
];

const Sponsors: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-200"> {/* Changed bg, added top border */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold font-title text-gray-500 mb-10">Supported By</h2> {/* Updated styling */}
        <div className="flex justify-center items-center flex-wrap gap-x-10 gap-y-6 md:gap-x-16"> {/* Adjusted gaps */}
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="transition duration-300 ease-in-out">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                width={150}
                height={60} // Adjusted height for better aspect ratio consistency
                style={{ objectFit: "contain" }} // Use style prop for objectFit
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors; 