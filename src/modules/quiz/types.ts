export interface IQuestion {
  question: string;
  choices: string[];
  type: string;
  correctAnswer: string;
}

export interface IResult {
  score: number;
  totalCorrect: number;
  totalIncorrect: number;
}

export declare namespace IForm {
  export interface IValues {
    score: number;
    totalScore: number;
    totalIncorrect: number;
  }
}
