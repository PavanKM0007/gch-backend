import React, { useEffect, useState } from "react";

const documentCategories = [
  { id: 1, name: "Residential Documents", active: true },
  { id: 2, name: "Proprietorship Company", active: false },
  { id: 3, name: "Partnership Company", active: false },
  { id: 4, name: "Private Limited Company", active: false },
  { id: 5, name: "Housing Society", active: false }
];

const documentLists = {
  residential: {
    general: [
      "PAN card",
      "Aadhar card (front and back)",
      "One year Bank Statement",
      "Latest Power bill",
      "Phone number",
      "Latest Photo",
      "email ID",
      "Solar Proposal with Bill of Material and financial Terms"
    ],
    salaried: ["Three month's Pay slips"],
    selfEmployed: [
      "2 years of Income Tax Returns (ITR)",
      "Business proof (GST certificate, Udhyam)"
    ]
  },
  proprietorship: {
    kyc: [
      "PAN & Aadhar Card",
      "Office address proof",
      "Registration Certificate",
      "Udyam Aadhar"
    ],
    financial: [
      "GST certificate & 1 yrs returns",
      "Financials of last 3 FY",
      "Latest 1 year Bank statement",
      "Loan obligation sheet"
    ],
    project: [
      "Ownership Proof (Latest 3 months Electricity Bill)",
      "Discom Sanction Letter",
      "DPR - Detailed Project Report"
    ]
  },
  partnership: {
    kyc: [
      "PAN & Aadhar Card - for all partners",
      "Office address proof",
      "Partnership deed / Agreement",
      "Certificate of incorporation"
    ],
    financial: [
      "Financials of last 3 yrs",
      "Latest 1 year Bank statement",
      "Loan obligation sheet",
      "GST certificate & 1 yrs returns"
    ],
    project: [
      "Latest 3 months Electricity Bill",
      "Discom Sanction Letter",
      "DPR - Detailed Project Report"
    ]
  },
  privateLimited: {
    kyc: [
      "MOA",
      "AOA",
      "Board Resolution (with Company's Letter Head)",
      "Share Holding",
      "List Of Directors (with Company's Letter Head)",
      "Certificate of Incorporation",
      "Company PAN card",
      "KYC (for all Partners)"
    ],
    financial: [
      "GST Certificate/ Form along with 2 yrs return",
      "3 year Financials with provisional year",
      "3 years ITR",
      "1 year bank statement",
      "Loan obligation sheet"
    ],
    project: [
      "Discom Sanction Letter",
      "DPR - Detailed Project Report",
      "Installation place - Ownership proof",
      "Office address proof",
      "Electricity Bill - Last 3 Months"
    ]
  },
  housingSociety: {
    kyc: [
      "PAN card of Society/Trust",
      "Registration Certificate",
      "Documents containing list of members",
      "Mobile and Email ID of Authorised Person",
      "KYC of Members"
    ],
    financial: [
      "Last 12 Months Bank Statements",
      "Last 2 Years ITR with Computation/Audit Report"
    ],
    project: ["Last 3 Months Electricity Bill"]
  }
};

const Star = () => (
  <span className="inline-flex items-center justify-center w-8 h-8 text-[32px] leading-none text-[#008000] mr-2 align-middle">
    ★
  </span>
);

const Bullet = () => (
  <span className="text-[#008000] text-[18px] w-8 h-8 flex items-center justify-center mr-2">
    •
  </span>
);

export default function DocumentRequirements() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("residential");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getDocumentList = (category) => {
    return documentLists[category] || documentLists.residential;
  };

  const getCategoryTitle = (category) => {
    switch (category) {
      case "residential":
        return "Residential Documents";
      case "proprietorship":
        return "Proprietorship Company Documents";
      case "partnership":
        return "Partnership Company Documents";
      case "privateLimited":
        return "Private Limited Company Documents";
      case "housingSociety":
        return "Housing Society Documents";
      default:
        return "Residential Documents";
    }
  };

  return (
    <section
      className={`w-full bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-[100px] pb-12 sm:pb-16 md:pb-20 lg:pb-[70px] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-bold text-[#111827] mb-4">
            Our Finance Options
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold text-[#111827] mb-4">
            Document List
          </h3>
          <p className="text-sm sm:text-base lg:text-[16px] text-[#666666]">
            Here are the required documents for your solar project.
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-[2px_4px_rgba(0,0,0,0.05)] border border-gray-200">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
            <div className="w-full lg:w-full lg:max-w-xs space-y-2 sm:space-y-3">
              {documentCategories.map((category) => {
                const categoryMap = {
                  1: "residential",
                  2: "proprietorship",
                  3: "partnership",
                  4: "privateLimited",
                  5: "housingSociety"
                };
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(categoryMap[category.id])}
                    className={`w-full text-left py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                      activeCategory === categoryMap[category.id]
                        ? "bg-[#008000] text-white"
                        : "bg-gray-100 text-[#333333] hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>

            <div className="flex-1 p-4 sm:p-6 md:p-[30px] rounded-lg bg-[rgb(218_201_201_/_15%)]">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-[#2D3748] mb-4 sm:mb-6 md:mb-[25px] pb-2 sm:pb-[10px] border-b-2 border-[#008000]">
                {getCategoryTitle(activeCategory)}
              </h2>

               {activeCategory === "residential" && (
                <>
                  <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm mb-4 sm:mb-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <h4 className="text-base sm:text-lg lg:text-[18px] font-semibold text-[#111827] flex items-center">
                        <Star /> Documents Needed
                      </h4>
                    </div>
                     <ul className="space-y-2 sm:space-y-[12px]">
                       {documentLists.residential.general.map((doc, i) => (
                         <li key={i} className="flex items-start">
                           <Bullet />
                           <span className="text-[#828282] text-sm sm:text-base lg:text-[16px] font-inter leading-relaxed">
                             {doc}
                           </span>
                         </li>
                       ))}
                     </ul>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm mb-4 sm:mb-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <h4 className="text-base sm:text-lg lg:text-[18px] font-semibold text-[#111827] flex items-center">
                        <Star /> For Salaried Employees
                      </h4>
                    </div>
                     <ul className="space-y-2 sm:space-y-[12px]">
                       {documentLists.residential.salaried.map((doc, i) => (
                         <li key={i} className="flex items-start">
                           <Bullet />
                           <span className="text-[#828282] text-sm sm:text-base lg:text-[16px] font-inter leading-relaxed">
                             {doc}
                           </span>
                         </li>
                       ))}
                     </ul>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <h4 className="text-base sm:text-lg lg:text-[18px] font-semibold text-[#111827] flex items-center">
                        <Star /> For Self Employed
                      </h4>
                    </div>
                     <ul className="space-y-2 sm:space-y-[12px]">
                       {documentLists.residential.selfEmployed.map((doc, i) => (
                         <li key={i} className="flex items-start">
                           <Bullet />
                           <span className="text-[#828282] text-sm sm:text-base lg:text-[16px] font-inter leading-relaxed">
                             {doc}
                           </span>
                         </li>
                       ))}
                     </ul>
                  </div>
                 </>
               )}

               {activeCategory === "proprietorship" && (
                 <>
                   <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                     <div className="flex items-center mb-4">
                       <h4 className="text-[18px] font-semibold text-[#111827] flex items-center">
                         <Star /> KYC Documents
                       </h4>
                     </div>
                     <ul className="space-y-[12px]">
                       {documentLists.proprietorship.kyc.map((doc, i) => (
                         <li key={i} className="flex items-start">
                           <Bullet />
                           <span className="text-[#828282] text-[16px] font-inter">
                             {doc}
                           </span>
                         </li>
                       ))}
                     </ul>
                   </div>

                   <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                     <div className="flex items-center mb-4">
                       <h4 className="text-[18px] font-semibold text-[#111827] flex items-center">
                         <Star /> Financial Documents
                       </h4>
                     </div>
                     <ul className="space-y-[12px]">
                       {documentLists.proprietorship.financial.map((doc, i) => (
                         <li key={i} className="flex items-start">
                           <Bullet />
                           <span className="text-[#828282] text-[16px] font-inter">
                             {doc}
                           </span>
                         </li>
                       ))}
                     </ul>
                   </div>

                   <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                     <div className="flex items-center mb-4">
                       <h4 className="text-[18px] font-semibold text-[#111827] flex items-center">
                         <Star /> Project Documents
                       </h4>
                     </div>
                     <ul className="space-y-[12px]">
                       {documentLists.proprietorship.project.map((doc, i) => (
                         <li key={i} className="flex items-start">
                           <Bullet />
                           <span className="text-[#828282] text-[16px] font-inter">
                             {doc}
                           </span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 </>
               )}

               {activeCategory === "partnership" && (
                 <>
                   <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                     <div className="flex items-center mb-4">
                       <h4 className="text-[18px] font-semibold text-[#111827] flex items-center">
                         <Star /> KYC Documents
                       </h4>
                     </div>
                     <ul className="space-y-[12px]">
                       {documentLists.partnership.kyc.map((doc, i) => (
                         <li key={i} className="flex items-start">
                           <Bullet />
                           <span className="text-[#828282] text-[16px] font-inter">
                             {doc}
                           </span>
                         </li>
                       ))}
                     </ul>
                   </div>

                   <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                     <div className="flex items-center mb-4">
                       <h4 className="text-[18px] font-semibold text-[#111827] flex items-center">
                         <Star /> Financial Documents
                       </h4>
                     </div>
                     <ul className="space-y-[12px]">
                       {documentLists.partnership.financial.map((doc, i) => (
                         <li key={i} className="flex items-start">
                           <Bullet />
                           <span className="text-[#828282] text-[16px] font-inter">
                             {doc}
                           </span>
                         </li>
                       ))}
                     </ul>
                   </div>

                   <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                     <div className="flex items-center mb-4">
                       <h4 className="text-[18px] font-semibold text-[#111827] flex items-center">
                         <Star /> Project Documents
                       </h4>
                     </div>
                     <ul className="space-y-[12px]">
                       {documentLists.partnership.project.map((doc, i) => (
                         <li key={i} className="flex items-start">
                           <Bullet />
                           <span className="text-[#828282] text-[16px] font-inter">
                             {doc}
                           </span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 </>
               )}

               {activeCategory === "privateLimited" && (
                 <>
                   <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                     <div className="flex items-center mb-4">
                       <h4 className="text-[18px] font-semibold text-[#111827] flex items-center">
                         <Star /> KYC Documents
                       </h4>
                     </div>
                     <ul className="space-y-[12px]">
                       {documentLists.privateLimited.kyc.map((doc, i) => (
                         <li key={i} className="flex items-start">
                           <Bullet />
                           <span className="text-[#828282] text-[16px] font-inter">
                             {doc}
                           </span>
                         </li>
                       ))}
                     </ul>
                   </div>

                   <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                     <div className="flex items-center mb-4">
                       <h4 className="text-[18px] font-semibold text-[#111827] flex items-center">
                         <Star /> Financial Documents
                       </h4>
                     </div>
                     <ul className="space-y-[12px]">
                       {documentLists.privateLimited.financial.map((doc, i) => (
                         <li key={i} className="flex items-start">
                           <Bullet />
                           <span className="text-[#828282] text-[16px] font-inter">
                             {doc}
                           </span>
                         </li>
                       ))}
                     </ul>
                   </div>

                   <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                     <div className="flex items-center mb-4">
                       <h4 className="text-[18px] font-semibold text-[#111827] flex items-center">
                         <Star /> Project Documents
                       </h4>
                     </div>
                     <ul className="space-y-[12px]">
                       {documentLists.privateLimited.project.map((doc, i) => (
                         <li key={i} className="flex items-start">
                           <Bullet />
                           <span className="text-[#828282] text-[16px] font-inter">
                             {doc}
                           </span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 </>
               )}

               {activeCategory === "housingSociety" && (
                 <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                   <div className="flex items-center mb-4">
                     <h4 className="text-[18px] font-semibold text-[#111827] flex items-center">
                       <Star /> Documents Needed
                     </h4>
                   </div>
                   <ul className="space-y-[12px]">
                     {documentLists.housingSociety.kyc.map((doc, i) => (
                       <li key={i} className="flex items-start">
                         <Bullet />
                         <span className="text-[#828282] text-[16px] font-inter">
                           {doc}
                         </span>
                       </li>
                     ))}
                     {documentLists.housingSociety.financial.map((doc, i) => (
                       <li key={`financial-${i}`} className="flex items-start">
                         <Bullet />
                         <span className="text-[#828282] text-[16px] font-inter">
                           {doc}
                         </span>
                       </li>
                     ))}
                     {documentLists.housingSociety.project.map((doc, i) => (
                       <li key={`project-${i}`} className="flex items-start">
                         <Bullet />
                         <span className="text-[#828282] text-[16px] font-inter">
                           {doc}
                         </span>
                       </li>
                     ))}
                   </ul>
                 </div>
               )}
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 }
