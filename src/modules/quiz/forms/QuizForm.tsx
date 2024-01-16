import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import * as Types from "../types";

interface FormValues extends Types.IForm.IValues {}

interface IChildren extends FormikProps<FormValues> {}

interface IProps {
  children(props: IChildren): JSX.Element;
}

const QuizForm: React.FC<IProps> = ({ children }) => {
  const initialValues: Types.IForm.IValues = {
    answerId: 0,
    answer: false,
    currentQuestionIndex: 0,
    showResult: false,
    score: 0,
    totalCorrect: 0,
    totalIncorrect: 0,
  };
  return (
    <Formik
      enableReinitialize
      onSubmit={({ score, totalCorrect, totalIncorrect }) =>
        console.log(
          "score",
          score,
          "totalScore",
          totalCorrect,
          "totalIncorrect",
          totalIncorrect
        )
      }
      validationSchema={Yup.object({
        score: Yup.number().max(100).min(0),
        totalScore: Yup.number().max(100).min(0),
        totalIncorrect: Yup.number().max(100).min(0),
      })}
      {...{ initialValues }}
    >
      {(props) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default QuizForm;
