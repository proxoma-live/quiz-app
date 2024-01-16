import styles from "./Result.module.scss";
import * as Types from "../../modules/quiz/types";
import { useFormikContext } from "formik";

interface IProps {
  questions: Types.IQuestion[];
}

const Result: React.FC<IProps> = ({ questions }) => {
  const onTryAgain = () => {
    formik.setFieldValue("score", 0);
    formik.setFieldValue("totalCorrect", 0);
    formik.setFieldValue("totalIncorrect", 0);
    formik.setFieldValue("currentQuestionIndex", 0);
    formik.setFieldValue("showResult", false);
  };

  const formik = useFormikContext<Types.IForm.IValues>();

  return (
    <div className={styles.result}>
      <h3 className={styles["heading-3"]}>Result</h3>
      <p className={styles.paragraph}>
        Total Questions: <span>{questions.length}</span>
      </p>
      <p className={styles.paragraph}>
        Total Score: <span>{formik.values.score}</span>
      </p>
      <p className={styles.paragraph}>
        Correct Answers: <span>{formik.values.totalCorrect}</span>
      </p>
      <p className={styles.paragraph}>
        Wrong Answers: <span>{formik.values.totalIncorrect}</span>
      </p>
      <button type="submit" className={styles.button} onClick={onTryAgain}>
        Try again
      </button>
    </div>
  );
};

export default Result;
