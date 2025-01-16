import Quiz12 from "../components/quiz/Quiz12";
import QuizComp from "../components/quiz/Quiz/QuizComp";

const Quiz12Container = () => {
  return (
    <>
      <div className="flex justify-between flex-col md:flex-row">
        <Quiz12 />
        <QuizComp />
      </div>
    </>
  );
};
export default Quiz12Container;
