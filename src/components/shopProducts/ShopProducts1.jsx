import React from "react";
import QuestionnaireHeroSection from "../questionnaireHero/questionnaireHeroSection";

const ShopProducts1 = () => {
  const options = ["Yes, connect me with home pros", "No", "I’m not sure"];

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <QuestionnaireHeroSection
      questionTitle="Do you need professional installation for any products?"
      options={options}
      onOptionSelect={handleOptionSelect}
      navigateToPrevious="/find-help"
      navigateToNext="/shop-products-2"
    />
  );
};

export default ShopProducts1;
