import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import * as Types from "../types";

interface FormValues extends Types.IForm.IValues {}

interface IChildren extends FormikProps<FormValues> {}

interface IProps {
  children(props: IChildren): JSX.Element;
}

const QuizForm: React.FC<IProps> = ({ children }) => (
  <Formik
    onSubmit={() => console.log("submitting...")}
    initialValues={{ score: 0, totalScore: 0, totalIncorrect: 0 }}
    validationSchema={Yup.object({
      score: Yup.number().max(100).min(0),
      totalScore: Yup.number().max(100).min(0),
      totalIncorrect: Yup.number().max(100).min(0),
    })}
  >
    {(props) => <Form>{children(props)}</Form>}
  </Formik>
);

export default QuizForm;
