import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/questionnaireHeroSection";

const Question4 = () => {
  const options = [
    "Single-family house",
    "Apartment/Condo",
    "Townhouse",

    "Mobile Home",
    "Other",
  ];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="What type of home is this for?"
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/question3"
      navigateToNext="/question5"
    />
  );
};

export default Question4;
