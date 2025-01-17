import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/QuestionnaireHeroSection";

const Question15 = () => {
  const options = [
    "As soon as possible",
    "Within the next week ",
    "Within the next month",
    "1-3 months",
    "3-6 months",
    "Still in planning phase",
  ];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="How soon do you want this project to get started?  "
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/question14"
      navigateToNext="/question16"
    />
  );
};

export default Question15;
