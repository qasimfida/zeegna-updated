import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/QuestionnaireHeroSection";

const Question7 = () => {
  const options = [
    "Plumbing leaks",
    "Mold or mildew",
    "Poor ventilation",
    "Damaged flooring or walls",
    "Electrical problems",
    "Other",
    "I’m not sure",
  ];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="Are there any known issues in the bathroom? "
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/question6"
      navigateToNext="/question8"
    />
  );
};

export default Question7;
