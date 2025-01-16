import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/QuestionnaireHeroSection";

const Question5 = () => {
  const options = ["Own", "Rent"];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="Do you own or rent the home? "
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/question4"
      navigateToNext="/question6"
    />
  );
};

export default Question5;
