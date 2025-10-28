import React, { useEffect, useState } from "react";

const solutions = [
  {
    id: 1,
    name: "Standard",
    image: "/standard.jpeg",
    description: "Mounting Dimensions - Back Leg 3 Feet and Front Leg 2 Feet"
  },
  {
    id: 2,
    name: "Elevated Structure",
    image: "/Elevated.jpeg",
    description: "Mounting Dimensions - Back Leg 7 Feet and Front Leg 6 Feet"
  },
  {
    id: 3,
    name: "High-Rise Structure",
    image: "/Highrise.jpeg",
    description: "Mounting Dimensions - Back Leg 10 Feet and Front Leg 9 Feet"
  },
  {
    id: 4,
    name: "Car Port",
    image: "/Carport.jpeg",
    description: "Solar car port structure"
  },
  {
    id: 5,
    name: "Shed Mounted",
    image: "/shed.webp",
    description: "Shed mounted solar panels"
  }
];

export default function RooftopSolutions() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSolution, setActiveSolution] = useState(solutions[0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`w-full bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-[100px] pb-12 sm:pb-16 md:pb-20 lg:pb-[70px] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {}
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        {}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-bold text-[#111827]">
            Our rooftop solutions
          </h2>
        </div>

        {}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
          {}
          <div className="w-full lg:w-[400px] order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-[15px]">
              {solutions.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveSolution(solution)}
                  className={`w-full pt-3 pb-4 sm:pt-4 sm:pb-5 px-3 sm:px-4 text-left text-sm sm:text-base md:text-lg lg:text-[18px] font-bold transition-all duration-200 shadow-[0px_2px_10px_0px_rgba(3,4,28,0.06)] ${
                    activeSolution.id === solution.id
                      ? 'bg-[#3A954F] text-white'
                      : 'bg-white text-[#828282] hover:bg-gray-50'
                  }`}
                  style={{ borderRadius: '10px' }}
                >
                  {solution.name}
                </button>
              ))}
            </div>
          </div>

          {}
          <div className="w-full lg:w-[800px] relative mb-6 lg:mb-[30px] order-1 lg:order-2">
            <div className="relative">
              <img
                src={activeSolution.image}
                alt={activeSolution.name}
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
              />
              
              {}
              <div 
                className="absolute bottom-0 left-0 w-full h-full rounded-lg"
                style={{
                  background: 'linear-gradient(180deg, rgba(31, 34, 32, 0) 30.39%, rgba(31, 34, 32, 0.8) 73.54%)'
                }}
              ></div>
            </div>
            
            {}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-3 sm:left-4 text-white p-3 sm:p-4 rounded-lg">
              <h3 className="text-base sm:text-lg font-bold mb-1">{activeSolution.name}</h3>
              <p className="text-xs sm:text-sm leading-relaxed">{activeSolution.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
