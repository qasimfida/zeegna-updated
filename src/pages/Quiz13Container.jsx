import Quiz13 from "../components/quiz/Quiz13";
import QuizComp from "../components/quiz/Quiz/QuizComp";

const Quiz13Container = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <Quiz13 />
      <QuizComp />
    </div>
  );
};
export default Quiz13Container;
