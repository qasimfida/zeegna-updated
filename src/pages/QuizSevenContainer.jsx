import React from "react";
import QuizComp from "../components/quiz/Quiz/QuizComp";
import QuizSeven from "../components/quiz/QuizSeven";

const QuizSevenContainer = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <QuizSeven />
      <QuizComp />
    </div>
  );
};

export default QuizSevenContainer;
