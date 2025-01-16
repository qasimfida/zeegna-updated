import React from "react";
import Quiz from "../components/quiz/Quiz/Quiz";
import QuizComp from "../components/quiz/Quiz/QuizComp";

const QuizContainer = () => {
  return (
    <div className="flex gap-[67px] flex-col md:flex-row">
      <Quiz />
      <QuizComp />
    </div>
  );
};

export default QuizContainer;
