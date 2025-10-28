import React, { useEffect, useState } from "react";

export default function RepaymentTable({ loanAmount = 50_000, loanTerm = 0.5, interestRate = 7.99 }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDuration] = useState("6M");
  const [expandedYears, setExpandedYears] = useState(new Set());

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const calculateRepaymentData = () => {
    const P = loanAmount;
    const r = interestRate / 100 / 12;
    const n = Math.round(loanTerm * 12);
    
    const EMI = r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    const monthlyData = [];
    let remainingBalance = P;
    const currentDate = new Date();
    
    for (let i = 0; i < n; i++) {
      const interestPayment = remainingBalance * r;
      const principalPayment = EMI - interestPayment;
      remainingBalance -= principalPayment;
      
      const paymentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + i + 1, 1);
      const monthName = paymentDate.toLocaleDateString('en-US', { 
        month: 'short', 
        year: 'numeric' 
      });
      
      monthlyData.push({
        month: monthName,
        principal: Math.round(principalPayment),
        interest: Math.round(interestPayment),
        total: Math.round(EMI)
      });
    }
    
    return {
      "6M": {
        "Year 1": monthlyData
      }
    };
  };
  
  const repaymentData = calculateRepaymentData();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const toggleYear = (year) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  const getYearSummary = (yearData) => {
    const totalPrincipal = yearData.reduce((sum, month) => sum + month.principal, 0);
    const totalInterest = yearData.reduce((sum, month) => sum + month.interest, 0);
    const totalPayment = yearData.reduce((sum, month) => sum + month.total, 0);
    
    return { totalPrincipal, totalInterest, totalPayment };
  };

  return (
    <section
      className={`w-full bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-[100px] pb-12 sm:pb-16 md:pb-20 lg:pb-[70px] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-[#008000] text-white px-4 sm:px-6 py-3 sm:py-4">
            <h3 className="text-base sm:text-lg md:text-[20px] font-semibold">Repayment Table</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm lg:text-[14px] font-semibold text-[#333333]">
                    YEAR/MONTH
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm lg:text-[14px] font-semibold text-[#333333]">
                    PRINCIPAL
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm lg:text-[14px] font-semibold text-[#333333]">
                    INTEREST
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm lg:text-[14px] font-semibold text-[#333333]">
                    TOTAL PAYMENT
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(repaymentData[activeDuration] || {}).map(([year, yearData]) => {
                  const isExpanded = expandedYears.has(year);
                  const summary = getYearSummary(yearData);
                  
                  return (
                    <React.Fragment key={year}>
                      <tr className="border-b border-gray-200 hover:bg-gray-200 bg-gray-100">
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                          <button
                            onClick={() => toggleYear(year)}
                            className="flex items-center justify-center text-xs sm:text-sm lg:text-[14px] font-medium text-[#333333] hover:text-[#008000] mx-auto"
                          >
                            {year}
                            <span className={`ml-2 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                              ▲
                            </span>
                          </button>
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm lg:text-[14px] text-[#333333]">
                          {formatCurrency(summary.totalPrincipal)}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm lg:text-[14px] text-[#333333]">
                          {formatCurrency(summary.totalInterest)}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm lg:text-[14px] text-[#333333]">
                          {formatCurrency(summary.totalPayment)}
                        </td>
                      </tr>
                      
                      {isExpanded && yearData.map((month, index) => (
                        <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                          <td className="px-3 sm:px-6 py-2 sm:py-3 pl-6 sm:pl-12 text-center text-xs sm:text-sm lg:text-[13px] text-[#666666]">
                            {month.month}
                          </td>
                          <td className="px-3 sm:px-6 py-2 sm:py-3 text-center text-xs sm:text-sm lg:text-[13px] text-[#666666]">
                            {formatCurrency(month.principal)}
                          </td>
                          <td className="px-3 sm:px-6 py-2 sm:py-3 text-center text-xs sm:text-sm lg:text-[13px] text-[#666666]">
                            {formatCurrency(month.interest)}
                          </td>
                          <td className="px-3 sm:px-6 py-2 sm:py-3 text-center text-xs sm:text-sm lg:text-[13px] text-[#666666]">
                            {formatCurrency(month.total)}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
