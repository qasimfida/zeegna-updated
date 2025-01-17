import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/QuestionnaireHeroSection";

const FundingMade1 = () => {
  const options = [
    "Improving accessibility for mobility challenges",
    "Enhancing home safety",
    "Aging in place",
    "Addressing specific health needs",
    "Improving convenience and functionality",
    "Preparing the home for long-term living",
    "Other",
  ];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="What is the primary reason for the home modification?"
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="//help-section"
      navigateToNext="/funding-made-2"
    />
  );
};

export default FundingMade1;
