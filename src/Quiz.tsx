import { useState } from "react";
import * as Types from "./modules/quiz/types";
import { quizInitialState } from "./data";
import Result from "pages/Result";
import Question from "pages/Question";
import { QuizForm } from "modules/quiz/forms";

const Quiz = ({ questions }: { questions: Types.IQuestion[] }) => {
  const [result, setResult] = useState(quizInitialState);
  const [showResult, setShowResult] = useState(false);

  return (
    <QuizForm>
      {() => (
        <div className="quiz-container">
          {!showResult ? (
            <Question
              {...{
                result,
                setResult,
                setShowResult,
                questions,
              }}
            />
          ) : (
            <Result {...{ setResult, setShowResult, result, questions }} />
          )}
        </div>
      )}
    </QuizForm>
  );
};

export default Quiz;
