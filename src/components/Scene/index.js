import { useState } from "react";
import Answers from "../Answers";

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
];

export default function Scene() {
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentQNumber, setCurrentQNumber] = useState(0);

  function handleNextClick(e) {
    if (currentQNumber >= QAMatrix.length - 1) setIsCompleted(true);
    setHasGuessed(false);
    setCurrentQNumber(currentQNumber + 1);
  }

  return (
    <>
      <div className="question">{QAMatrix[currentQNumber].question}</div>

      <Answers
        currentQNumber={currentQNumber}
        QAMatrix={QAMatrix}
        hasGuessed={hasGuessed}
        setHasGuessed={setHasGuessed}
      />
      {isCompleted ? (
        <h2>Finished</h2>
      ) : (
        hasGuessed && <button onClick={handleNextClick}>next Q</button>
      )}
    </>
  );
}
