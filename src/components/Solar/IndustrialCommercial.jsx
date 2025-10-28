import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import OtherBenefits from './OtherBenefits';
import GCHBenefits from './GCHBenefits';
import Weprovide from './Weprovide';
import FAQ from './FAQ';
import OurClients from './OurClients';
import { Building, DollarSign, Leaf, Factory, GraduationCap, Pill, Snowflake, Cross, Egg } from "lucide-react";

const TopCard = ({ icon, title, desc }) => (
  <article
    className="
      bg-white rounded-2xl shadow-md
      flex flex-col items-center text-center
      w-full max-w-[520px] mx-auto
      lg:w-[379.99px] lg:h-[507.2px]
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

const SmallCard = ({ icon, title, desc }) => (
  <article
    className="
      bg-white rounded-2xl shadow-md
      flex flex-col items-center text-center
      w-full max-w-[520px] mx-auto
      lg:w-[379.99px] lg:h-[389.6px]
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

const MediumCard = ({ icon, title, desc }) => (
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

const IndustrialCommercial = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    locality: "",
    city: "",
    units: '',
    businessType: 'industrial-commercial'
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted:\n" + JSON.stringify(form, null, 2));
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
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
              Reduce Your Power Bill By Upto 90% By Switching To Solar
              </h1>
              
              <p className="text-base md:text-md lg:text-xl text-blue-100 mb-6 md:mb-8">
              Achieve NET ZERO emissions by shifting from fossil fuel-based energy to renewable energy by engaging GreenCarbonHub. Book An Appointment For A Free Industrial Solar System Consultation in Hyderabad
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
                  name="locality"
                  required
                  className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                  placeholder="Locality"
                  value={form.locality}
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
                <select
                  name="businessType"
                  required
                  className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 text-sm sm:text-base"
                  value={form.businessType}
                  onChange={handleChange}
                >
                  <option value="">Select Type</option>
                  <option value="residential">Residential</option>
                  <option value="housing-society">Housing Society</option>
                  <option value="industrial-commercial">Industrial/Commercial</option>
                </select>
                
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base min-w-[120px] sm:min-w-[150px] mx-auto lg:mx-0"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <section className="w-full bg-white pt-[120px] pb-[80px]">
        <div className="flex justify-center">
          <button 
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ borderRadius: '25px' }}
          >
            VIEW FINANCE OPTIONS
          </button>
        </div>
      </section>

      <section className="w-full bg-[#EBF3ED] py-10 sm:py-12 md:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
          <div className="mx-auto w-full lg:w-[1200px]">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#333333] mb-2">
                Why Choose An Industrial Rooftop Solar Power System For Your Business?
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
                Industries like manufacturing, food processing, fabrication, and others require high electricity demands. Industrial rooftop solar power systems offer a renewable and cost-effective alternative to thermal power. Businesses benefit significantly from industrial rooftop solar installations.
              </p>
            </div>

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
              <MediumCard
                icon={<Leaf />}
                title="Environmental Benefits"
                desc="By installing one kw solar panel, you can reduce 0.84 tonnes of carbon dioxide emissions. Keeping this in view, the Indian government has set a target of installing Gigawatt by 2030."
              />
              <MediumCard
                icon={<DollarSign />}
                title="Economical Benefits"
                desc="By installing solar power, you can reduce your power bill by as much as 90% and get your ROI within 3 to 4 years. After that you enjoy free power for upto 21 to 22 years."
              />
              <MediumCard
                icon={<Building />}
                title="National Interest"
                desc="India imported coal worth 2.3 lakh crore between April to September of financial year 2023. We can save precious foreign exchange by switching to solar."
              />
            </div>
          </div>
        </div>
      </section>
      
      <OtherBenefits />
      
      <section className="w-full bg-[#EBF3ED] py-10 sm:py-12 md:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
          <div className="mx-auto w-full lg:w-[1200px]">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-[24px] sm:text-[28px] md:text-[42px] font-bold text-[#333333] mb-2">
                How Businesses Can Utilize Industrial Solar Power System?
              </h2>
              <p 
                className="text-[#000000] mb-5 text-left"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0px 0px 5px',
                  textAlign: 'center'
                }}
              >
                Discover how Industries and businesses can use Industrial Solar Power Systems and Solar Energy for their daily purposes.
              </p>
            </div>

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
                icon={<Factory />}
                title="Rooftop Solar For Manufacturing Industries"
                desc="Various manufacturing industries such as Aerospace, Automobile, textile, Chemicals, Consumer Goods, Agricultural Machinery, etc. can utilize Rooftop Solar Energy to power their devices and components. This includes manufacturing machines, machine tools, equipment, lighting systems, and HVAC systems."
              />
              <TopCard
                icon={<GraduationCap />}
                title="Rooftop Solar For Educational Institutes"
                desc="Educational institutes like Schools, Colleges, and Private Institutes house computer laboratories, science laboratories, research, and development centers that consume a significant amount of electricity. Installing Rooftop Solar Energy in these institutions can lead to substantial cost savings on these devices."
              />
              <TopCard
                icon={<Pill />}
                title="Rooftop Solar For Pharma Companies"
                desc="Pharma Companies are large commercial spaces where electricity and water consumption are critical. By installing Solar Power Plants in Pharma Companies, a considerable amount of money can be saved while powering their machinery and devices."
              />
              <TopCard
                icon={<Snowflake />}
                title="Rooftop Solar For Cold Storages"
                desc="Cold Storages and Warehouses used by Manufacturers, Importers, Exporters, and Farmers can use Rooftop Solar Energy to power cooling systems, lights, fans, and other equipment."
              />
              <TopCard
                icon={<Cross />}
                title="Rooftop Solar For Hospitals"
                desc="Hospitals require a significant amount of energy for medical devices, lighting, HVAC systems, and more. Rooftop Solar Panels can greatly reduce energy costs while ensuring uninterrupted power supply."
              />
              <TopCard
                icon={<Egg />}
                title="Rooftop Solar For Hatcheries"
                desc="Hatcheries use machines such as incubators and air conditioners, consuming significant electricity. Installing Rooftop Solar Panels can help hatcheries save costs while operating sustainably."
              />
            </div>
          </div>
        </div>
      </section>
      
      <GCHBenefits />
      
      <Weprovide type="industrial" />
      
      <FAQ />
      
      <OurClients />
    </div>
  );
};

export default IndustrialCommercial;