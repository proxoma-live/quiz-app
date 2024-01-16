import { useState } from "react";
import * as Types from "./modules/quiz/types";
import { quizInitialState } from "./data";
import Result from "pages/Result";
import Question from "pages/Question";
import { QuizForm } from "modules/quiz/forms";

const Quiz = ({ questions }: { questions: Types.IQuestion[] }) => {
  return (
    <QuizForm>
      {({ values: { showResult } }) => (
        <div className="quiz-container">
          {!showResult ? (
            <Question
              {...{
                questions,
              }}
            />
          ) : (
            <Result {...{ questions }} />
          )}
        </div>
      )}
    </QuizForm>
  );
};

export default Quiz;
