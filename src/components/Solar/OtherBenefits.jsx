import React, { useEffect, useState } from "react";
import { Sun, DollarSign, Wrench, Heart, Clock, Home, Building, Car, Warehouse } from "lucide-react";

const residentialBenefits = [];

const industrialBenefits = [
  {
    id: 1,
    name: "Renewable & Clean Source Of Energy",
    icon: <Sun className="w-16 h-16 text-yellow-500" />,
    title: "Renewable & Clean Source Of Energy",
    description:
      "As Solar Energy is a clean and renewable source, you are helping the environment by reducing carbon footprint and protecting the Earth."
  },
  {
    id: 2,
    name: "Reduces Electricity Cost",
    icon: <DollarSign className="w-16 h-16 text-blue-500" />,
    title: "Solar Energy Reduces Electricity Cost",
    description:
      "Rooftop Solar Panels can generate a good amount of electricity to power your home, which helps you to save energy bills each year."
  },
  {
    id: 3,
    name: "Low Maintenance",
    icon: <Wrench className="w-16 h-16 text-green-500" />,
    title: "Low Maintenance",
    description:
      "As the solar panels are stable, they do not require any high maintenance services, which saves time and money."
  },
  {
    id: 4,
    name: "Adds Value to Life",
    icon: <Heart className="w-16 h-16 text-red-500" />,
    title: "Adds Value to Your Life",
    description:
      "Choosing the Rooftop Solar Energy adds value to your home and makes it more attractive to potential buyers."
  },
  {
    id: 5,
    name: "High Life Span",
    icon: <Heart className="w-16 h-16 text-red-500" />,
    title: "High Life Span",
    description:
      "Once you install Solar Panels, the lifespan can range from 25 to 30 years. Moreover, Solar Panels are reliable & long-term energy solutions."
  }
];

const residentialSolutions = [
  {
    id: 1,
    name: "Standard Residential",
    icon: <Home className="w-16 h-16 text-green-600" />,
    title: "Standard Residential Solar Installation",
    description: "Perfect for homes with standard roof structure - Mounting Dimensions: Back Leg 3 Feet and Front Leg 2 Feet. Ideal for most residential homes with conventional roof designs."
  },
  {
    id: 2,
    name: "Elevated Residential",
    icon: <Building className="w-16 h-16 text-blue-600" />,
    title: "Elevated Residential Solar Setup",
    description: "Ideal for homes needing elevated panels - Mounting Dimensions: Back Leg 7 Feet and Front Leg 6 Feet. Perfect for homes with specific roof angles or shading issues."
  },
  {
    id: 3,
    name: "High-Rise Residential",
    icon: <Building className="w-16 h-16 text-purple-600" />,
    title: "High-Rise Residential Solar System",
    description: "Best for multi-story homes - Mounting Dimensions: Back Leg 10 Feet and Front Leg 9 Feet. Designed for tall residential buildings and apartments."
  },
  {
    id: 4,
    name: "Residential Car Port",
    icon: <Car className="w-16 h-16 text-orange-600" />,
    title: "Solar Car Port Solution",
    description: "Solar car port structure for home parking areas. Dual-purpose solution providing shade for vehicles while generating clean energy."
  },
  {
    id: 5,
    name: "Shed Mounted Residential",
    icon: <Warehouse className="w-16 h-16 text-gray-600" />,
    title: "Shed Mounted Solar Panels",
    description: "Shed mounted solar panels for residential outbuildings. Perfect for garages, sheds, and other auxiliary structures on your property."
  }
];

const ResidentialRooftopSolutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSolution, setActiveSolution] = useState(industrialBenefits[0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`w-full bg-gray-50 pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-6 sm:pb-8 md:pb-10 lg:pb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-bold text-[#111827]">
            Other Benefits
          </h2>
          {}
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
          <div className="w-full lg:w-[400px] order-1 lg:order-1">
            <div className="space-y-3 sm:space-y-[15px]">
              {industrialBenefits.map((solution) => (
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

          <div className="w-full lg:w-[800px] relative mb-6 lg:mb-[30px] order-2 lg:order-2">
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {React.cloneElement(activeSolution.icon, {
                  className: "w-20 h-20 lg:w-24 lg:h-24"
                })}
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold text-[#111827] mb-4">
                {activeSolution.title}
              </h3>
              
              <p className="text-sm lg:text-base text-[#333333] leading-relaxed">
                {activeSolution.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function OtherBenefits({ type = "residential" }) {
  const [isVisible, setIsVisible] = useState(false);
  const benefits = type === "industrial" ? industrialBenefits : residentialBenefits;
  const [activeBenefit, setActiveBenefit] = useState(benefits[0]);

  useEffect(() => {
    setIsVisible(true);
    setActiveBenefit(benefits[0]);
  }, [type]);

  return (
    <>
      {type === "residential" && <ResidentialRooftopSolutions />}
      
      <section
        className={`w-full bg-white py-2 md:py-3 lg:py-4 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ display: 'block', width: '100%' }}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16" style={{ display: 'block', width: '100%' }}>

          <div style={{ display: 'block', width: '100%' }}>
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="w-full mb-6 bg-white rounded-lg  p-6"
                style={{ 
                  display: 'block', 
                  width: '100%', 
                  marginBottom: '24px',
                  clear: 'both'
                }}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {React.cloneElement(benefit.icon, {
                      className: "w-12 h-12 md:w-16 md:h-16"
                    })}
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-[#111827] mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-sm md:text-base text-[#333333] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
