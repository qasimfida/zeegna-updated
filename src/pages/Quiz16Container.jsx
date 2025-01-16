import Quiz16 from "../components/quiz/Quiz16";
import QuizComp from "../components/quiz/Quiz/QuizComp";

const Quiz16Container = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <Quiz16 />
      <QuizComp />
    </div>
  );
};
export default Quiz16Container;
