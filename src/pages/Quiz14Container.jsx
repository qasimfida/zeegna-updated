import Quiz14 from "../components/quiz/Quiz14";
import QuizComp from "../components/quiz/Quiz/QuizComp";
import React from "react";

const Quiz14Container = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <Quiz14 />
      <QuizComp />
    </div>
  );
};
export default Quiz14Container;
