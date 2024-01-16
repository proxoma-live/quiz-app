const useList = () => {
  return [
    {
      question: "In React.js, what enhances performance?",
      choices: [
        "Virtual DOM",
        "Original DOM",
        "Both Virtual and Original DOM",
        "None of the mentioned",
      ],
      type: "Multiple Choice",
      correctAnswer: ["Virtual DOM"],
    },
    {
      question: "Define ReactJS.",
      choices: [
        "Server-side framework",
        "User Interface framework",
        "Both Server-side and User Interface framework",
        "None of the mentioned",
      ],
      type: "Multiple Choice",
      correctAnswer: ["User Interface framework"],
    },
    {
      question: "Which is utilized to provide external data to components?",
      choices: ["Render with arguments", "setState", "PropTypes", "props"],
      type: "Multiple Choice",
      correctAnswer: ["props"],
    },
    {
      question: "What programming language is React.js developed in?",
      choices: ["Python", "Java", "C#", "JavaScript"],
      type: "Multiple Choice",
      correctAnswer: ["JavaScript"],
    },
    {
      question: "What does Babel signify?",
      choices: [
        "JavaScript interpreter",
        "JavaScript transpiler",
        "JavaScript compiler",
        "None of the mentioned",
      ],
      type: "Multiple Choice",
      correctAnswer: ["JavaScript compiler"],
    },
  ];
};

export default useList;
