import React, { useEffect, useState } from "react";

const components = [
  {
    id: 1,
    name: "Mono Crystalline",
    image: "/mono-crystalline.jpg",
    description: "High-efficiency solar panels with superior performance"
  },
  {
    id: 2,
    name: "String Inverter",
    image: "/string-inverter.jpg", 
    description: "Advanced power conversion technology"
  },
  {
    id: 3,
    name: "Mounting Structure",
    image: "/mounting-structure.jpg",
    description: "Durable and weather-resistant mounting solutions"
  }
];

export default function Components() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className={`w-full bg-white pt-[100px] pb-[70px] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {}
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        {}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#111827]">
            Components
          </h2>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {components.map((component) => (
            <div 
              key={component.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm lg:max-w-md"
            >
              {}
              <div className="w-full h-64 md:h-80">
                <img
                  src={component.image}
                  alt={component.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {}
              <div className="flex items-center justify-center p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-[#1F2220] text-center">
                  {component.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
