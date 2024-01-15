import Quiz from "./Quiz";
import { tsQuiz } from "./data";

function App() {
  return <Quiz questions={tsQuiz.questions} />;
}

export default App;
