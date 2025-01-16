import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/questionnaireHeroSection";

const Question18 = () => {
  const options = ["Yes", "No ", "I’m not sure"];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="Are you interested in financing options or payment plans?   "
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/question17"
      navigateToNext="/question19"
    />
  );
};

export default Question18;
