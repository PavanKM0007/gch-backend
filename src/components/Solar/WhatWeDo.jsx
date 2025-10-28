import React, { useEffect, useState } from "react";
import { Layout, Wrench, CheckCircle } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Layout className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
    title: "Residential Rooftop Solar Panel Layout Design",
    description: "Whether it may be big or medium or small, whatever be your Residential Rooftop Space is, we visit your residential location and provide a perfect rooftop solar panel layout design that best suits for your requirement."
  },
  {
    id: 2,
    icon: <Wrench className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
    title: "Residential Rooftop Solar Panel Installation",
    description: "Once designing of layout is completed, our Solar system installation team guides you in each and every step of the product selection. Further, we install the whole solar system plant and makes sure it is working properly without any flaws."
  },
  {
    id: 3,
    icon: <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
    title: "Residential Rooftop Solar Commissioning",
    description: "Solar Commissioning helps you to ensure that the residential rooftop solar system is installed correctly and safely. Our GreenCarbonHub team of expert solar technicians will visit your rooftop solar power system and make sure that it is operating perfectly."
  }
];

const ServiceCard = ({ icon, title, desc }) => (
  <article
    className="
      bg-white rounded-2xl shadow-md
      flex flex-col items-center text-center
      w-full max-w-[520px] mx-auto
      sm:max-w-[400px] md:max-w-[450px] lg:w-[379.99px] lg:h-[413.6px]
      transition-all duration-300 ease-in-out
      hover:scale-105 hover:shadow-xl hover:-translate-y-2
      hover:bg-[#3A954F]
      cursor-pointer
      group
      mb-6 sm:mb-8 lg:mb-0
    "
    style={{
      paddingTop: '40px',
      paddingRight: '30px', 
      paddingBottom: '40px',
      paddingLeft: '30px'
    }}
  >
    <div className="mb-4 bg-green-600 rounded-full p-3 group-hover:bg-orange-500 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-[16px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-bold mb-3 sm:mb-4 text-[#111827] group-hover:text-white transition-colors duration-300">
      {title}
    </h3>
    <p 
      className="text-justify text-[#828282] group-hover:text-white transition-colors duration-300"
      style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        lineHeight: '22px'
      }}
    >
      {desc}
    </p>
  </article>
);

export default function WhatWeDo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`w-full bg-[#EBF3ED] pt-12 sm:pt-16 md:pt-20 lg:pt-[100px] pb-12 sm:pb-16 md:pb-20 lg:pb-[70px] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {}
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        {}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#111827]">
            What GreenCarbonHub Does?
          </h2>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 justify-items-center">
          {services.map((service) => (
            <div key={service.id} className="w-full">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                desc={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
