import React from "react";
import QuizComp from "../components/quiz/Quiz/QuizComp";
import QuizEight from "../components/quiz/QuizEight";

const QuizEightContainer = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <QuizEight />
      <QuizComp />
    </div>
  );
};

export default QuizEightContainer;
