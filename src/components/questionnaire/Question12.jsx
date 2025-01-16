import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/QuestionnaireHeroSection";

const Question11 = () => {
  const options = ["Yes", "No", "I’m not sure"];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="Do you require the provider to obtain permits and handle inspections (if necessary)? "
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/question11"
      navigateToNext="/question13"
    />
  );
};

export default Question11;
