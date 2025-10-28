import React, { useState } from "react";
import SolarHeroSection from "./SolarHeroSection.jsx";
import CTAButtons from "./CTAButtons.jsx";
import InstallationServices from "./InstallationServices.jsx";
import WhyChooseSolar from "./WhyChooseSolar.jsx";
import GCHBenefits from "./GCHBenefits.jsx";
import SolarBenefitsCards from "./SolarBenefitsCards.jsx";
import Weprovide from "./Weprovide.jsx";
import Subsidy from "./Subsidy.jsx";
import RooftopSolutions from "./RooftopSolutions.jsx";
import FinanceOptions from "./FinanceOptions.jsx";
import DocumentRequirements from "./DocumentRequirements.jsx";
import LoanCalculator from "./LoanCalculator.jsx";
import RepaymentTable from "./RepaymentTable.jsx";
import GetALoanForm from "./GetALoanForm.jsx";

function SolarInstallation() {
  const [sharedLoanData, setSharedLoanData] = useState({
    loanAmount: 50_000,
    loanTerm: 0.5,
    activeTab: "residential"
  });

  return (
    <div className="min-w-0 w-full overflow-x-hidden">
      <SolarHeroSection />
      <CTAButtons />
      <InstallationServices />
      <WhyChooseSolar />
      <GCHBenefits />
      <SolarBenefitsCards />
      <Weprovide type="residential" />
      <Subsidy />
      <RooftopSolutions />
      <FinanceOptions />
      <DocumentRequirements />
      <LoanCalculator sharedLoanData={sharedLoanData} setSharedLoanData={setSharedLoanData} />
      <RepaymentTable 
        loanAmount={sharedLoanData.loanAmount} 
        loanTerm={sharedLoanData.loanTerm} 
        interestRate={sharedLoanData.activeTab === "housingSociety" ? 9.15 : 7.99} 
      />
      <GetALoanForm />
    </div>
  );
}

export default SolarInstallation;
