import QuizComp from "../components/quiz/Quiz/QuizComp";
import QuizNine from "..//components/quiz/QuizNine";
import React from "react";

const QuizNineContainer = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <QuizNine />
      <QuizComp />
    </div>
  );
};
export default QuizNineContainer;
