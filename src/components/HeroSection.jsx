import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[100svh] md:h-screen overflow-hidden">
      {}
      <img
        src="/bg_banner.jpeg"
        alt="Sustainability background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10" />

      {}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6">
        {}
        <div className="h-full flex flex-col justify-start pt-32 md:pt-40">
          {}
          <h1
            className="text-white font-extrabold leading-tight max-w-4xl
                       text-3xl sm:text-4xl md:text-6xl lg:text-7xl animate-fade-up"
            style={{ animationDelay: "0.12s" }}
          >
            Reduce/Offset your Carbon Footprint
          </h1>
          <br></br>
          <br></br>
          <h2
            className="text-orange-400 font-extrabold leading-tight max-w-4xl
                       text-[15px] sm:text-[22px] md:text-[32px] lg:text-[37.5px] animate-fade-up"
            style={{ animationDelay: "0.12s" }}
          >
            We offer Integrated Net-zero solutions, with focus on solar and water & wastewater management,
            for businesses and individuals looking to reduce their carbon footprint. <br></br>

          </h2>
        </div>
      </div>

      {}
      <div
        className="absolute right-6 md:right-10 bottom-20 md:bottom-24"
        style={{ animationDelay: "0.25s" }}
      >
        <a
          href="#get-started"
          className="inline-block bg-orange-500 text-white
                     px-10 md:px-12 py-4 md:py-5 rounded-full
                     text-lg md:text-xl font-semibold shadow-lg
                     transition-all duration-500
                     animate-roll-up
                     hover:-translate-y-1 hover:rotate-6 hover:bg-green-600 hover:shadow-xl
                     focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black/10"
        >
          Get Started
        </a>
      </div>

      {}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp .6s ease-out both;
        }

        @keyframes rollUpIntro {
          0%   { opacity: 0; transform: translateY(18px) rotate(-8deg) scale(.98); }
          60%  { opacity: 1; transform: translateY(-2px) rotate(4deg)  scale(1.05); }
          100% { opacity: 1; transform: translateY(0)    rotate(0deg)  scale(1); }
        }
        .animate-roll-up {
          animation: rollUpIntro .8s cubic-bezier(.2,.8,.25,1) both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
