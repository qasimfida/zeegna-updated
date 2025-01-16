import React from "react";
import QuestionaireFooter from "./footer/QuestionaireFooter";
import QuestionaireHeader from "./header/QuestionnaireHeader";
import { Outlet, useLocation } from "react-router-dom";

const QuestionaireLayout = () => {
  const location = useLocation();

  const progressMapping = {
    "/help-section": 10,
    "/question1": 20,
    "/question2": 30,
    "/question3": 30,
    "/question4": 20,
    "/question5": 20,
    "/question6": 30,
    "/question7": 20,
    "/question8": 20,
    "/question9": 40,
    "/question10": 50,
    "/question11": 60,
    "/question12": 70,
    "/question14": 75,
    "/question15": 80,
    "/question16": 85,
    "/question17": 90,
    "/question18": 95,
    "/question19": 99,

    "/profile-setup": 100,
    // shopproducts
    "/shop-products-1": 20,
    "/shop-products-2": 20,
    // funding-made
    "/funding-made": 10,
    "/funding-made-1": 20,
    "/funding-made-2": 20,
    "/funding-made-3": 20,
    "/funding-made-4": 20,
    "/funding-made-5": 20,
    "/funding-made-6": 20,
  };

  const progress = progressMapping[location.pathname] || 0;

  const showProgressBar = location.pathname !== "/email-verification";

  return (
    <div>
      <QuestionaireHeader
        progress={progress}
        showProgressBar={showProgressBar}
      />
      <main>
        <Outlet />
      </main>
      <QuestionaireFooter />
    </div>
  );
};

export default QuestionaireLayout;
