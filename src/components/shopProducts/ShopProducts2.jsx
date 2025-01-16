import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/questionnaireHeroSection";

const ShopProducts2 = () => {
  const options = [
    "Yes, connect me with financial advisors",
    "No",
    "I’m not sure",
  ];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="Would you like to explore financing options for larger home mod projects?"
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/shop-products-1"
      navigateToNext="/Profile-setup"
    />
  );
};

export default ShopProducts2;
