import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/questionnaireHeroSection";

const FundingMade2 = () => {
  const options = ["Own", "Rent"];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="Do you currently own or rent the home that needs modifications?"
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/funding-made-1"
      navigateToNext="/funding-made-3"
    />
  );
};

export default FundingMade2;
