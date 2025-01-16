import React from "react";
import QuizComp from "../components/quiz/Quiz/QuizComp";
import QuizFive from "../components/quiz/QuizFive";

const QuizFiveContainer = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <QuizFive />
      <QuizComp />
    </div>
  );
};

export default QuizFiveContainer;
