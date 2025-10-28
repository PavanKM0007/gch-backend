import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is the difference between a grid-tied and off-grid solar system?",
      answer: "A grid-tied solar system is connected to the electrical grid in your area, so you can sell the excess amount of generated electricity back to the utility company. Whereas, the off-grid solar system is not connected to the electrical grid, which means you will store the energy in the batteries and use it for home purposes later."
    },
    {
      id: 2,
      question: "How much will it cost to install an Industrial solar energy system in Hyderabad?",
      answer: "The cost to install an industrial rooftop solar energy system depends on - Size of the system - The type of equipment we choose - And the location of the installation To get the precise cost or estimation, contact our free consultation team."
    },
    {
      id: 3,
      question: "How much money will I save on my energy bills in Hyderabad?",
      answer: "The amount of money that anyone save on energy bills by installation of solar systems depends on few factors, including - Size of the industrial rooftop solar energy system - The current energy consumption."
    },
    {
      id: 4,
      question: "How long will it take for a solar energy system to pay for itself?",
      answer: "Payback period for an industrial solar energy system will be varying according to the cost of the system, amount of energy that a system generates, and also the price of each electricity unit in your area."
    }
  ];

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 px-0">
      <style>{`
        :host, :root {
          --fa-font-thin: normal 100 1em / -12 "Font Awesome 6 Pro";
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <h2 className="text-[#111827] text-center font-bold mb-8 sm:mb-10 md:mb-12 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35.2px]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3 sm:space-y-4 w-full">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-md border border-gray-200 w-full"
              style={{
                minHeight: '59.2px',
                paddingTop: '16px',
                paddingRight: '20px',
                paddingBottom: '16px',
                paddingLeft: '20px',
                fontSize: '16px',
                fontWeight: '600',
                color: openId === faq.id ? '#3A954F' : 'var(--tp-heading-primary)',
                transition: 'all 0.3s ease'
              }}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 
                  className="pr-4 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-tight" 
                  style={{ color: openId === faq.id ? '#3A954F' : 'var(--tp-heading-primary)' }}
                >
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openId === faq.id ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#3A954F' }} />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--tp-heading-primary)' }} />
                  )}
                </div>
              </button>
              
              {openId === faq.id && (
                <div 
                  className="mt-4"
                  style={{
                    padding: '0px 0px 20px 0px',
                    color: '#828282',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.5'
                  }}
                >
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
