import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    image: './solar_service.jpg',
    title: "Solar Installation",
    description: "Power your home and business with reliable solar power at lowest industry prices.Choose from top-branded components tailored to your needs. Enjoy lifetime maintenance and worry-free clean energy for years to come.",
    path: "/solar-installation"
  },
  {
    image: './waste_water.jpg',
    title: "Water & Wastewater Management",
    description: "Upgrade your facility with expert ETP and STP installation at lowest industry prices.Select from a trusted branded components for reliable performance. Benefit from our lifetime maintenance support for hassle-free operations.",
    path: "/water-and-wastewater-management"
  },

];

const ServiceCards = ({ image, title, description, path }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md border border-gray-200 flex flex-col items-center px-4 sm:px-6 py-6 sm:py-8 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 w-full max-w-sm sm:max-w-md mx-auto group"
      style={{ minHeight: '420px' }}
    >
      <div className="flex flex-col items-center w-full z-10 relative flex-1">
        <div className="flex justify-center items-center mb-4 sm:mb-6 w-full">
          <img
            src={image}
            alt={title}
            className="h-28 w-28 sm:h-32 sm:w-32 object-cover rounded-md"
          />
        </div>
        <div className="w-full text-center flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-3 group-hover:text-white transition-colors">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 font-poppins mb-2 sm:mb-6 group-hover:text-white transition-colors">
              {description}
            </p>
          </div>
          <Link
            to={path}
            className="mt-auto font-poppins text-[#3A954F] font-semibold hover:underline text-base sm:text-lg group-hover:text-white transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 rounded-xl pointer-events-none transition-colors duration-200 group-hover:bg-[#3A954F] z-0" />
    </div>
  );
};

const Installations = () => (
  <>
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-10 text-gray-800">
          Installations
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Green Carbon Hub offers installation services at lowest industry prices using branded components. Our team with cumulative experience of 75+ years ensures long <br/>life-cycle.
            </p>
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 place-items-center">
            {cardData.slice(0, 2).map((card, idx) => (
              <ServiceCards key={idx} {...card} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 place-items-center">
            {cardData.slice(2, 4).map((card, idx) => (
              <ServiceCards key={idx + 2} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Installations;
