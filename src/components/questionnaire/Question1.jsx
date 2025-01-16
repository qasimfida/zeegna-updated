import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/questionnaireHeroSection";

const Question1 = () => {
  const options = [
    "Full bathroom remodel",
    "Installation of specific safety features (e.g., grab bars, handrails)",
    "Both",
  ];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="What is the scope of the project you're considering?"
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/help-section"
      navigateToNext="/question2"
    />
  );
};

export default Question1;
