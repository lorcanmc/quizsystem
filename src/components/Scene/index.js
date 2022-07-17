import { useState } from "react";

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
  const [currentQNumber, setCurrentQNumber] = useState(0);
  console.log(hasGuessed);

  function handleClick(e) {
    setHasGuessed(true);
  }

  function handleNextClick(e) {
    setHasGuessed(false);
    setCurrentQNumber(currentQNumber)
  }

  function randomize(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  return (
    <>
      <div className="question">{QAMatrix[currentQNumber].question}</div>
      <div className="answers">
        {randomize([
          <button
            className="answers"
            style={{ backgroundColor: hasGuessed ? "green" : "grey" }}
            onClick={handleClick}
          >
            answer1
          </button>,
          <button>answer2</button>,
          <button>answer3</button>,
          <button>answer4</button>,
        ])}
      </div>
      {hasGuessed && <button onClick={handleNextClick}>next Q</button>}
    </>
  );
}
