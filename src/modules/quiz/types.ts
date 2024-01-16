export interface IQuestion {
  question: string;
  choices: string[];
  type: string;
  correctAnswer: string[];
}

export interface IResult {
  score: number;
  totalCorrect: number;
  totalIncorrect: number;
}

export declare namespace IForm {
  export interface IValues {
    answer: boolean;
    currentQuestionIndex: number;
    answerId: number | null;
    score: number;
    totalCorrect: number;
    totalIncorrect: number;
    showResult: boolean;
  }
}
