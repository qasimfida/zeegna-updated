import Quiz15 from "../components/quiz/Quiz!5";
import QuizComp from "../components/quiz/Quiz/QuizComp";

const Quiz15Container = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <Quiz15 />
      <QuizComp />
    </div>
  );
};
export default Quiz15Container;
