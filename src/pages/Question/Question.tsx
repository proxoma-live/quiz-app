import { useState } from "react";
import { Field } from "formik";
import styles from "./Question.module.scss";
import * as Types from "modules/quiz/types";

interface IProps {
  questions: Types.IQuestion[];
  result: Types.IResult;
  setResult: (value: React.SetStateAction<Types.IResult>) => void;
  setShowResult: (value: React.SetStateAction<boolean>) => void;
}

const Question: React.FC<IProps> = ({
  questions,
  setResult,
  setShowResult,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerId, setAnswerId] = useState<number | null>(null);
  const [answer, setAnswer] = useState<boolean>(false);

  const { question, choices, correctAnswer } = questions[currentQuestionIndex];

  const onAnswerClick = (answer: string, index: number) => {
    setAnswerId(index);
    if (answer === correctAnswer) {
      setAnswer(true);
      console.log(answerId);
    } else {
      setAnswer(false);
      console.log(answerId);
    }
  };

  const onClickNext = () => {
    setAnswerId(null);
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.totalCorrect + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.totalIncorrect + 1,
          }
    );

    if (currentQuestionIndex !== questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCurrentQuestionIndex(0);
      setShowResult(true);
    }
  };

  console.log(answerId);
  return (
    <>
      <span className={styles.activeQuestionNo}>
        {currentQuestionIndex + 1}
      </span>
      <span className={styles.totalQuestion}>/{questions.length}</span>
      <h2 className={styles["heading-2"]}>{question}</h2>
      <Field type="checkbox" className={styles.listItem} />
      <ul className={styles.listWrapper}>
        {choices.map((choice, index) => (
          <li
            onClick={() => onAnswerClick(choice, index)}
            key={choice}
            className={
              answerId === index ? styles.listItemActive : styles.listItem
            }
          >
            {choice}
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <button
          className={styles.button}
          onClick={onClickNext}
          disabled={answerId === null}
        >
          {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </>
  );
};

export default Question;
