import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/QuestionnaireHeroSection";

const Question17 = () => {
  const options = ["Yes", "No ", "I’m not sure"];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="Is this project covered by an insurance claim?   "
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/question16"
      navigateToNext="/question18"
    />
  );
};

export default Question17;
