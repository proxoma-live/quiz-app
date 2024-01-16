import { useFormikContext } from "formik";
import styles from "./Question.module.scss";
import * as Types from "modules/quiz/types";

interface IProps {
  questions: Types.IQuestion[];
}

const Question: React.FC<IProps> = ({ questions }) => {
  const formik = useFormikContext<Types.IForm.IValues>();

  const { question, choices, correctAnswer } =
    questions[formik.values.currentQuestionIndex];

  const onAnswerClick = (answer: string, index: number) => {
    formik.setFieldValue("answerId", index);

    if (answer === correctAnswer) {
      formik.setFieldValue("answer", true);
    } else {
      formik.setFieldValue("answer", false);
    }
  };

  const onClickNext = () => {
    formik.setFieldValue("answerId", null);

    if (formik.values.answer) {
      formik.setFieldValue("score", formik.values.score + 5);
      formik.setFieldValue("totalCorrect", formik.values.totalCorrect + 1);
    } else {
      formik.setFieldValue("totalIncorrect", formik.values.totalIncorrect + 1);
    }

    const nextQuestionIndex =
      formik.values.currentQuestionIndex !== questions.length - 1
        ? formik.values.currentQuestionIndex + 1
        : -1;

    formik.setFieldValue("currentQuestionIndex", nextQuestionIndex);

    const showResult = nextQuestionIndex === -1;
    formik.setFieldValue("showResult", showResult);
  };

  return (
    <>
      <span className={styles.activeQuestionNo}>
        {formik.values.currentQuestionIndex + 1}
      </span>
      <span className={styles.totalQuestion}>/{questions.length}</span>
      <h2 className={styles["heading-2"]}>{question}</h2>
      <ul className={styles.listWrapper}>
        {choices.map((choice, index) => (
          <li
            onClick={() => onAnswerClick(choice, index)}
            key={choice}
            className={
              formik.values.answerId === index
                ? styles.listItemActive
                : styles.listItem
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
          type="button"
          disabled={formik.values.answerId === null}
        >
          {formik.values.currentQuestionIndex === questions.length - 1
            ? "Finish"
            : "Next"}
        </button>
      </div>
    </>
  );
};

export default Question;
