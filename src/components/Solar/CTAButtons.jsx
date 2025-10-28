import React from 'react';

const CTAButtons = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="w-full sm:w-80 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg">
            AVAIL SUBSIDY
          </button>
          
          <button className="w-full sm:w-80 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg">
            VIEW FINANCE OPTIONS
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTAButtons;

