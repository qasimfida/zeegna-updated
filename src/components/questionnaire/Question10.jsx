import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/questionnaireHeroSection";

const Question10 = () => {
  const options = ["Yes", "No", "I’m not sure"];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="Do you need to move or add electrical outlets? "
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/question9"
      navigateToNext="/question11"
    />
  );
};

export default Question10;
