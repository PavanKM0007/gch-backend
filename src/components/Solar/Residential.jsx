import React, { useState } from 'react';
import Navbar from "../Navbar.jsx";
import CTAButtons from "./CTAButtons.jsx";
import WhySolarResidential from "./WhySolarResidential.jsx";
import WhyChooseGCH from "./WhyChooseGCH.jsx";
import FAQ from "./FAQ.jsx";
import OurClients from "./OurClients.jsx";
import OtherBenefits from "./OtherBenefits.jsx";
import Subsidy from "./Subsidy.jsx";
import WhatWeDo from "./WhatWeDo.jsx";
import formService from "../../services/formService";
import { Home, DollarSign, Leaf, Zap, Shield, Settings } from "lucide-react";

const TopCard = ({ icon, title, desc }) => (
  <article
    className="
      bg-white rounded-2xl shadow-md
      flex flex-col items-center text-center
      w-full max-w-[520px] mx-auto
      lg:w-[379.99px] lg:h-[413.6px]
    "
    style={{
      paddingTop: '60px',
      paddingRight: '50px', 
      paddingBottom: '60px',
      paddingLeft: '60px'
    }}
  >
    <div className="mb-4 text-green-600">
      {React.cloneElement(icon, { className: "w-10 h-10 sm:w-12 sm:h-12" })}
    </div>
    <h3 className="text-[17px] sm:text-[19px] md:text-[20px] font-bold text-[#111827] mb-3 sm:mb-4">
      {title}
    </h3>
    <p 
      className="text-[#828282] text-justify"
      style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        lineHeight: '24px',
        marginBottom: '30px'
      }}
    >
      {desc}
    </p>
  </article>
);

const BottomCard = ({ icon, title, desc }) => (
  <article
    className="
      bg-white rounded-2xl shadow-md
      flex flex-col items-center text-center
      w-full max-w-[620px] mx-auto
      lg:w-[585px] lg:h-[341.6px]
      p-4 sm:p-5 lg:p-[15px]
    "
  >
    <div className="mb-4 text-green-600">
      {React.cloneElement(icon, { className: "w-10 h-10 sm:w-12 sm:h-12" })}
    </div>
    <h3 className="text-[17px] sm:text-[19px] md:text-[20px] font-bold text-[#111827] mb-3 sm:mb-4">
      {title}
    </h3>
    <p className="text-[15px] sm:text-[16px] leading-7 text-[#333333] text-justify">
      {desc}
    </p>
  </article>
);

const ResidentialHeroSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    units: "",
    service: "Residential"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await formService.submitSolarInquiry(form);
      setSubmitStatus('success');
      setForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        units: "",
        service: "Residential"
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="relative min-h-screen"
      style={{
        backgroundImage: "url('/bg_banner.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        <div className="flex-1 flex items-center justify-center p-6 md:p-8 lg:p-12">
          <div className="text-white max-w-2xl">
            <div className=" px-4 md:px-6 py-3 rounded-full text-center mb-6 md:mb-8 inline-block">
              <span className="text-sm md:text-lg font-bold text-green-600">Save Money, Save The Environment!</span>
            </div>
            
            <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8">
            Best Residential Rooftop Solar Panel
            Installation Company in Hyderabad
            </h1>
            
            <p className="text-base md:text-md lg:text-xl text-blue-100 mb-6 md:mb-8">
            Achieve NET ZERO emissions by shifting from fossil fuel-based energy to renewable energy by engaging GreenCarbonHub. Reduce 0.84 tonnes of CO2 emissions per annum per KW of Solar power installed. Get Started Today! </p>
            <p>
            A Best Solar Company in Hyderabad that saves your Money and Time.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[600px] xl:w-[700px] p-6 md:p-8 lg:p-12 flex flex-col justify-center">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:max-w-none lg:mx-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">Contact Us</h2>
            
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6" autoComplete="off">
              <input
                type="text"
                name="name"
                required
                className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                required
                className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                required
                className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                required
                className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                placeholder="Home Address"
                value={form.address}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                required
                className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
              />
              <input
                type="text"
                name="units"
                required
                className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                placeholder="Average Monthly Units"
                value={form.units}
                onChange={handleChange}
              />
              <input
                type="hidden"
                name="service"
                value="Residential"
              />
              <div className="flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base min-w-[120px] sm:min-w-[150px]"
                  style={{ borderRadius: '5px' }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Residential = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ResidentialHeroSection />
      <CTAButtons />
      
      <section className="w-full bg-[#EBF3ED] py-10 sm:py-12 md:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
          <div className="mx-auto w-full lg:w-[1200px]">
            {}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#333333] mb-2">
                Benefits of Choosing Rooftop Solar Power for Homes
              </h2>
              <p 
                className="text-[#000000] mb-5 text-left"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0px 0px 5px'
                }}
              >
                Residential Rooftop Solar Panels have become more efficient and affordable with its vast benefits and government subsidies, making them a viable option for various types of homes, from single-family houses to multi-unit dwellings. Rooftop solar panel installation in Hyderabad not only helps you get free electricity but also helps you to earn money on each unit your solar power system produces.
              </p>
            </div>

            {}
            <div
              className="
                grid place-items-center
                gap-y-8 sm:gap-y-10
                sm:grid-cols-2 sm:gap-x-6
                lg:grid-cols-3
                lg:gap-x-8
                lg:justify-center
              "
            >
              <TopCard
                icon={<Leaf />}
                title="Environmental Benefits"
                desc="By installing one kw solar panel, you can reduce 0.84 tonnes of carbon dioxide emissions. Keeping this in view, the Indian government has set a target of installing Gigawatt by 2030 as part of mission net zero."
              />
              <TopCard
                icon={<DollarSign />}
                title="Economical Benefits"
                desc="By installing solar power, you can reduce your power bill by as much as 90% and get your ROI within 3 to 4 years. After that you enjoy free power for upto 21 to 22 years."
              />
              <TopCard
                icon={<Home />}
                title="National Interest"
                desc="India imported coal worth 2.3 lakh crore between April to September of financial year 2023. We can save precious foreign exchange by switching to solar."
              />
            </div>
          </div>
        </div>
      </section>
      
      {}
      <OtherBenefits />
      
      {}
      <Subsidy />
      
      {}
      <WhatWeDo />
      
      {}
      <WhySolarResidential />
      
      {}
      <WhyChooseGCH />
      
      {}
      <FAQ />
      
      {}
      <OurClients />
    </div>
  );
};

export default Residential;
