import React from "react";

const benefits = [
  "Purifies your Wastewater by removing contaminants & harmful substances.",
  "As the purified wastewater is released into water bodies, the aquatic ecosystem will be preserved.",
  "It even prevents Soil, underground water table contamination.",
  "The treated sewage wastewater can be reused for several purposes like cleaning, flushing, etc. in domestic and industrial spaces.",
  "Treating the industrial wastewater before releasing into the atmosphere will reduce the Greenhouse Gas Emissions also."
];

const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4 md:mb-6">
          Benefits of Effluent/Sewage Treatment Plant
        </h2>
        <p className="text-lg md:text-xl font-semibold text-center text-gray-600 mb-8 md:mb-12">
          Benefits of Effluent/Sewage Treatment Plants are many, they are
        </p>

        {}
        <ul className="space-y-4 md:space-y-6">
          {benefits.map((text, i) => (
            <li key={i}>
              <div
                className="
                  flex items-start
                  w-full
                  bg-white border border-gray-300
                  rounded-lg shadow-sm
                  p-4 md:p-6
                  hover:shadow-md transition
                "
              >
                {}
                <span className="mr-3 md:mr-4 text-blue-600 flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 md:w-6 md:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 10h7l-3 3 3 3h-7" />
                    <path d="M3 12h10" />
                    <path d="M3 12a4 4 0 0 1 4-4h3" />
                  </svg>
                </span>

                {}
                <p className="text-sm md:text-base leading-relaxed text-gray-800 m-0">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BenefitsSection;
