import React from "react";
import QuizComp from "../components/quiz/Quiz/QuizComp";
import QuizThree from "../components/quiz/QuizThree";

const QuizThreeContainer = () => {
  return (
    <div className="flex justify-between  flex-col md:flex-row">
      <QuizThree />
      <QuizComp />
    </div>
  );
};

export default QuizThreeContainer;
