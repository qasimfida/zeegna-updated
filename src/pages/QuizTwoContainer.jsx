import React from "react";
import QuizComp from "../components/quiz/Quiz/QuizComp";
import QuizTwo from "../components/quiz/QuizTwo";

const QuizTwoContainer = () => {
  return (
    <div className="flex justify-between  flex-col md:flex-row">
      <QuizTwo />
      <QuizComp />
    </div>
  );
};

export default QuizTwoContainer;
