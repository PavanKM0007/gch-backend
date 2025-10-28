import React, { useState } from "react";

const services = [
  "Residential",
  "Housing Society",
  "Industrial/Commercial",
];

const cities = [
  "Hyderabad",
  "Bangalore",
  "Chennai",
  "Delhi",
  "Mumbai"
];

const SolarHeroSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    city: "",
    units: "",
    service: ""
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

  return (
    <div 
      className="relative min-h-screen"
      style={{
        backgroundImage: "url('/demo_image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {}
        <div className="flex-1 flex items-center justify-center p-6 md:p-8 lg:p-12">
          <div className="text-white max-w-2xl">
            {}
            <div className=" text-green-600 px-4 md:px-6 py-3 rounded-full text-center mb-6 md:mb-8 inline-block">
              <span className="text-sm md:text-lg font-bold">AVAIL SUBSIDY UP TO ₹78,000</span>
            </div>
            
            {}
            <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8">
              Reduce Your Power Bill in a transparent and haggle-free manner with our Solar Installations
              
            </h1>
            
            {}
            {}
          </div>
        </div>

        {}
        <div className="w-full lg:w-[600px] xl:w-[700px] p-6 md:p-8 lg:p-12 flex flex-col justify-center">
          {}
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
                name="location"
                required
                className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                placeholder="Location"
                value={form.location}
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
                name="service"
                required
                className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 text-sm sm:text-base"
                value={form.service}
                onChange={handleChange}
              >
                <option value="">Select Installation Type</option>
                {services.map((svc) => (
                  <option key={svc} value={svc}>{svc}</option>
                ))}
              </select>
              <div className="flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-8 sm:px-12 py-3 sm:py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base min-w-[160px] sm:min-w-[200px]"
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

export default SolarHeroSection;
