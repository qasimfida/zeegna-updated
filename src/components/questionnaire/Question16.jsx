import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/questionnaireHeroSection";

const Question16 = () => {
  const options = [
    "Under $5,000",
    "$5,000 - $10,000 ",
    "$10,000 - $20,000",
    "$20,000 - $30,000",
    "Over $30,000",
    "I’m not sure",
  ];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="What is your estimated budget amount for this project?  "
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/question15"
      navigateToNext="/question17"
    />
  );
};

export default Question16;
