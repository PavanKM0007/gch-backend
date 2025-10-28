import React from "react";

const ExpertSewage = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {}
        <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] text-center mb-8 md:mb-12">
          Expert Sewage Treatment Plant Services in India
        </h4>

        {}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/w1.png"
              alt="Sewage Treatment Plant Diagram"
              className="w-full max-w-lg lg:max-w-xl rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>

          {}
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-justify text-[#333333]">
              Sewage Treatment Plant or simply called STP, plays a crucial role
              in houses, offices, industries and other public places. Biological
              wastewater consists of micro-organisms, suspended solids,
              dissolved chemicals, etc. that are harmful to the public. To stay healthy and comfortable, we need Sewage Treatment Plants
              with proper maintenance at regular intervals. 
            </p>
            <p className="text-base md:text-lg leading-relaxed text-justify text-[#333333]">
              GreenCarbonHub
              provides services like installation, maintenance, and repair.
              Whether it is a housing society or industry, our experts provide
              end-to-end solutions in Sewage Wastewater Treatment. Contact us
              today to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSewage;
