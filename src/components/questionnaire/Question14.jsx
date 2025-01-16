import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/questionnaireHeroSection";

const Question14 = () => {
  const options = ["Yes", "No", "I’m not sure"];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="Do you need assistance with selecting materials and fixtures (if necessary)? "
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/question13"
      navigateToNext="/question15"
    />
  );
};

export default Question14;
