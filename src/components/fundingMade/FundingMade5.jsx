import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/questionnaireHeroSection";

const FundingMade5 = () => {
  const options = [
    "As soon as possible",
    "Within 1-3 months",
    "Within 3-6 months",
    "Flexible",
  ];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="What is the timeline for when you need the funding and the modifications completed?"
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/funding-made-4"
      navigateToNext="/funding-made-6"
    />
  );
};

export default FundingMade5;
