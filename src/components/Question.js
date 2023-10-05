import { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../contexts/quiz";

const Question = ({ questions }) => {
  const [quizState] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </>
  );
};

export default Question;
