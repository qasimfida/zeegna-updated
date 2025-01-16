import React from "react";
import QuizComp from "../components/quiz/Quiz/QuizComp";
import QuizTen from "../components/quiz/QuizTen";

const QuizTenContainer = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <QuizTen />
      <QuizComp />
    </div>
  );
};

export default QuizTenContainer;
