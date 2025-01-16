import Quiz17 from "../components/quiz/Quiz17";
import QuizComp from "../components/quiz/Quiz/QuizComp";

const Quiz17Container = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <Quiz17 />
      <QuizComp />
    </div>
  );
};
export default Quiz17Container;
