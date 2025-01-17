import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/QuestionnaireHeroSection";

const Question13 = () => {
  const options = ["Yes", "No", "I’m not sure"];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="Do you require design and planning services? "
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/question12"
      navigateToNext="/question14"
    />
  );
};

export default Question13;
