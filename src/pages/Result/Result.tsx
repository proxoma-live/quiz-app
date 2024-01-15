import styles from "./Result.module.scss";
import * as Types from "../../modules/quiz/types";
import { quizInitialState } from "data";

interface IProps {
  questions: Types.IQuestion[];
  result: Types.IResult;
  setResult: (value: React.SetStateAction<Types.IResult>) => void;
  setShowResult: (value: React.SetStateAction<boolean>) => void;
}

const Result: React.FC<IProps> = ({
  questions,
  result,
  setResult,
  setShowResult,
}) => {
  const onTryAgain = () => {
    setResult(quizInitialState);
    setShowResult(false);
  };

  return (
    <div className={styles.result}>
      <h3 className={styles["heading-3"]}>Result</h3>
      <p className={styles.paragraph}>
        Total Questions: <span>{questions.length}</span>
      </p>
      <p className={styles.paragraph}>
        Total Score: <span>{result.score}</span>
      </p>
      <p className={styles.paragraph}>
        Correct Answers: <span>{result.totalCorrect}</span>
      </p>
      <p className={styles.paragraph}>
        Wrong Answers: <span>{result.totalIncorrect}</span>
      </p>
      <button className={styles.button} onClick={onTryAgain}>
        Try again
      </button>
    </div>
  );
};

export default Result;
