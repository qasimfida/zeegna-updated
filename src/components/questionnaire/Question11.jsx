import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/questionnaireHeroSection";

const Question11 = () => {
  const options = ["Yes", "No", "I’m not sure"];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="Do you require structural modifications? (e.g., removing walls, reinforcing floors) "
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/question10"
      navigateToNext="/question12"
    />
  );
};

export default Question11;
