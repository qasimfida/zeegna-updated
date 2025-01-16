import React from "react";
import QuizComp from "../components/quiz/Quiz/QuizComp";
import QuizFour from "../components/quiz/QuizFour";

const QuizFourContainer = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <QuizFour />
      <QuizComp />
    </div>
  );
};

export default QuizFourContainer;
