import QuizEleven from "../components/quiz/QuizEleven";
import QuizComp from "../components/quiz/Quiz/QuizComp";

const Quiz11Container = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <QuizEleven />
      <QuizComp />
    </div>
  );
};
export default Quiz11Container;
