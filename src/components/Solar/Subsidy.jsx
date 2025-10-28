import React from "react";

export default function Subsidy() {
  return (
    <section className="w-full bg-white">
      {}
      <div className="mx-auto max-w-[1440px]">
        {}
        <div className="flex flex-col lg:flex-row items-center justify-center py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 gap-8 lg:gap-0">
          {}
          <div className="w-full lg:w-auto pt-[15px] pr-[15px] pb-[15px] flex justify-center lg:justify-start">
            <img
              src="/subsidy image.jpg"
              alt="Solar Calculator"
              className="w-full max-w-[585px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
            />
          </div>

          {}
          <div className="w-full lg:w-[615px] px-[15px]">
            {}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-bold text-[#111827] mb-[10px] mt-[15px] text-center lg:text-left">
              Subsidy Structure
            </h2>

            {}
            <div className="space-y-4">
              {}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#111827] mb-3">
                  Subsidy for residential households:
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-[#333333]">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 flex-shrink-0">•</span>
                    <span>Rs. 30,000/- per kW up to 2 kW</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 flex-shrink-0">•</span>
                    <span>Rs. 18,000/- per kW for additional capacity up to 3 kW</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 flex-shrink-0">•</span>
                    <span>Total subsidy for systems larger than 3 kW capped at Rs. 78,000</span>
                  </li>
                </ul>
              </div>

              {}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#111827] mb-3">
                  Subsidy for Group Housing Society/ Resident Welfare Association:
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-[#333333]">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 flex-shrink-0">•</span>
                    <span>Rs. 18,000 per kW for common facilities, including EV charging, up to 500 kW capacity (@3 kW per house)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 flex-shrink-0">•</span>
                    <span>Upper limit inclusive of individual rooftop plants installed by individual residents in the GHS/RWA</span>
                  </li>
                </ul>
              </div>
            </div>

            {}
            <div className="flex justify-center mt-6 sm:mt-8">
              <button
                className="text-white font-semibold rounded-md transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] w-full max-w-[283.54px] h-12 sm:h-14 md:h-[60px] text-sm sm:text-base"
                style={{
                  backgroundColor: "#3a954f",
                }}
              >
                Request Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {}
      <div className="pb-12 sm:pb-16 md:pb-20 lg:pb-[100px]"></div>
    </section>
  );
}
