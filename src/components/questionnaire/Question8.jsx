import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/questionnaireHeroSection";

const Question8 = () => {
  const options = ["Yes", "No", "I’m not sure"];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="Are you considering changing the bathroom layout? "
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/question7"
      navigateToNext="/question9"
    />
  );
};

export default Question8;
