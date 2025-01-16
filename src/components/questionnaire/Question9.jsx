import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/QuestionnaireHeroSection";

const Question9 = () => {
  const options = ["Yes", "No", "I’m not sure"];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="Do you need to move or add plumbing fixtures? "
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/question8"
      navigateToNext="/question10"
    />
  );
};

export default Question9;
