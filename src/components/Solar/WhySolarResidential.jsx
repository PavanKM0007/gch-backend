import React from "react";

export default function WhySolarResidential() {
  return (
    <section className="w-full bg-white">
      {}
      <div className="mx-auto max-w-[1440px]">
        {}
        <div className="flex flex-col lg:flex-row items-center justify-center py-8 sm:py-12 md:py-16 px-4 md:px-8 lg:px-16 gap-6 lg:gap-8">
          {}
          <div className="w-full lg:w-auto order-2 lg:order-1">
            <img
              src="/Housing-Society-Image.jpg"
              alt="Housing Society Solar Installation"
              className="w-full max-w-[585px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg mx-auto"
            />
          </div>
          {}
          <div className="w-full lg:w-[615px] order-1 lg:order-2 px-4 lg:px-[15px]">
            {}
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#111827] mb-4 sm:mb-6 lg:mb-[10px] mt-0 lg:mt-[15px] leading-tight">
              What You'll Invest As The Upfront Cost Will Be Recovered Within 3 To 5 Years
            </h2>
            {}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-[#333333] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                Housing Socieities' maintenance associations can significantly reduce the fixed expenditure and also avail power at a fixed cost for atleast 25 years by switching over to rooftop solar power system, and at the same time they can get environment friendly power. Associations have to incur heavy monthly expenditure to maintain the power needs of common areas like lifts, corridors, water supply, lighting etc. Not only they are charged as per commercial rates, they are also subject to periodical upward revision.
              </p>
              <p className="text-[#333333] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                Maintenance associations can put a stop to this fixed expenditure and also avail power at a fixed cost for atleast 25 years by switching over to solar power.
              </p>
            </div>
            {}
            <div className="flex justify-center mt-6 sm:mt-8">
              <button
                className="w-full max-w-[283.54px] h-[50px] sm:h-[55px] lg:h-[60px] text-white font-semibold rounded-md transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] text-sm sm:text-base"
                style={{
                  backgroundColor: "#3a954f",
                }}
              >
                Book consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
