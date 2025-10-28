import React, { useEffect, useState } from "react";

export default function WhatWeDoHousingSociety() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Rooftop Solar Panel Layout Design For Housing Society",
      description: "Whether it may be big or small, whatever size is your Housing Society, we visit your location and provide a perfect rooftop Solar panel layout design that is best in Hyderabad.",
      isActive: true
    },
    {
      id: 2,
      title: "Rooftop Solar Panel Installation For Housing Society",
      description: "Once designing of layout is completed, our team of Solar System installers guides you in each and every step of the product selection. Further, we install the whole solar system without any flaws.",
      isActive: false
    },
    {
      id: 3,
      title: "Rooftop Solar Commissioning For Housing Society",
      description: "Solar Commissioning for Housing Society helps you to ensure the rooftop solar system installed correctly. Our team of expert solar technicians visit your space & confirms your solar system.",
      isActive: false
    }
  ];

  return (
    <section className={`w-full bg-white pt-[100px] pb-[70px] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {}
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        {}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#111827] text-center">
            What We Do?
          </h2>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 bg-white text-[#111827] border border-gray-200 hover:bg-[#3A954F] hover:text-white cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-[16px] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
