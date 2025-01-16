import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/questionnaireHeroSection";

const FundingMade4 = () => {
  const options = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "Over $20,000",
  ];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="What is your estimated budget or cost for the modification project?"
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/funding-made-3"
      navigateToNext="/funding-made-5"
    />
  );
};

export default FundingMade4;
