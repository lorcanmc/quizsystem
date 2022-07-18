import { useState } from "react";
import Answers from "../Answers";

import css from "./scene.module.css";

const QAMatrix = [
  {
    question: "London is capital of which country?",
    correctAnswer: "United Kingdom",
    WrongAnswers: ["France", "United States", "Australia"],
  },
  {
    question: "Buenos Aires is capital of which country?",
    correctAnswer: "Argentina",
    WrongAnswers: ["Cuba", "Colombia", "Brazil"],
  },
  {
    question: "Buenos Aires is capital of which country?",
    correctAnswer: "Argentina",
    WrongAnswers: ["Cuba", "Colombia", "Brazil"],
  },
];

export default function Scene() {
  const [score, setScore] = useState(0);
  console.log(score)
  const [hasGuessed, setHasGuessed] = useState(false);
  const [currentQNumber, setCurrentQNumber] = useState(0);

  function handleNextClick(e) {
    // if (currentQNumber >= QAMatrix.length - 2) {
    //   setIsCompleted(true);
    //   console.log("test")
    // }
    setHasGuessed(false);
    setCurrentQNumber(currentQNumber + 1);
  }

  return (
    <>
      <h2>Score: {score}</h2>
      <div className={css.question}>{QAMatrix[currentQNumber].question}</div>

      <Answers
        currentQNumber={currentQNumber}
        QAMatrix={QAMatrix}
        hasGuessed={hasGuessed}
        setHasGuessed={setHasGuessed}
        setScore={setScore}
      />
      {hasGuessed && currentQNumber >= QAMatrix.length - 1 ? (
        <h2>Finished</h2>
      ) : (
        <button onClick={handleNextClick}>next Q</button>
      )}
    </>
  );
}
