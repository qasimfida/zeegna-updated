import React from "react";
import QuizComp from "../components/quiz/Quiz/QuizComp";
import QuizSix from "../components/quiz/QuizSix";

const QuizSixContainer = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <QuizSix />
      <QuizComp />
    </div>
  );
};

export default QuizSixContainer;
