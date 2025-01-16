import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/questionnaireHeroSection";

const FundingMade3 = () => {
  const options = ["Yes", "No"];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="Have you already started the home modification project?"
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/funding-made-2"
      navigateToNext="/funding-made-4"
    />
  );
};

export default FundingMade3;
