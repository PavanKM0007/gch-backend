import React from "react";
import {
  DollarSign,
  Users,
  TrendingDown,
  Home,
  CheckCircle,
  Settings,
} from "lucide-react";

const WhyChooseGCH = () => {
  const benefits = [
    {
      id: 1,
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      title: "Easy Finance Options",
    },
    {
      id: 2,
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Free Consultancy",
    },
    {
      id: 3,
      icon: <TrendingDown className="w-12 h-12 text-green-600" />,
      title: "Lowest Industry Prices",
    },
    {
      id: 4,
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: "Transparent & Haggle-free Purchase",
    },
    {
      id: 5,
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Standardised Scope of Work",
    },
    {
      id: 6,
      icon: <Settings className="w-12 h-12 text-green-600" />,
      title: "Choice of Branded Components",
    },
  ];

  return (
    <section className="bg-white py-16 px-5 md:px-10 lg:px-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {}
        <h2 className="text-gray-900 font-extrabold text-2xl sm:text-3xl md:text-4xl leading-snug mb-6">
          Why Choose{" "}
          <span className="text-green-600">GreenCarbonHub</span> for Your
          Rooftop Solar Power Project?
        </h2>

        {}
        <p className="text-gray-600 text-base sm:text-lg md:text-[17.5px] leading-relaxed max-w-4xl mx-auto mb-12 text-justify md:text-center">
          <span className="font-semibold text-gray-800">GreenCarbonHub</span> is
          promoted by a Civil Servant with 23 years of experience in
          administration — power, solid waste, and liquid waste management. Backed
          by a team of seasoned experts, we provide all Net-Zero solutions under
          one roof. If you’re looking for the best rooftop solar company in
          Hyderabad, here’s why we stand out:
        </p>

        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center p-8 border border-gray-100"
            >
              <div className="mb-5">{benefit.icon}</div>
              <h3 className="text-gray-800 font-semibold text-lg sm:text-xl">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>

        {}
        <p className="text-gray-600 text-base sm:text-lg md:text-[17.5px] leading-relaxed max-w-4xl mx-auto mt-14 text-justify md:text-center">
          <span className="font-semibold text-gray-800">GreenCarbonHub</span>’s
          engineers have successfully designed and installed numerous rooftop
          solar systems. We work closely with you to tailor solutions for your
          unique energy needs — delivering reliability, top-tier products, and
          24/7 support. Choose excellence. Choose sustainability.{" "}
          <span className="text-green-600 font-semibold">Contact us today!</span>
        </p>
      </div>
    </section>
  );
};

export default WhyChooseGCH;
