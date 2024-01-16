import Quiz from "./Quiz";
import * as Hooks from "modules/quiz/hooks";

function App() {
  const questions = Hooks.useQuestionsList();
  return <Quiz questions={questions} />;
}

export default App;
