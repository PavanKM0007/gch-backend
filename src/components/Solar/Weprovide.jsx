import React, { useState } from "react";

const GREEN = "#008000";

const cards = [
  {
    id: 1,
    title: "Rooftop Solar Panel Layout Design Services",
    short:
      "GreenCarbonHub is one of the best Industrial Rooftop Solar Panel layout designing companies near you that designs your requirements properly.",
    long: `GreenCarbonHub is one of the best Industrial Rooftop Solar Panel layout designing companies near you that designs your requirements properly. Our team of engineers visits your Industry or Organization and enquires about a few factors, including your rooftop size, type of floor, orientation, amount of sunlight your roof receives, energy needs, building codes and regulations, etc. Then, we create a customized solar panel layout design for your industrial solar system that maximizes energy production and minimizes costs. Let us know if you want Commercial Rooftop Solar Panel Systems in your budget. Call the GreenCarbonHub Team Today!`,
  },
  {
    id: 2,
    title: "Rooftop Solar Panel Installation Services",
    short:
      "Choosing an Industrial Solar System and installing perfect Industrial Solar panels is a big decision.",
    long: `At GreenCarbonHub, we always try to understand our customer's requirements precisely, thus making us their first choice for Industrial and Commercial Rooftop Solar Panel System Installation Services. Installation of Solar System involves a lot of steps. Our team of technicians takes care of each and every step in the process. Moreover, our expertise will help you install the right system within your budget. Further, it saves money on your energy bills and reduces your surrounding CO2 Levels. We assure you that the right and long-life Industrial Solar Panels are perfectly installed and work efficiently. Choose the Best Industrial Rooftop Solar Company for your needs wisely.`,
  },
  {
    id: 3,
    title: "Rooftop Solar Commissioning Services",
    short:
      "After installing Industrial rooftop solar panels for your business, it is necessary to have a solar commissioning.",
    long: `After installing Industrial rooftop solar panels for your business, it is necessary to have a solar commissioning. Solar Commissioning helps you ensure that the rooftop solar system is installed correctly and safely. Benefits of Rooftop Solar Commissioning Services: - Ensures that the whole rooftop solar power system is installed correctly - Ensures that the solar system is connected safely to the grid - Get your system up and running quickly. Our GreenCarbonHub team of expert solar technicians will visit your rooftop solar power system project and make sure that it is operating perfectly. If you are looking for an expert solar system commissioning team, contact us today.`,
  },
];

export default function Weprovide({ type = "residential" }) {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((p) => (p === id ? null : id));
  
  const expandedHeight = "650px";

  return (
    <section className="w-full bg-[#EAF3ED]">
      <div className="mx-auto max-w-[1200px] px-[15px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111827] pt-[100px] pb-[100px]">
          We Provide
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 lg:gap-6">
          {cards.map((c) => {
            const expanded = openId === c.id;
            return (
              <article
                key={c.id}
                className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.10)] transition-all duration-300 flex flex-col w-full max-w-[380px] lg:flex-1 lg:max-w-none"
                style={{
                  height: expanded ? expandedHeight : "229.2px",
                  border: "0.8px solid #e5e7eb",
                }}
              >
                <div className="px-6 pt-6 flex-1 overflow-hidden">
                  <h3 className="text-center text-[22px] font-semibold text-[#111827]">
                    {c.title}
                  </h3>

                  {!expanded ? (
                    <p className="mt-4 text-[16px] leading-7 text-center text-[#333333]">
                      {c.short}
                    </p>
                  ) : (
                    <p className="mt-4 text-[16px] leading-7 text-justify text-[#333333]">
                      {c.long}
                    </p>
                  )}
                </div>

                <div className="w-full flex justify-center">
                  <button
                    onClick={() => toggle(c.id)}
                    className="rounded-md text-white font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
                    style={{
                      background: GREEN,
                      padding: "6px 12px",
                      borderStyle: "solid",
                      borderWidth: "0.8px",
                      borderColor: GREEN,
                      marginTop: "11px",
                      marginBottom: "18px",
                    }}
                  >
                    {expanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="pb-[100px]"></div>
    </section>
  );
}
